import { services } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:py-28">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Services</p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            How I help teams ship better products.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80} className="h-full">
              <article className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-surface md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
                  <span className="text-sm font-mono text-muted-2">0{i + 1}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted transition-colors group-hover:border-border-strong"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
