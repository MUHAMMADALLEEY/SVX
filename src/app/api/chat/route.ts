import { searchLocalKnowledge, siteKnowledgeDocuments, type SiteKnowledgeDocument } from "@/lib/site-knowledge";

export const runtime = "nodejs";

type ChatRequest = {
  message?: unknown;
};

const maxQuestionLength = 700;

function cleanQuestion(value: unknown) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, maxQuestionLength);
}

function sourceList(documents: SiteKnowledgeDocument[]) {
  return documents.map((document) => ({
    title: document.title,
    source: document.metadata.source,
    section: document.metadata.section,
  }));
}

export function isGreeting(question: string) {
  return /^(hi|hello|hey|greetings|good\s*(morning|afternoon|evening)|hola|howdy|yo)[.!?\s]*$/i.test(question);
}

export function isIdentityQuery(question: string) {
  return /^(who\s*(are\s*u|are\s*you|u\s*are)|what\s*(is|are)\s*(sportsventurex|svx|this\s*site|you)|tell\s*me\s*about\s*(yourself|svx|sportsventurex)|what\s*do\s*you\s*do)[.!?\s]*$/i.test(question);
}

export function isThankYou(question: string) {
  return /^(thanks|thank\s*you|thx|cheers|awesome|great|perfect)[.!?\s]*$/i.test(question);
}

export function isMeetingQuery(question: string) {
  return /(meet|meeting|calendly|schedule\s*(a\s*)?(call|meet|meeting|time|discussion)|book\s*(a\s*)?(call|meet|meeting|time|slot)|video\s*call|zoom|google\s*meet|talk\s*to\s*(someone|team|expert|sales|rep)|add\s*(a\s*)?(meet|meeting))/i.test(
    question,
  );
}

export function fallbackAnswer(question: string, documents: SiteKnowledgeDocument[]) {
  if (isMeetingQuery(question)) {
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || "https://calendly.com/sportsventurex";
    return {
      answer:
        "Yes, absolutely! You can schedule a direct consultation call with our team on Calendly.\n\n" +
        "We'll be delighted to discuss your custom product specifications, samples, and production timelines.\n\n" +
        "Click the button below to choose a time that works best for you:",
      action: {
        type: "calendly",
        label: "Schedule on Calendly",
        url: calendlyUrl,
      },
      sources: [],
      mode: "local",
    };
  }

  if (isGreeting(question)) {
    return {
      answer:
        "Hello! Welcome to SportsVentureX. I'm your SVX Assistant.\n\n" +
        "I can help you with information on:\n" +
        "• Custom sports gear (footballs, performance socks, bags, T-shirts)\n" +
        "• Product branding, materials, and production steps\n" +
        "• Submitting project enquiries for quotes and samples\n\n" +
        "How can I assist your brand today?",
      sources: [],
      mode: "local",
    };
  }

  if (isIdentityQuery(question)) {
    return {
      answer:
        "SportsVentureX is a custom sports goods development and manufacturing partner for growing athletic brands and organizations.\n\n" +
        "We specialize in:\n" +
        "• Custom Footballs (Match, Training, Promotional, Minis)\n" +
        "• Performance Socks (Crew, Ankle, Grip, Knee-High)\n" +
        "• Gear Bags (Backpacks, Duffles, Boot Bags)\n" +
        "• Athletic Apparel (Performance T-Shirts, Polos, Jerseys)\n\n" +
        "Feel free to ask about our manufacturing process or submit an enquiry for custom specifications!",
      sources: sourceList(siteKnowledgeDocuments.slice(0, 2)),
      mode: "local",
    };
  }

  if (isThankYou(question)) {
    return {
      answer: "You're very welcome! If you have any further questions or would like to discuss a custom project, our team is here to help.",
      sources: [],
      mode: "local",
    };
  }

  const hasMatches = documents.length > 0;
  const context = hasMatches ? documents : siteKnowledgeDocuments.slice(0, 3);

  const productHint = /contact|quote|price|sample|moq|order|timeline|ship|cost/i.test(question)
    ? "\n\nFor specific project pricing, MOQs, custom samples, and lead times, please submit your requirements through our contact form below."
    : "";

  let structuredBody = "";
  if (hasMatches) {
    structuredBody = context
      .map((doc) => `• ${doc.title}: ${doc.content}`)
      .join("\n\n");
  } else {
    structuredBody =
      "SportsVentureX produces custom sports goods designed to your brand's specifications.\n\n" +
      "Key offerings include custom footballs, technical socks, gear bags, and sports T-shirts with end-to-end quality control and production support.";
  }

  return {
    answer: `${structuredBody}${productHint}`,
    sources: sourceList(context),
    mode: "local",
  };
}

async function retrieveSupabaseDocuments(question: string): Promise<SiteKnowledgeDocument[]> {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY;
  const cohereApiKey = process.env.COHERE_API_KEY;

  if (!supabaseUrl || !supabaseKey || !cohereApiKey) return [];

  const [{ CohereEmbeddings }, { createClient }] = await Promise.all([
    import("@langchain/cohere"),
    import("@supabase/supabase-js"),
  ]);

  const client = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const embeddings = new CohereEmbeddings({
    apiKey: cohereApiKey,
    model: process.env.COHERE_EMBEDDING_MODEL ?? "embed-english-v3.0",
  });
  const embedding = await embeddings.embedQuery(question);
  const { data: documents, error } = await client.rpc(
    process.env.SUPABASE_MATCH_FUNCTION ?? "match_documents",
    {
      query_embedding: embedding,
      match_count: 4,
      filter: {},
    },
  );
  if (error) throw error;

  return (documents ?? []).map((document: { id?: string | number; content?: string; metadata?: Record<string, unknown> }, index: number) => ({
    id: String(document.metadata?.id ?? document.id ?? `supabase-${index}`),
    title: String(document.metadata?.title ?? document.metadata?.section ?? "SportsVentureX knowledge"),
    content: String(document.content ?? ""),
    metadata: {
      source: String(document.metadata?.source ?? "/"),
      section: String(document.metadata?.section ?? "Knowledge base"),
    },
  }));
}

async function answerWithCohere(question: string, documents: SiteKnowledgeDocument[]) {
  const cohereApiKey = process.env.COHERE_API_KEY;
  if (!cohereApiKey) return null;

  const { ChatCohere } = await import("@langchain/cohere");
  const model = new ChatCohere({
    apiKey: cohereApiKey,
    model: process.env.COHERE_CHAT_MODEL ?? "command-a-03-2025",
    temperature: 0.2,
  });
  const context = documents
    .map((document, index) => `[${index + 1}] ${document.title}\n${document.content}`)
    .join("\n\n");

  const response = await (model as unknown as {
    invoke(messages: Array<{ role: "system" | "human"; content: string }>): Promise<{ content: unknown }>;
  }).invoke([
    {
      role: "system",
      content:
        "You are the official AI representative for SportsVentureX (SVX), a premier custom sports goods manufacturer specializing in footballs, performance socks, athletic apparel, and gear bags.\n\n" +
        "Guidelines:\n" +
        "1. Respond in a warm, executive, highly professional tone.\n" +
        "2. Handle greetings and introduction questions naturally and welcomingly.\n" +
        "3. Structure your answers with short paragraphs and bullet points for readability.\n" +
        "4. Answer using the supplied site context. If exact pricing, MOQ, or custom lead times are requested and not present in context, invite the user to submit an enquiry via the contact form.\n" +
        "5. Keep responses concise, helpful, and direct.",
    },
    {
      role: "human",
      content: `Site context:\n${context}\n\nVisitor question: ${question}`,
    },
  ]);

  return {
    answer: typeof response.content === "string" ? response.content : JSON.stringify(response.content),
    sources: sourceList(documents),
    mode: "cohere",
  };
}

export async function POST(request: Request) {
  let body: ChatRequest;

  try {
    body = (await request.json()) as ChatRequest;
  } catch {
    return Response.json({ message: "Send a valid JSON body." }, { status: 400 });
  }

  const question = cleanQuestion(body.message);
  if (!question) {
    return Response.json({ message: "Send a question for the SportsVentureX assistant." }, { status: 400 });
  }

  if (isGreeting(question) || isIdentityQuery(question) || isThankYou(question) || isMeetingQuery(question)) {
    return Response.json(fallbackAnswer(question, []));
  }

  try {
    const supabaseDocuments = await retrieveSupabaseDocuments(question);
    const documents = supabaseDocuments.length > 0 ? supabaseDocuments : searchLocalKnowledge(question);
    const cohereAnswer = await answerWithCohere(question, documents.length > 0 ? documents : siteKnowledgeDocuments.slice(0, 4));

    return Response.json(cohereAnswer ?? fallbackAnswer(question, documents));
  } catch (error) {
    console.error("SportsVentureX chatbot failed.", error);
    return Response.json(fallbackAnswer(question, searchLocalKnowledge(question)));
  }
}
