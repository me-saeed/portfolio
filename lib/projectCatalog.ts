import type { Project } from "@/lib/data";

const founderFlow: Partial<Project> & Pick<Project, "slug"> = {
  slug: "founderflow-executive-ai-brain",
  tagline:
    "An AI Executive Chief of Staff that turns inbox noise into decisions, revenue signals and daily focus.",
  role: "Agentic AI, Product & Full-Stack Engineering",
  summary:
    "FounderFlow connects email, calendar and CRM context to surface urgent opportunities, protect founder time and turn everyday communication into an executive action plan.",
  challenge:
    "Founders lose valuable hours inside overloaded inboxes while revenue opportunities, important relationships and meeting context get buried.",
  approach:
    "I built an agentic intelligence layer that classifies communication, detects financial signals, learns from feedback and brings priority actions into one trusted executive workspace.",
  outcome:
    "FounderFlow helps leaders start with what matters: revenue risk, strategic opportunities, prepared meetings and a concise daily battle plan.",
  stack: [
    "LangGraph",
    "LangChain",
    "AI Agents",
    "OpenAI",
    "Google Workspace",
    "HubSpot",
    "Vector Search",
    "Next.js",
    "Node.js",
  ],
  gallery: [
    {
      title: "AI Chief of Staff",
      image: "/imgs/portfolios/founderflow/1.png",
      caption:
        "The FounderFlow product story explains the operational value before showing the underlying workflow.",
    },
    {
      title: "Executive daily briefing",
      image: "/imgs/portfolios/founderflow/2.png",
      caption:
        "A focused morning view surfaces high-risk relationships, revenue exposure and the actions that matter now.",
    },
    {
      title: "Revenue Radar",
      image: "/imgs/portfolios/founderflow/3.png",
      caption:
        "Financial signals are organised by opportunity, incoming revenue and risk, with a recommended next action.",
    },
    {
      title: "Priority intelligence",
      image: "/imgs/portfolios/founderflow/4.png",
      caption:
        "Business communication is ranked by meaning and urgency instead of leaving founders to scan every message.",
    },
    {
      title: "Relationship context",
      image: "/imgs/portfolios/founderflow/5.png",
      caption:
        "CRM and communication context explain relationship health and identify the next best move.",
    },
    {
      title: "Executive workflow",
      image: "/imgs/portfolios/founderflow/6.png",
      caption:
        "FounderFlow brings decisions, follow-ups and strategic context into one connected operating workflow.",
    },
  ],
};

const ragPlatform: Project = {
  slug: "agentic-rag-document-intelligence",
  name: "Agentic RAG Platform",
  tagline:
    "Reliable answers from company documents—with grounding, citations and an architecture ready for agents.",
  category: "Document Intelligence",
  types: ["Web", "AI Agent"],
  platform: "Document Intelligence Platform + API",
  year: "2026",
  role: "RAG Architecture & Backend Engineering",
  timeline: "Production-shaped MVP",
  accentFrom: "#0f766e",
  accentTo: "#2563eb",
  summary:
    "A modular document intelligence platform that turns PDFs into searchable knowledge and grounded answers with page-level citations.",
  challenge:
    "Business knowledge is often trapped inside policies, manuals and research PDFs. Generic chat tools can hallucinate, hide their sources and remain difficult to integrate into real products.",
  approach:
    "I designed a clean RAG pipeline for ingestion, chunking, embeddings, semantic retrieval and grounded generation. Project isolation, configurable retrieval and an API layer make the foundation practical for real workflows.",
  outcome:
    "Teams can reach trusted answers faster, trace every response to its source and extend the same foundation into routed, tool-using agent workflows.",
  highlights: [
    "Multi-project PDF ingestion and isolated vector indexes",
    "Grounded Q&A with source and page-level citations",
    "Configurable retrieval with an API-ready service architecture",
    "Clear extension path for routing, tools and evaluation agents",
  ],
  results: [
    { value: "Grounded", label: "Answers tied to source context" },
    { value: "API-ready", label: "Designed for product integration" },
    { value: "Agent-ready", label: "Structured for workflow expansion" },
  ],
  stack: [
    "Python",
    "LangChain",
    "FAISS",
    "OpenAI",
    "Hugging Face",
    "FastAPI",
    "Streamlit",
    "Pydantic",
  ],
  gallery: [
    {
      title: "Document workspace",
      image: "/imgs/portfolios/rag-document-intelligence/1.avif",
      caption:
        "Documents stay organised by project before indexing and retrieval.",
    },
    {
      title: "Configurable ingestion",
      image: "/imgs/portfolios/rag-document-intelligence/2.avif",
      caption:
        "Retrieval settings can be tuned for the structure and density of each knowledge source.",
    },
    {
      title: "Grounded document chat",
      image: "/imgs/portfolios/rag-document-intelligence/3.avif",
      caption:
        "Answers are generated from retrieved context instead of unsupported model memory.",
    },
    {
      title: "Source-aware responses",
      image: "/imgs/portfolios/rag-document-intelligence/4.avif",
      caption:
        "Page references make answers easier to verify and use in business workflows.",
    },
  ],
};

const lyricFoundationModel: Project = {
  slug: "lyric-multilingual-foundation-model",
  name: "Lyric AI",
  tagline:
    "A custom-trained multilingual model that helps songwriters turn creative direction into distinctive, original lyrics.",
  category: "Generative Music AI",
  types: ["Web", "AI Agent"],
  platform: "AI Songwriting Platform",
  year: "2026",
  role: "AI Model, Backend & Product Engineering",
  timeline: "Custom model product",
  accentFrom: "#7c3aed",
  accentTo: "#06b6d4",
  summary:
    "Lyric AI learns patterns from an ingested multilingual song corpus, then helps creators explore new lyrical ideas across language, genre, mood and flow.",
  links: [
    {
      label: "Try Lyric AI",
      url: "https://lyric.saeedme.com/",
      kind: "website",
    },
  ],
  challenge:
    "Songwriters need inspiration that understands musical structure, cultural phrasing and genre—not generic chatbot copy that sounds like every other generated song.",
  approach:
    "I built Lyric AI around a custom foundation model trained on an ingested multilingual song corpus. Its product controls connect language, genre, cadence and creative direction to a generation pipeline shaped specifically for songwriting.",
  outcome:
    "Creators can move from a blank page to more distinctive song concepts faster, explore unfamiliar styles and iterate toward lyrics with stronger creative and viral potential.",
  highlights: [
    "Custom-trained songwriting model rather than a thin GPT prompt wrapper",
    "Multilingual corpus ingestion and learned lyrical patterns",
    "Genre, language, mood and flow-aware creative controls",
    "Fast iteration designed for writers, artists and music teams",
  ],
  results: [
    { value: "Multilingual", label: "Creative direction across languages" },
    { value: "Custom model", label: "Trained for songwriting patterns" },
    { value: "Creator-first", label: "Built for rapid lyrical iteration" },
  ],
  stack: [
    "Custom Foundation Model",
    "Natural Language Processing",
    "Multilingual Training Corpus",
    "Model Fine-Tuning",
    "AI Inference API",
    "React",
    "Node.js",
  ],
  gallery: [
    {
      title: "From song corpus to original direction",
      image: "/imgs/portfolios/lyric-foundation-model/hero.avif",
      caption:
        "Multilingual song patterns flow into a specialised model that produces new lyrical structures and creative directions.",
    },
    {
      title: "A creator-first lyric studio",
      image: "/imgs/portfolios/lyric-foundation-model/studio.avif",
      caption:
        "Language, genre, mood, cadence and originality controls shape a structured song instead of producing one undirected response.",
    },
    {
      title: "Custom multilingual model training",
      image: "/imgs/portfolios/lyric-foundation-model/training.avif",
      caption:
        "Curated song structures and language patterns train specialised representations for rhyme, rhythm, narrative and cultural phrasing.",
    },
    {
      title: "Generate, evaluate and refine",
      image: "/imgs/portfolios/lyric-foundation-model/evaluation.avif",
      caption:
        "Candidate ideas pass through originality, hook, coherence, emotional-arc and repetition checks before refinement.",
    },
  ],
};

export function applyProjectCatalog(legacyProjects: Project[]): Project[] {
  const founderSource = legacyProjects.find(
    (project) => project.slug === founderFlow.slug,
  );

  if (!founderSource) {
    throw new Error("FounderFlow project is missing from the portfolio catalog.");
  }

  const founder = { ...founderSource, ...founderFlow } as Project;
  const remaining = legacyProjects
    .filter(
      (project) =>
        project.slug !== founder.slug &&
        project.slug !== "pdfgpt-ai-pdf-analyser",
    )
    .map((project) =>
      project.slug === "xpera-health-recommendation"
        ? {
            ...project,
            links: [
              {
                label: "Visit live project",
                url: "https://xpera.saeedme.com/",
                kind: "website" as const,
              },
            ],
            gallery: [
              {
                title: "Patient experience platform",
                image: "/imgs/portfolios/xpera-new/1.png",
                caption:
                  "The new XPera interface helps people discover treatment experiences and trusted community guidance.",
              },
              {
                title: "Treatment discovery",
                image: "/imgs/portfolios/xpera-new/2.png",
                caption:
                  "Clear discovery flows connect health topics with relevant treatments, therapies and experiences.",
              },
              {
                title: "Community recommendations",
                image: "/imgs/portfolios/xpera-new/3.png",
                caption:
                  "Structured reviews make useful health experiences easier to browse and compare.",
              },
              {
                title: "Healthcare knowledge",
                image: "/imgs/portfolios/xpera-new/4.png",
                caption:
                  "Health information is organised into an approachable, search-friendly product experience.",
              },
              {
                title: "Responsive product experience",
                image: "/imgs/portfolios/xpera-new/5.png",
                caption:
                  "The platform remains clear and usable across the main patient journey.",
              },
            ],
          }
        : project,
    );

  return [founder, ragPlatform, lyricFoundationModel, ...remaining];
}
