import type { Project } from "@/lib/data";

type StoryConfig = {
  eyebrow: string;
  headline: string;
  premise: string;
  distinction: string;
  loomId?: string;
  architecture: Array<{ label: string; detail: string }>;
  proof: Array<{ title: string; text: string }>;
};

const stories: Record<string, StoryConfig> = {
  "founderflow-executive-ai-brain": {
    eyebrow: "Agentic executive operations",
    headline: "Not another inbox copilot. An operating layer for founder attention.",
    premise:
      "FounderFlow does not summarise messages one at a time. It combines communication, calendar, CRM and company priorities so a supervised agent team can decide what deserves attention now.",
    distinction:
      "The intelligence compounds: confidence gates keep recommendations explainable, while founder corrections improve future prioritisation, relationship context and revenue detection.",
    loomId: "fec52a5a980749e58f81433ccef1e9b1",
    architecture: [
      { label: "Business signals", detail: "Gmail, Calendar, HubSpot and founder directives" },
      { label: "Secure context", detail: "Identity, permissions and business-specific memory" },
      { label: "Agent supervisor", detail: "LangGraph routes work to specialist agents" },
      { label: "Trust layer", detail: "Confidence checks and a human teaching loop" },
      { label: "Executive action", detail: "Revenue Radar, Priority Inbox and Battle Plan" },
    ],
    proof: [
      { title: "Revenue-aware", text: "Buying intent, stalled opportunities and financial signals are surfaced before they disappear into inbox noise." },
      { title: "Relationship-aware", text: "Communication history and CRM context explain why a person or conversation matters." },
      { title: "Action-oriented", text: "The output is a prioritised operating plan—not a longer list of AI summaries." },
    ],
  },
  "agentic-rag-document-intelligence": {
    eyebrow: "Grounded document intelligence",
    headline: "Not another PDF chatbot. A verifiable knowledge foundation built for agents.",
    premise:
      "The platform separates ingestion, retrieval and generation so each stage can be tuned, evaluated and integrated. Answers stay connected to the source pages that produced them.",
    distinction:
      "Project isolation, configurable retrieval and citation validation make the system suitable for real company knowledge—not a demo that quietly relies on unsupported model memory.",
    loomId: "a28f6e8636424d279754030bb770d130",
    architecture: [
      { label: "Knowledge sources", detail: "PDFs, policies, manuals and research" },
      { label: "Ingestion", detail: "Extraction, chunking and page metadata" },
      { label: "Retrieval", detail: "Embeddings, vector search and project isolation" },
      { label: "Grounding", detail: "Context assembly, LLM generation and citation checks" },
      { label: "Product layer", detail: "Source-aware answers, console and FastAPI" },
    ],
    proof: [
      { title: "Traceable by design", text: "Page-level references let users inspect the evidence behind an answer." },
      { title: "Ready to integrate", text: "A modular API layer supports product, support and internal knowledge workflows." },
      { title: "Agent-ready", text: "Routing, tools, comparison and evaluation agents can grow from the same foundation." },
    ],
  },
  "lyric-multilingual-foundation-model": {
    eyebrow: "Custom generative music intelligence",
    headline: "Not a GPT wrapper. A songwriting model shaped by multilingual musical structure.",
    premise:
      "Lyric AI learns from an ingested multilingual song corpus and gives creators direct control over language, genre, mood, cadence and originality.",
    distinction:
      "The generation workflow is specialised for songwriting: learned lyrical representations produce candidates that are evaluated for hook strength, coherence, emotional arc, repetition and originality.",
    architecture: [
      { label: "Curated corpus", detail: "Multilingual songs, structure and cultural phrasing" },
      { label: "Representation", detail: "Rhyme, rhythm, narrative and style patterns" },
      { label: "Custom model", detail: "Fine-tuned songwriting foundation model" },
      { label: "Evaluation", detail: "Originality, hook, coherence and repetition checks" },
      { label: "Creator studio", detail: "Generate, compare, refine and export directions" },
    ],
    proof: [
      { title: "Corpus-trained", text: "The product is based on learned songwriting patterns rather than one generic prompt." },
      { title: "Multilingual", text: "Language and cultural phrasing are part of the creative system, not an afterthought." },
      { title: "Creator-controlled", text: "Writers can shape mood, genre, cadence and originality throughout iteration." },
    ],
  },
  "xpera-health-recommendation": {
    eyebrow: "Patient-centred healthcare discovery",
    headline: "Complex treatment information turned into a guided, trustworthy journey.",
    premise:
      "XPera brings treatments, therapies, health topics and real experience-based recommendations into one approachable discovery platform for patients.",
    distinction:
      "The product reduces the distance between a health question and useful next steps by structuring community knowledge, provider context and treatment information around the patient journey.",
    architecture: [
      { label: "Patient intent", detail: "Health topic, condition or treatment question" },
      { label: "Knowledge layer", detail: "Therapies, experiences and structured health content" },
      { label: "Discovery logic", detail: "Relevant paths, recommendations and comparisons" },
      { label: "Trust context", detail: "Community stories, reviews and provider information" },
      { label: "Clear next step", detail: "A responsive journey across treatment options" },
    ],
    proof: [
      { title: "Built around patients", text: "Information is organised around real questions instead of internal healthcare categories." },
      { title: "Trust through context", text: "Experiences and structured recommendations make unfamiliar treatment paths easier to understand." },
      { title: "Full-stack delivery", text: "The responsive interface, content workflows and scalable services work as one product." },
    ],
  },
};

export function FlagshipProjectStory({ project }: { project: Project }) {
  const story = stories[project.slug];
  if (!story) return null;

  return (
    <div className="mt-20 space-y-20">
      <section className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-6 sm:p-10">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `radial-gradient(circle at 82% 12%, ${project.accentTo}, transparent 38%), linear-gradient(145deg, ${project.accentFrom}, transparent 55%)`,
          }}
          aria-hidden="true"
        />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              {story.eyebrow}
            </p>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
              {story.headline}
            </h2>
          </div>
          <div className="space-y-5 border-l border-border pl-6 text-base leading-relaxed text-muted sm:pl-8">
            <p>{story.premise}</p>
            <p className="text-foreground/85">{story.distinction}</p>
          </div>
        </div>
      </section>

      {story.loomId ? (
        <section>
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Product walkthrough
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                See the working system, not just the screens.
              </h2>
            </div>
            <span className="text-sm text-muted">Interactive Loom demo · sound optional</span>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-black p-1.5 shadow-[0_35px_100px_-45px_rgba(0,0,0,0.95)]">
            <div className="relative aspect-video overflow-hidden rounded-[1.35rem]">
              <iframe
                src={`https://www.loom.com/embed/${story.loomId}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`}
                title={`${project.name} product walkthrough`}
                loading="lazy"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </section>
      ) : null}

      <section>
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            System architecture
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            From raw input to a useful, trusted outcome.
          </h2>
        </div>
        <ol className="mt-8 grid overflow-hidden rounded-[1.75rem] border border-border bg-border lg:grid-cols-5">
          {story.architecture.map((step, index) => (
            <li
              key={step.label}
              className="relative min-h-44 bg-background p-5 lg:min-h-52 lg:border-r lg:border-border lg:last:border-r-0"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})`,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 text-base font-semibold">{step.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.detail}</p>
              {index < story.architecture.length - 1 ? (
                <span className="absolute -bottom-3 left-1/2 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-surface text-muted lg:-right-3 lg:bottom-auto lg:left-auto lg:top-1/2 lg:translate-x-0 lg:-translate-y-1/2">
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {story.proof.map((item, index) => (
          <article key={item.title} className="rounded-2xl border border-border bg-surface p-6">
            <span className="font-mono text-[10px] text-muted-2">
              PRINCIPLE {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-7 text-xl font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
