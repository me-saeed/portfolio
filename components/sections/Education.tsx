import { education } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Education() {
  if (education.length === 0) return null;

  return (
    <section id="education" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:py-28">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Education</p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Academic foundation.
          </h2>
        </Reveal>

        <ol className="mt-14 border-l border-border">
          {education.map((item, i) => (
            <Reveal key={`${item.school}-${item.duration}`} delay={i * 70}>
              <li className="group relative pb-12 pl-8 last:pb-0">
                <span className="absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-border-strong transition-colors duration-300 group-hover:bg-accent" />

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.degree}
                    <span className="font-normal text-muted"> · {item.school}</span>
                  </h3>
                  <span className="font-mono text-sm text-muted-2">{item.duration}</span>
                </div>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{item.field}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
