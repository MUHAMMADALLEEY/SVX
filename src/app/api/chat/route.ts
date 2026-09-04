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

function fallbackAnswer(question: string, documents: SiteKnowledgeDocument[]) {
  const context = documents.length > 0 ? documents : siteKnowledgeDocuments.slice(0, 4);
  const productHint = /contact|quote|price|sample|moq|order|timeline|ship|cost/i.test(question)
    ? " For project details like pricing, MOQs, samples, and lead times, the best next step is to send an enquiry through the contact form."
    : "";

  return {
    answer: `${context.map((document) => document.content).join(" ")}${productHint}`,
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
        "You are the SportsVentureX website assistant. Answer only from the supplied site context. " +
        "Be concise, practical, and helpful for brands asking about custom sports goods. " +
        "If the context does not contain exact pricing, MOQ, or lead-time details, ask the visitor to send an enquiry.",
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
