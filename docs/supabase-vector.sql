-- Run this migration in the Supabase SQL editor before enabling vector retrieval.
create extension if not exists vector with schema extensions;

create table if not exists public.documents (
  id text primary key,
  content text not null,
  metadata jsonb not null default '{}'::jsonb,
  embedding extensions.vector(1024) not null
);

create or replace function public.match_documents(
  query_embedding extensions.vector(1024),
  match_count int default 4,
  filter jsonb default '{}'::jsonb
)
returns table (
  id text,
  content text,
  metadata jsonb,
  similarity float
)
language sql stable
as $$
  select
    documents.id,
    documents.content,
    documents.metadata,
    1 - (documents.embedding <=> query_embedding) as similarity
  from public.documents
  where documents.metadata @> filter
  order by documents.embedding <=> query_embedding
  limit match_count;
$$;

create index if not exists documents_embedding_idx
  on public.documents using ivfflat (embedding extensions.vector_cosine_ops)
  with (lists = 10);

-- Keep this table server-write-only. The API uses SUPABASE_SERVICE_ROLE_KEY.
revoke all on public.documents from anon, authenticated;
