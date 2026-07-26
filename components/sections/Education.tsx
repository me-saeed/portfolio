import Image from "next/image";
import { education } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Education() {
  if (education.length === 0) return null;

  return (
    <section id="education" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 py-24 sm:px-6 md:py-28">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Education</p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Academic foundation.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-5 md:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={`${item.school}-${item.duration}`} delay={i * 70}>
              <li className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-2 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_70px_-36px_rgba(45,212,191,0.35)]">
                <div
                  className={`relative flex min-h-36 items-center justify-center overflow-hidden rounded-xl border px-8 py-7 ${
                    item.logoOnDark
                      ? "border-white/10 bg-[#263f45]"
                      : "border-black/8 bg-[#f7f7f4]"
                  }`}
                >
                  <div
                    className={`absolute inset-0 opacity-40 [background-size:18px_18px] ${
                      item.logoOnDark
                        ? "[background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)]"
                        : "[background-image:radial-gradient(circle_at_1px_1px,rgba(10,15,24,0.13)_1px,transparent_0)]"
                    }`}
                  />
                  <Image
                    src={item.logo}
                    alt={item.logoAlt}
                    width={342}
                    height={100}
                    className={`relative z-10 object-contain ${
                      item.location ? "h-16 w-full max-w-[280px]" : "h-24 w-24"
                    }`}
                  />
                  {item.location && (
                    <span className="absolute right-3 top-3 z-20 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#111318] shadow-sm backdrop-blur">
                      <span
                        className="grid h-3.5 w-5 overflow-hidden rounded-[2px] shadow-sm"
                        role="img"
                        aria-label="German flag"
                      >
                        <span className="bg-[#111]" />
                        <span className="bg-[#dd0000]" />
                        <span className="bg-[#ffce00]" />
                      </span>
                      {item.location}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                      {item.degree}
                    </span>
                    <span className="shrink-0 font-mono text-[11px] text-muted-2">{item.duration}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">{item.school}</h3>
                  <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-sm text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
                    {item.field}
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
