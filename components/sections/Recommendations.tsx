"use client";

import { useEffect, useState } from "react";
import { recommendations, type Recommendation } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { PdfThumbnail, PdfViewerModal } from "@/components/PdfPreview";

export function Recommendations() {
  const [activeDoc, setActiveDoc] = useState<Recommendation | null>(null);

  useEffect(() => {
    if (!activeDoc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveDoc(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeDoc]);

  if (recommendations.length === 0) return null;

  return (
    <section id="recommendations" className="scroll-mt-20 overflow-x-clip border-t border-border">
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 py-24 sm:px-6 md:py-28">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Recommendations
          </p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Recommendation letters.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Reference documents from teams I&apos;ve worked with. Click any letter to preview it.
          </p>
        </Reveal>

        <div className="mt-14 grid min-w-0 gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {recommendations.map((rec, i) => (
            <Reveal key={`${rec.company}-${i}`} delay={(i % 3) * 80} className="h-full min-w-0">
              <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)]">
                <button
                  type="button"
                  onClick={() => setActiveDoc(rec)}
                  aria-label={`Preview ${rec.title} — ${rec.company}`}
                  className="relative block aspect-[3/4] w-full min-w-0 overflow-hidden border-b border-border bg-surface"
                >
                  <PdfThumbnail document={rec.document} fit="width" />

                  <span className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/5">
                    <span className="flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5Z" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                      Preview
                    </span>
                  </span>
                </button>

                <div className="flex min-w-0 flex-1 items-center justify-between gap-3 p-5">
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold tracking-tight">{rec.title}</h3>
                    <p className="mt-0.5 truncate text-xs text-muted">{rec.company}</p>
                  </div>
                  <a
                    href={rec.document}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${rec.title} in a new tab`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M6.5 9.5 14 2M14 2H9.5M14 2v4.5M12 9v3.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 12.5v-7A1.5 1.5 0 0 1 3.5 4H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {activeDoc && (
        <PdfViewerModal
          title={activeDoc.title}
          subtitle={activeDoc.company}
          document={activeDoc.document}
          linkHref={activeDoc.document}
          linkLabel="Open"
          onClose={() => setActiveDoc(null)}
        />
      )}
    </section>
  );
}
