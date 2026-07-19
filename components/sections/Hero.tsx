import Link from "next/link";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden="true" />
      <div
        className="animate-float pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full opacity-[0.16] blur-3xl"
        style={{ background: "conic-gradient(from 90deg, #6366f1, #22d3ee, #ec4899, #6366f1)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-20 sm:pt-28 md:pb-28">
        <Reveal as="div" className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.role}
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1
            id="hero-heading"
            className="mx-auto mt-7 max-w-4xl text-balance text-center text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl"
          >
            {profile.headline}
          </h1>
          <p className="sr-only">
            {profile.name} — {profile.role}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-center text-lg leading-relaxed text-muted">
            {profile.intro}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explore the work
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
            >
              What I do
            </Link>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {profile.focus.map((item) => (
              <span
                key={item}
                className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={400}>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-10">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-3xl font-semibold tracking-tight sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-muted sm:text-sm">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
