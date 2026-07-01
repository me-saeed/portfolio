"use client";

import { useEffect, useState } from "react";
import { certificates, type Certificate } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Certificates() {
  const [activeDoc, setActiveDoc] = useState<Certificate | null>(null);

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

  if (certificates.length === 0) return null;

  return (
    <section id="certificates" className="scroll-mt-20 border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:py-28">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Certificates</p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Credentials &amp; certifications.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Verified certificates with PDF preview. Click any card to visit the credential link.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {certificates.map((cert, i) => (
            <Reveal key={`${cert.issuer}-${i}`} delay={(i % 3) * 80} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)]">
                <button
                  type="button"
                  onClick={() => setActiveDoc(cert)}
                  aria-label={`Preview ${cert.title} — ${cert.issuer}`}
                  className="relative block aspect-[16/10] w-full overflow-hidden border-b border-border bg-surface"
                >
                  <object
                    data={`${cert.document}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                    type="application/pdf"
                    className="pointer-events-none h-full w-full object-contain"
                    aria-hidden="true"
                  >
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-muted">
                      <PdfIcon className="h-10 w-10" />
                      <span className="text-xs font-medium">PDF preview</span>
                    </div>
                  </object>

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

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-between gap-3 p-5 transition-colors hover:bg-surface"
                >
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold tracking-tight">{cert.title}</h3>
                    <p className="mt-0.5 truncate text-xs text-muted">{cert.issuer}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors group-hover:border-border-strong group-hover:text-foreground"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                      <path d="M6.5 9.5 14 2M14 2H9.5M14 2v4.5M12 9v3.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 12.5v-7A1.5 1.5 0 0 1 3.5 4H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {activeDoc && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeDoc.title} — ${activeDoc.issuer}`}
          onClick={() => setActiveDoc(null)}
        >
          <div className="mx-auto flex h-full w-full max-w-5xl flex-col px-4 py-6 sm:px-6">
            <div
              className="flex items-center justify-between gap-4 rounded-t-2xl border border-border bg-background px-5 py-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold tracking-tight">{activeDoc.title}</p>
                <p className="truncate text-xs text-muted">{activeDoc.issuer}</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={activeDoc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-border-strong hover:text-foreground"
                >
                  Visit link
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
              title={`${activeDoc.title} — ${activeDoc.issuer}`}
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
