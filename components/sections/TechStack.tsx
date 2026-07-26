"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  technologies,
  type Technology,
  type TechnologyCategory,
} from "@/lib/data";
import type { SimpleIcon } from "simple-icons";
import {
  siAndroid,
  siAngular,
  siAnthropic,
  siDjango,
  siDocker,
  siDotnet,
  siElasticsearch,
  siExpo,
  siExpress,
  siFastapi,
  siFirebase,
  siGithubactions,
  siGooglegemini,
  siGraphql,
  siHuggingface,
  siJavascript,
  siLangchain,
  siLanggraph,
  siLinux,
  siMake,
  siMongodb,
  siMysql,
  siN8n,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siNumpy,
  siOllama,
  siPandas,
  siPostgresql,
  siPytorch,
  siPython,
  siQdrant,
  siReact,
  siRedis,
  siScikitlearn,
  siSupabase,
  siTailwindcss,
  siTensorflow,
  siTypescript,
  siZapier,
} from "simple-icons";

const categories = [...new Set(technologies.map((technology) => technology.category))];
const categoryDescriptions: Record<TechnologyCategory, string> = {
  "AI & LLM": "Agentic systems, grounded generation, model integration, and intelligent product workflows.",
  "Machine Learning": "Training, optimization, data preparation, inference, and production ML pipelines.",
  "Vector & Search": "Semantic retrieval, embeddings, hybrid search, and scalable knowledge systems.",
  Frontend: "Fast, accessible product interfaces and production-grade web applications.",
  Mobile: "Cross-platform iOS and Android products with native-quality experiences.",
  Backend: "Secure APIs, service architecture, authentication, and application infrastructure.",
  Database: "Transactional, document, realtime, caching, and managed data systems.",
  Automation: "Operational workflows connecting APIs, CRMs, communication, and business data.",
  "Cloud & DevOps": "Deployment, containers, delivery pipelines, and reliable cloud infrastructure.",
};

const brandIcons: Record<string, SimpleIcon> = {
  Claude: siAnthropic,
  Gemini: siGooglegemini,
  "Hugging Face": siHuggingface,
  LangChain: siLangchain,
  LangGraph: siLanggraph,
  Ollama: siOllama,
  Python: siPython,
  PyTorch: siPytorch,
  TensorFlow: siTensorflow,
  "scikit-learn": siScikitlearn,
  Pandas: siPandas,
  NumPy: siNumpy,
  Qdrant: siQdrant,
  Elasticsearch: siElasticsearch,
  React: siReact,
  "Next.js": siNextdotjs,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  Angular: siAngular,
  "Tailwind CSS": siTailwindcss,
  "React Native": siReact,
  Expo: siExpo,
  Android: siAndroid,
  "Node.js": siNodedotjs,
  NestJS: siNestjs,
  Express: siExpress,
  Django: siDjango,
  FastAPI: siFastapi,
  ".NET": siDotnet,
  GraphQL: siGraphql,
  MongoDB: siMongodb,
  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  Redis: siRedis,
  Supabase: siSupabase,
  Firebase: siFirebase,
  n8n: siN8n,
  Make: siMake,
  Zapier: siZapier,
  Docker: siDocker,
  "GitHub Actions": siGithubactions,
  Linux: siLinux,
};

function CustomLogo({ name }: { name: string }) {
  if (name === "OpenAI") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.1a4.45 4.45 0 0 1 7.5 3.25 4.45 4.45 0 0 1 1.2 7.7 4.45 4.45 0 0 1-3.75 6.5 4.45 4.45 0 0 1-7.5-3.25 4.45 4.45 0 0 1-1.2-7.7A4.45 4.45 0 0 1 12 3.1Zm0 2.1L8.35 7.3v4.2L12 13.6l3.65-2.1V7.3L12 5.2Zm-5.45 3.15a2.4 2.4 0 0 0-.3 4.55l3.65 2.1 3.65-2.1-3.65-2.1v-4.2L6.55 8.35Zm10.9 0-3.35 1.93 3.65 2.1v4.2a2.4 2.4 0 0 0-.3-8.23Zm-3.35 6.38-3.65 2.1A2.4 2.4 0 0 0 14.4 18.8l3.35-1.93-3.65-2.14Z" />
      </svg>
    );
  }

  if (name === "iOS") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16.7 12.8c0-2.5 2-3.7 2.1-3.8a4.5 4.5 0 0 0-3.5-1.9c-1.5-.2-2.9.9-3.7.9-.8 0-2-1-3.3-.9a4.9 4.9 0 0 0-4.1 2.5c-1.8 3-.5 7.5 1.2 10 .8 1.2 1.8 2.5 3.1 2.4 1.2-.1 1.7-.8 3.2-.8s1.9.8 3.3.8c1.3 0 2.2-1.2 3-2.4a10.8 10.8 0 0 0 1.4-2.9 4.3 4.3 0 0 1-2.7-3.9ZM14.3 5.5A4.4 4.4 0 0 0 15.4 2a4.6 4.6 0 0 0-3 1.6 4.1 4.1 0 0 0-1.1 3.3 3.8 3.8 0 0 0 3-1.4Z" />
      </svg>
    );
  }

  if (name === "AWS") {
    return (
      <svg viewBox="0 0 32 24" aria-hidden="true">
        <path d="M7.4 14.4c0 .5.1.8.2 1.1.2.3.4.7.8 1.1.1.1.1.2 0 .4l-.8.6c-.1.1-.2.1-.3.1-.1 0-.2 0-.3-.1-.4-.2-.7-.5-.9-.7l-.7-.9a3.6 3.6 0 0 1-2.9 1.3c-.7 0-1.3-.2-1.7-.6-.4-.4-.6-1-.6-1.7 0-.8.3-1.5.8-2 .6-.5 1.4-.7 2.4-.7l1 .1 1 .2v-.9c0-.7-.2-1.2-.5-1.5-.3-.3-.8-.4-1.5-.4l-1 .1-1 .3-.4.1c-.2 0-.3-.1-.3-.4v-.6c0-.2 0-.3.1-.4l.4-.2a7 7 0 0 1 2.6-.5c1.2 0 2.1.3 2.7.8.6.6.9 1.4.9 2.5v3.3Zm-3.8 1c.3 0 .6 0 1-.1.3-.1.6-.3.9-.6.2-.2.3-.4.4-.7.1-.3.1-.6.1-1v-.5a7 7 0 0 0-1.9-.3c-.7 0-1.2.1-1.5.4-.3.3-.5.6-.5 1.1 0 .5.1.9.4 1.2.2.3.6.5 1.1.5Zm7.7 1.3c-.2 0-.4 0-.5-.1l-.3-.5-2.6-8.4-.1-.4c0-.2.1-.3.3-.3h1.1c.2 0 .4 0 .5.1l.2.5 1.9 7.2 1.8-7.2.2-.5.5-.1h.9c.2 0 .4 0 .5.1l.2.5 1.8 7.3 1.9-7.3.2-.5.5-.1h1c.2 0 .3.1.3.3v.2l-.1.2-2.7 8.4-.2.5c-.1.1-.3.1-.5.1h-.9c-.2 0-.4 0-.5-.1l-.2-.5-1.8-7-1.8 7-.2.5c-.1.1-.3.1-.5.1h-.9Zm14.5.3a7 7 0 0 1-2.5-.5l-.4-.3-.1-.4v-.6c0-.3.1-.4.3-.4l.4.1.9.3 1.1.1c.7 0 1.2-.1 1.5-.3.4-.2.5-.5.5-.9 0-.3-.1-.5-.3-.7-.2-.2-.6-.4-1.1-.6l-1.5-.5c-.8-.2-1.3-.6-1.7-1.1-.4-.5-.5-1-.5-1.6 0-.5.1-.9.3-1.2.2-.4.5-.6.8-.9.3-.2.7-.4 1.2-.5a5 5 0 0 1 1.4-.2l.7.1.7.1.6.2.5.2.4.3.1.4v.6c0 .3-.1.4-.3.4l-.5-.1a5 5 0 0 0-1.9-.4c-.6 0-1 .1-1.4.3-.3.2-.5.5-.5.9 0 .3.1.5.4.7.2.2.6.4 1.2.6l1.4.4c.8.3 1.3.6 1.7 1 .3.5.5 1 .5 1.6 0 .5-.1.9-.3 1.3-.2.4-.5.7-.9.9-.4.3-.8.4-1.3.6l-1.3.1Z" />
        <path d="M28.2 20.5C20.7 24 12.3 23.4 5.5 19c-.3-.2 0-.5.3-.4 7.3 3.4 15.5 4 22.9 1.1.5-.2.9.5.5.8h-1Z" />
      </svg>
    );
  }

  if (name === "Azure") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m9.1 2-6.8 19h5.8l1.3-3.9h8.2l2 3.9H22L14.6 2H9.1Zm2 3.5 3.7 8.8H8.4l2.7-8.8Z" />
      </svg>
    );
  }

  if (name === "Pinecone" || name === "Weaviate" || name === "Chroma") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="5" r="3" />
        <circle cx="6" cy="15" r="3" />
        <circle cx="18" cy="15" r="3" />
        <path d="M10.3 7.4 7.7 12.6m6-5.2 2.6 5.2M9 15h6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 1.8 1.7 6.5L20.2 10l-6.5 1.7-1.7 6.5-1.7-6.5L3.8 10l6.5-1.7L12 1.8Zm7 13 .8 3.2 3.2.8-3.2.8-.8 3.2-.8-3.2-3.2-.8 3.2-.8.8-3.2Z" />
    </svg>
  );
}

function BrandLogo({ technology }: { technology: Technology }) {
  const icon = brandIcons[technology.name];

  if (!icon) return <CustomLogo name={technology.name} />;

  return (
    <svg viewBox="0 0 24 24" role="img" aria-label={`${technology.name} logo`}>
      <path d={icon.path} />
    </svg>
  );
}

function TechCard({ technology }: { technology: Technology }) {
  return (
    <li className="tech-card">
      <span
        className="tech-mark"
        style={{ color: technology.color }}
      >
        <BrandLogo technology={technology} />
      </span>
      <span className="min-w-0">
        <span className="block whitespace-nowrap text-sm font-semibold tracking-tight text-foreground">
          {technology.name}
        </span>
        <span className="mt-0.5 block whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.16em] text-muted-2">
          {technology.category}
        </span>
      </span>
    </li>
  );
}

function TechRow({
  items,
  direction,
  decorative = false,
}: {
  items: Technology[];
  direction: "forward" | "reverse";
  decorative?: boolean;
}) {
  return (
    <div
      className="tech-marquee"
      tabIndex={decorative ? -1 : 0}
      aria-hidden={decorative || undefined}
    >
      <div className={`tech-marquee-track tech-marquee-track--${direction}`}>
        <ul className="tech-marquee-list">
          {items.map((technology) => (
            <TechCard key={technology.name} technology={technology} />
          ))}
        </ul>
        <ul className="tech-marquee-list tech-marquee-copy" aria-hidden="true">
          {items.map((technology) => (
            <TechCard key={`${technology.name}-copy`} technology={technology} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<TechnologyCategory>("AI & LLM");
  const activeTechnologies = technologies.filter(
    (technology) => technology.category === activeCategory,
  );

  return (
    <section
      id="tech-stack"
      className="scroll-mt-20 overflow-hidden border-t border-border bg-background"
      aria-labelledby="tech-stack-title"
    >
      <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-24 sm:px-6 md:pt-28">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Technology stack
              </p>
              <h2
                id="tech-stack-title"
                className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
              >
                One stack. Every layer.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              A production toolkit spanning intelligence, interfaces, infrastructure, data, and automation.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mx-auto w-full max-w-[90rem] px-3 pb-24 sm:px-6 md:pb-28">
        <div className="tech-console" aria-label="Technology stack">
          <div className="tech-console-grid" aria-hidden="true" />
          <div className="tech-console-glow tech-console-glow--one" aria-hidden="true" />
          <div className="tech-console-glow tech-console-glow--two" aria-hidden="true" />

          <div className="tech-console-header">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-25 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Production toolkit
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="tech-console-stat">
                <strong>{technologies.length}</strong> technologies
              </span>
              <span className="tech-console-stat hidden sm:inline-flex">
                <strong>9</strong> disciplines
              </span>
            </div>
          </div>

          <div className="relative z-10 px-4 pt-8 sm:px-6 sm:pt-10">
            <div
              className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label="Technology categories"
            >
              {categories.map((category) => {
                const selected = category === activeCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="technology-panel"
                    onClick={() => setActiveCategory(category)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                      selected
                        ? "border-accent bg-accent text-slate-950"
                        : "border-border bg-surface text-muted hover:border-border-strong hover:text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            id="technology-panel"
            role="tabpanel"
            className="relative z-10 px-4 py-8 sm:px-6 sm:py-10"
          >
            <div className="mb-6 grid gap-2 sm:grid-cols-[1fr_minmax(16rem,0.8fr)] sm:items-end">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {activeCategory}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {categoryDescriptions[activeCategory]}
              </p>
            </div>
            <ul className="tech-stack-grid grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {activeTechnologies.map((technology) => (
                <TechCard key={technology.name} technology={technology} />
              ))}
            </ul>
          </div>

          <div className="relative z-10 border-t border-border py-5">
            <TechRow items={technologies} direction="forward" decorative />
          </div>

          <div className="tech-console-footer">
            {["AI systems", "Web & mobile", "Cloud & data", "Automation"].map((label, index) => (
              <span key={label}>
                <i style={{ opacity: 1 - index * 0.16 }} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
