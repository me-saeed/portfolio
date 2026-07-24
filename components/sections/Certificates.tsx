"use client";

import { useEffect, useState } from "react";
import { certificates, type Certificate } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { PdfThumbnail, PdfViewerModal } from "@/components/PdfPreview";

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
    <section id="certificates" className="scroll-mt-20 overflow-x-clip border-t border-border bg-surface">
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 py-24 sm:px-6 md:py-28">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Certificates</p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Credentials &amp; certifications.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Verified certificates with PDF preview. Click any card to visit the credential link.
          </p>
        </Reveal>

        <div className="mt-14 grid min-w-0 gap-6 sm:grid-cols-2">
          {certificates.map((cert, i) => (
            <Reveal key={`${cert.issuer}-${i}`} delay={(i % 3) * 80} className="h-full min-w-0">
              <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)]">
                <button
                  type="button"
                  onClick={() => setActiveDoc(cert)}
                  aria-label={`Preview ${cert.title} — ${cert.issuer}`}
                  className="relative block aspect-[16/10] w-full min-w-0 overflow-hidden border-b border-border bg-surface"
                >
                  <PdfThumbnail document={cert.document} fit="page" />

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
                  className="flex min-w-0 flex-1 items-center justify-between gap-3 p-5 transition-colors hover:bg-surface"
                >
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold tracking-tight">{cert.title}</h3>
                    <p className="mt-0.5 truncate text-xs text-muted">{cert.issuer}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors group-hover:border-border-strong group-hover:text-foreground"
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
        <PdfViewerModal
          title={activeDoc.title}
          subtitle={activeDoc.issuer}
          document={activeDoc.document}
          linkHref={activeDoc.url}
          linkLabel="Visit link"
          onClose={() => setActiveDoc(null)}
        />
      )}
    </section>
  );
}
