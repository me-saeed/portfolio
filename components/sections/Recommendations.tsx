"use client";

import { useEffect, useState } from "react";
import { recommendations, type Recommendation } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Recommendations() {
  const [activeDoc, setActiveDoc] = useState<Recommendation | null>(null);

  // Close the viewer on Escape and lock body scroll while open.
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
    <section id="recommendations" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:py-28">
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

        <div className="mt-14 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {recommendations.map((rec, i) => (
            <Reveal key={`${rec.company}-${i}`} delay={(i % 3) * 80} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)]">
                {/* PDF preview */}
                <button
                  type="button"
                  onClick={() => setActiveDoc(rec)}
                  aria-label={`Preview ${rec.title} — ${rec.company}`}
                  className="relative block aspect-[3/4] w-full overflow-hidden border-b border-border bg-surface"
                >
                  <object
                    data={`${rec.document}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    type="application/pdf"
                    className="pointer-events-none h-full w-full"
                    aria-hidden="true"
                  >
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-muted">
                      <PdfIcon className="h-10 w-10" />
                      <span className="text-xs font-medium">PDF preview</span>
                    </div>
                  </object>

                  {/* Hover overlay */}
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

                {/* Meta */}
                <div className="flex flex-1 items-center justify-between gap-3 p-5">
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold tracking-tight">{rec.title}</h3>
                    <p className="mt-0.5 truncate text-xs text-muted">{rec.company}</p>
                  </div>
                  <a
                    href={rec.document}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${rec.title} in a new tab`}
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
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

      {/* Full-screen PDF viewer */}
      {activeDoc && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeDoc.title} — ${activeDoc.company}`}
          onClick={() => setActiveDoc(null)}
        >
          <div className="mx-auto flex h-full w-full max-w-5xl flex-col px-4 py-6 sm:px-6">
            <div
              className="flex items-center justify-between gap-4 rounded-t-2xl border border-border bg-background px-5 py-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold tracking-tight">{activeDoc.title}</p>
                <p className="truncate text-xs text-muted">{activeDoc.company}</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={activeDoc.document}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-border-strong hover:text-foreground"
                >
                  Open
                  <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6.5 9.5 14 2M14 2H9.5M14 2v4.5M12 9v3.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 12.5v-7A1.5 1.5 0 0 1 3.5 4H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveDoc(null)}
                  aria-label="Close preview"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
                >
                  <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="m4 4 8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
            <iframe
              src={activeDoc.document}
              title={`${activeDoc.title} — ${activeDoc.company}`}
              className="h-full w-full rounded-b-2xl border border-t-0 border-border bg-white"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}

function PdfIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 2.5h8L19 7v13a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20V4a1.5 1.5 0 0 1 1-1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 2.5V7h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8.5 13h7M8.5 16h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
