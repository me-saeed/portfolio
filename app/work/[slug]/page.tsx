import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile, projects } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { Gallery } from "@/components/Gallery";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, projectJsonLd } from "@/lib/seo";

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
  if (!project) return { title: "Case study not found", robots: { index: false } };

  const title = `${project.name} — ${project.category} Case Study`;
  const description = project.summary;
  const coverImage = project.gallery.find((slide) => slide.image)?.image;
  const path = `/work/${project.slug}`;

  return {
    title,
    description,
    keywords: [project.name, project.category, ...project.types, ...project.stack.slice(0, 8)],
    authors: [{ name: profile.name }],
    openGraph: {
      type: "article",
      url: path,
      title: project.name,
      description,
      images: coverImage
        ? [{ url: coverImage, alt: `${project.name} — ${project.tagline}` }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description,
      images: coverImage ? [coverImage] : undefined,
    },
    alternates: {
      canonical: path,
    },
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
      <JsonLd data={[projectJsonLd(project), breadcrumbJsonLd(project)]} />

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})`,
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,transparent_0,rgba(8,10,15,0.25)_32%,#080a0f_75%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-10 sm:px-6 md:pb-20 md:pt-14">
          <nav aria-label="Breadcrumb" className="mb-2">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/#work" className="transition-colors hover:text-foreground">
                  Work
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground">{project.name}</li>
            </ol>
          </nav>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <Reveal>
                <Link href="/#work" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground">
                  <span aria-hidden="true">←</span> Back to projects
                </Link>
              </Reveal>
              <Reveal delay={70}>
                <div className="mt-8 flex flex-wrap items-center gap-2">
                  <span className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundImage: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})` }}>
                    {project.category}
                  </span>
                  <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted">{project.year}</span>
                </div>
                <h1 className="mt-6 text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl">
                  {project.name}
                </h1>
                <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted">{project.tagline}</p>
              </Reveal>
              {project.links && project.links.length > 0 && (
                <Reveal delay={130}>
                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:border-accent/40">
                        <LinkIcon kind={link.kind} />{link.label}
                      </a>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
            <Reveal delay={110}>
              <div className="relative">
                <div className="absolute -inset-8 rounded-full opacity-25 blur-3xl" style={{ backgroundImage: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})` }} />
                <div className="relative rotate-[1.5deg] overflow-hidden rounded-2xl border border-white/15 bg-surface shadow-[0_45px_110px_-35px_rgba(0,0,0,0.9)] transition-transform duration-700 hover:rotate-0">
                  <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <span className="mx-auto h-5 w-2/5 rounded-md border border-white/10 bg-black/20" />
                    <span className="w-8" />
                  </div>
                  <div className="relative aspect-[16/10]" style={{ backgroundImage: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})` }}>
                    {coverImage && <Image src={coverImage} alt={`${project.name} product interface`} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <dl className="mt-16 grid overflow-hidden rounded-2xl border border-border bg-black/15 sm:grid-cols-3">
              {[
                ["Role", project.role],
                ["Timeline", project.timeline],
                ["Platform", project.platform],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-border p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-2">{label}</dt>
                  <dd className="mt-2 text-sm font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <div className="grid gap-6 border-b border-border pb-16 md:grid-cols-[0.35fr_1fr]">
            <SectionLabel>Project overview</SectionLabel>
            <p className="text-balance text-2xl font-medium leading-relaxed tracking-tight sm:text-3xl">{project.summary}</p>
          </div>
        </Reveal>

        {/* Results */}
        <Reveal>
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.results.map((result, resultIndex) => (
              <div key={result.label} className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-7">
                <span className="absolute right-4 top-3 font-mono text-[10px] text-muted-2">0{resultIndex + 1}</span>
                <div className="mb-7 h-1 w-10 rounded-full" style={{ backgroundImage: `linear-gradient(90deg, ${project.accentFrom}, ${project.accentTo})` }} />
                <p className="text-3xl font-semibold tracking-tight sm:text-4xl">{result.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{result.label}</p>
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

        <div className="mt-24 space-y-20">
          <div className="grid gap-12 md:grid-cols-2">
            <Reveal><StorySection number="01" title="The challenge" body={project.challenge} /></Reveal>
            <Reveal delay={80}><StorySection number="02" title="The approach" body={project.approach} /></Reveal>
          </div>

          <Reveal>
            <div className="rounded-[1.75rem] border border-border bg-surface p-6 sm:p-10">
              <SectionLabel>Product capabilities</SectionLabel>
              <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
                {project.highlights.map((h, highlightIndex) => (
                  <li key={h} className="flex min-h-32 flex-col justify-between bg-background p-6 text-base leading-relaxed">
                    <span className="font-mono text-[10px] text-muted-2">0{highlightIndex + 1}</span>
                    <span className="mt-5 text-foreground/90">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <StorySection number="03" title="The outcome" body={project.outcome} wide />
          </Reveal>

          <Reveal>
            <div className="border-t border-border pt-12">
              <div className="flex items-end justify-between gap-4"><SectionLabel>Technical toolkit</SectionLabel><span className="font-mono text-[10px] uppercase tracking-widest text-muted-2">{project.stack.length} technologies</span></div>
              <ul className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-surface p-3 text-sm font-medium text-muted transition hover:border-accent/30 hover:text-foreground"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft font-mono text-[10px] font-semibold text-accent">{tech.slice(0, 2).toUpperCase()}</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Next project */}
      <div className="relative overflow-hidden border-t border-border bg-surface">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(135deg, ${nextProject.accentFrom}, ${nextProject.accentTo})` }} />
        {nextProject.gallery[0]?.image && (
          <Image src={nextProject.gallery[0].image} alt="" fill sizes="100vw" className="object-cover opacity-[0.08]" />
        )}
        <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-24">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-2">Continue exploring · Next project</p>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group mt-7 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          >
            <span>
              <span className="block text-4xl font-semibold tracking-[-0.04em] transition-colors group-hover:text-accent sm:text-6xl">{nextProject.name}</span>
              <span className="mt-3 block max-w-xl text-sm leading-relaxed text-muted">{nextProject.tagline}</span>
            </span>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-background/70 px-5 py-3 text-sm font-medium transition group-hover:border-accent/40 group-hover:bg-accent group-hover:text-[#080a0f]">
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

function StorySection({
  number,
  title,
  body,
  wide = false,
}: {
  number: string;
  title: string;
  body: string;
  wide?: boolean;
}) {
  return (
    <div className={`relative border-t border-border pt-7 ${wide ? "md:grid md:grid-cols-[0.35fr_1fr] md:gap-12" : ""}`}>
      <div>
        <span className="font-mono text-[10px] text-muted-2">{number}</span>
        <SectionLabel>{title}</SectionLabel>
      </div>
      <p className={`${wide ? "mt-6 md:mt-0 md:text-xl" : "mt-6"} text-base leading-relaxed text-foreground/80 sm:text-lg`}>{body}</p>
    </div>
  );
}
