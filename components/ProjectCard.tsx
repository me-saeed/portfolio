import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  const coverImage = project.gallery[0]?.image;
  const coverAlt = `${project.name} — ${project.tagline}`;
  const containPreview = [
    "founderflow-executive-ai-brain",
    "agentic-rag-document-intelligence",
    "lyric-multilingual-foundation-model",
    "xpera-health-recommendation",
  ].includes(project.slug);

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative flex min-w-0 flex-col overflow-hidden rounded-[1.4rem] border border-border bg-surface transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_30px_80px_-38px_rgba(99,102,241,0.5)]"
    >
      {/* Cover */}
      <div
        className={`relative w-full overflow-hidden border-b border-white/5 ${containPreview ? "aspect-[1.9/1] bg-[#070a10]" : "aspect-[16/10]"}`}
        style={containPreview ? undefined : {
          backgroundImage: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})`,
        }}
      >
        {coverImage && <Image
          src={coverImage}
          alt={coverAlt}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover opacity-95 transition-all duration-700 group-hover:scale-[1.015] group-hover:opacity-100"
        />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/15" />
        <p className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white/70">
          {project.platform}
        </p>
        <span className="absolute left-3 top-3 max-w-[calc(100%-4.5rem)] truncate rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur sm:left-4 sm:top-4 sm:max-w-none sm:px-3">
          {project.category}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-black/25 px-2.5 py-1 text-xs font-medium text-white backdrop-blur sm:right-4 sm:top-4 sm:px-3">
          {project.year}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent group-hover:text-[#080a0f]">
            <svg className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.tagline}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${project.name} technologies`}>
          {project.stack.slice(0, 4).map((tech) => (
            <li key={tech} className="rounded-md border border-border bg-background/60 px-2 py-1 font-mono text-[10px] text-muted-2">
              {tech}
            </li>
          ))}
          {project.stack.length > 4 && (
            <li className="px-1 py-1 font-mono text-[10px] text-muted-2">+{project.stack.length - 4}</li>
          )}
        </ul>
      </div>
    </Link>
  );
}
