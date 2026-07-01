import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { Gallery } from "@/components/Gallery";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Case study not found" };
  return {
    title: `${project.name} — ${project.category} Case Study`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(index + 1) % projects.length];
  const coverImage = project.gallery[0]?.image;

  return (
    <article>
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})`,
          }}
          aria-hidden="true"
        />
        {coverImage && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${coverImage})` }}
            aria-hidden="true"
          />
        )}
        <div className="relative mx-auto w-full max-w-4xl px-6 pb-16 pt-12 md:pb-20 md:pt-16">
          <Reveal>
            <Link
              href="/#work"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13 8H3M7 4 3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All work
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})`,
                }}
              >
                {project.category}
              </span>
              <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted">
                {project.platform}
              </span>
              <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted">
                {project.year}
              </span>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-2xl text-balance text-lg leading-relaxed text-muted">
              {project.tagline}
            </p>
          </Reveal>

          {project.links && project.links.length > 0 && (
            <Reveal delay={180}>
              <div className="mt-7 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-sm"
                  >
                    <LinkIcon kind={link.kind} />
                    {link.label}
                  </a>
                ))}
              </div>
            </Reveal>
          )}

          <Reveal delay={220}>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-2">Role</dt>
                <dd className="mt-1 text-sm font-medium">{project.role}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-2">Timeline</dt>
                <dd className="mt-1 text-sm font-medium">{project.timeline}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-2">Platform</dt>
                <dd className="mt-1 text-sm font-medium">{project.platform}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </header>

      {/* Big visual band */}
      <Reveal>
        <div
          className="relative flex h-56 items-center justify-center overflow-hidden sm:h-72 md:h-80"
          style={{
            backgroundImage: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})`,
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.4),transparent_55%)]" />
          <span className="text-5xl font-bold tracking-tight text-white/90 sm:text-7xl">
            {project.name}
          </span>
        </div>
      </Reveal>

      {/* Body */}
      <div className="mx-auto w-full max-w-4xl px-6 py-20 md:py-24">
        <Reveal>
          <p className="text-balance text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">
            {project.summary}
          </p>
        </Reveal>

        {/* Results */}
        <Reveal>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {project.results.map((result) => (
              <div key={result.label} className="bg-background p-6 text-center">
                <p className="text-3xl font-semibold tracking-tight sm:text-4xl">{result.value}</p>
                <p className="mt-1 text-sm text-muted">{result.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Gallery slider */}
        <Reveal>
          <div className="mt-20">
            <SectionLabel>Inside the platform</SectionLabel>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              A look at key screens. Use the arrows, dots, or swipe to browse.
            </p>
            <div className="mt-7">
              <Gallery
                slides={project.gallery}
                accentFrom={project.accentFrom}
                accentTo={project.accentTo}
                projectName={project.name}
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-16 space-y-14">
          <Reveal>
            <Section title="The challenge" body={project.challenge} />
          </Reveal>
          <Reveal>
            <Section title="The approach" body={project.approach} />
          </Reveal>

          <Reveal>
            <div>
              <SectionLabel>Highlights</SectionLabel>
              <ul className="mt-5 space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-base leading-relaxed">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-accent"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="m5 10.5 3 3 7-7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-foreground/90">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <Section title="The outcome" body={project.outcome} />
          </Reveal>

          <Reveal>
            <div className="border-t border-border pt-10">
              <SectionLabel>Toolkit</SectionLabel>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Next project */}
      <div className="border-t border-border bg-surface">
        <div className="mx-auto w-full max-w-4xl px-6 py-16">
          <p className="text-sm uppercase tracking-widest text-muted-2">Next project</p>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group mt-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
          >
            <span className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-4xl">
              {nextProject.name}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors group-hover:text-foreground">
              View case study
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function LinkIcon({ kind }: { kind?: "website" | "appStore" | "playStore" }) {
  if (kind === "appStore") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16.36 12.9c-.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.62-1.7-3.18-1.72-1.36-.14-2.65.8-3.34.8-.69 0-1.75-.78-2.88-.76-1.48.02-2.85.86-3.61 2.19-1.54 2.67-.39 6.62 1.1 8.79.73 1.06 1.6 2.25 2.74 2.21 1.1-.04 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.08 2.65-2.15.84-1.23 1.18-2.42 1.2-2.48-.03-.01-2.29-.88-2.31-3.49zM14.2 6.27c.6-.74 1.01-1.76.9-2.78-.87.04-1.93.58-2.56 1.31-.56.65-1.05 1.69-.92 2.69.97.07 1.97-.49 2.58-1.22z" />
      </svg>
    );
  }
  if (kind === "playStore") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3.6 2.3c-.2.2-.32.52-.32.92v17.56c0 .4.12.72.33.91l.06.05L13.5 12v-.02L3.66 2.25l-.06.05zM17.1 15.6 14.4 12.9 4.5 22.05c.36.32.86.34 1.42.02l11.18-6.47zM18.9 11.55l-1.8 1.04L14.4 12 17.1 9.4l1.8 1.04c.92.53.92 1.58 0 2.11zM4.5 1.95 14.4 11.1l2.7-2.7L5.92 1.93c-.56-.32-1.06-.3-1.42.02z" />
      </svg>
    );
  }
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6.5 9.5 14 2M14 2H9.5M14 2v4.5M12 9v3.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 12.5v-7A1.5 1.5 0 0 1 3.5 4H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-medium uppercase tracking-widest text-accent">{children}</h2>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <SectionLabel>{title}</SectionLabel>
      <p className="mt-5 text-base leading-relaxed text-foreground/80 sm:text-lg">{body}</p>
    </div>
  );
}
