import { loadEnvConfig } from "@next/env";
import { CohereEmbeddings } from "@langchain/cohere";
import { createClient } from "@supabase/supabase-js";
import { siteKnowledgeDocuments } from "../lib/site-knowledge";

loadEnvConfig(process.cwd());

async function main() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY;
  const cohereApiKey = process.env.COHERE_API_KEY;

  if (!supabaseUrl || !supabaseKey || !cohereApiKey) {
    throw new Error("SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, and COHERE_API_KEY are required.");
  }

  const embeddings = new CohereEmbeddings({
    apiKey: cohereApiKey,
    model: process.env.COHERE_EMBEDDING_MODEL ?? "embed-english-v3.0",
  });
  const client = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const vectors = await embeddings.embedDocuments(siteKnowledgeDocuments.map((document) => document.content));

  const rows = siteKnowledgeDocuments.map((document, index) => ({
    id: document.id,
    content: document.content,
    metadata: { title: document.title, ...document.metadata },
    embedding: vectors[index],
  }));

  const { error } = await client.from(process.env.SUPABASE_VECTOR_TABLE ?? "documents").upsert(rows);
  if (error) throw error;
  console.log(`Ingested ${rows.length} SportsVentureX knowledge documents.`);
}

main().catch((error: unknown) => {
  console.error("Knowledge ingestion failed.", error);
  process.exitCode = 1;
});
