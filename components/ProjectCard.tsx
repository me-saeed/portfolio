import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  const coverImage = project.gallery[0]?.image;
  const coverAlt = `${project.name} — ${project.tagline}`;

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)]"
    >
      {/* Cover */}
      <div
        className="relative aspect-[16/10] w-full overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})`,
        }}
      >
        {coverImage && (
          <Image
            src={coverImage}
            alt={coverAlt}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover opacity-20 transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <span className="max-w-full break-words text-center text-3xl font-bold tracking-tight text-white/90 drop-shadow-sm transition-transform duration-500 group-hover:scale-110 min-[400px]:text-4xl sm:text-5xl md:text-6xl">
            {project.name}
          </span>
        </div>
        <span className="absolute left-3 top-3 max-w-[calc(100%-4.5rem)] truncate rounded-full bg-white/85 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur sm:left-4 sm:top-4 sm:max-w-none sm:px-3">
          {project.category}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-black/25 px-2.5 py-1 text-xs font-medium text-white backdrop-blur sm:right-4 sm:top-4 sm:px-3">
          {project.year}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
          <span>{project.platform}</span>
        </div>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.tagline}</p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
          View case study
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
