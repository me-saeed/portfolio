import { experience } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:py-28">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Experience</p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            A track record of shipping.
          </h2>
        </Reveal>

        <ol className="mt-14 border-l border-border">
          {experience.map((item, i) => (
            <Reveal key={`${item.company}-${item.period}`} delay={i * 70}>
              <li className="group relative pb-12 pl-8 last:pb-0">
                {/* Timeline dot */}
                <span className="absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-border-strong transition-colors duration-300 group-hover:bg-accent" />

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.role}
                    <span className="font-normal text-muted"> · {item.company}</span>
                  </h3>
                  <span className="font-mono text-sm text-muted-2">{item.period}</span>
                </div>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {item.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
