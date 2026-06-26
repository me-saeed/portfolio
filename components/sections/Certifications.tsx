import { certifications } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section id="certifications" className="scroll-mt-20 border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:py-28">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Certifications
          </p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Credentials that back the work.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {certifications.map((cert, i) => {
            const content = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-surface-2 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-background">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 2.5 14.5 8l6 .5-4.5 4 1.4 5.9L12 15.4 6.6 18.4 8 12.5 3.5 8.5l6-.5L12 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-mono text-sm text-muted-2">{cert.year}</span>
                </div>

                <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight">
                  {cert.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{cert.issuer}</p>

                <div className="mt-5 flex items-center justify-between gap-3">
                  {cert.credentialId ? (
                    <span className="font-mono text-xs text-muted-2">ID: {cert.credentialId}</span>
                  ) : (
                    <span />
                  )}
                  {cert.url && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-colors group-hover:text-foreground">
                      Verify
                      <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M6.5 9.5 14 2M14 2H9.5M14 2v4.5M12 9v3.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 12.5v-7A1.5 1.5 0 0 1 3.5 4H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </div>
              </>
            );

            const cardClass =
              "group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-surface md:p-10";

            return (
              <Reveal key={cert.title} delay={(i % 2) * 80} className="h-full">
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {content}
                  </a>
                ) : (
                  <article className={cardClass}>{content}</article>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
