"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { projects, serviceTypes } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";

const PAGE_SIZE = 6;

export function Work() {
  // Build the tab list: "All" plus any service type that has at least one project,
  // keeping the order defined in `serviceTypes`.
  const tabs = useMemo(() => {
    const present = serviceTypes.filter((type) =>
      projects.some((p) => p.types.includes(type)),
    );
    return ["All", ...present] as const;
  }, []);

  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.types.includes(active as (typeof serviceTypes)[number])),
    [active],
  );

  const [page, setPage] = useState(1);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  // Reset to the first page whenever the filter changes.
  useEffect(() => {
    setPage(1);
  }, [active]);

  // Guard against the current page falling out of range after filtering.
  const currentPage = Math.min(page, pageCount);

  const paginated = useMemo(
    () => filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE),
    [filtered, currentPage],
  );

  const goToPage = (next: number) => {
    const clamped = Math.min(Math.max(1, next), pageCount);
    setPage(clamped);
    if (typeof document !== "undefined") {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="work" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:py-28">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Selected work
              </p>
              <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Platforms, end to end.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Filter by what I do, then open any project for the full case study.
            </p>
          </div>
        </Reveal>

        {/* Filter tabs */}
        <Reveal delay={80}>
          <div
            className="mt-10 flex flex-nowrap gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Filter work by service type"
          >
            {tabs.map((tab) => {
              const isActive = active === tab;
              const count =
                tab === "All"
                  ? projects.length
                  : projects.filter((p) =>
                      p.types.includes(tab as (typeof serviceTypes)[number]),
                    ).length;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab)}
                  className={`flex flex-shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-background text-muted hover:border-border-strong hover:text-foreground"
                  }`}
                >
                  {tab}
                  <span
                    className={`text-xs ${isActive ? "text-background/60" : "text-muted-2"}`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Crawlable index of every case study (pagination only affects the visible grid). */}
        <nav className="sr-only" aria-label="All case studies">
          <ul>
            {projects.map((project) => (
              <li key={project.slug}>
                <Link href={`/work/${project.slug}`}>
                  {project.name} — {project.tagline}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Grid — keyed by active tab + page so cards re-animate on change */}
        <div key={`${active}-${currentPage}`} className="mt-10 grid gap-6 sm:grid-cols-2">
          {paginated.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* Pagination */}
        {pageCount > 1 && (
          <nav
            className="mt-12 flex items-center justify-center gap-2"
            aria-label="Work pagination"
          >
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted transition-all hover:border-border-strong hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-muted"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => {
              const isActive = p === currentPage;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => goToPage(p)}
                  aria-label={`Go to page ${p}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex h-10 min-w-10 items-center justify-center rounded-full border px-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-background text-muted hover:border-border-strong hover:text-foreground"
                  }`}
                >
                  {p}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === pageCount}
              aria-label="Next page"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted transition-all hover:border-border-strong hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-muted"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
