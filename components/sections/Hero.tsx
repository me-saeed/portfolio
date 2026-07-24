import Link from "next/link";
import { introVideo, profile } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative overflow-x-clip">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden="true" />
      <div
        className="animate-float pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full opacity-[0.16] blur-3xl sm:-top-40 sm:h-[480px] sm:w-[480px]"
        style={{ background: "conic-gradient(from 90deg, #6366f1, #22d3ee, #ec4899, #6366f1)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full min-w-0 max-w-6xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 md:pb-28">
        <Reveal as="div" className="flex justify-center">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-center text-xs font-medium leading-snug text-muted backdrop-blur sm:px-4">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-balance">{profile.role}</span>
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1
            id="hero-heading"
            className="mx-auto mt-7 max-w-4xl text-balance text-center text-[1.75rem] font-semibold leading-[1.08] tracking-tight min-[400px]:text-4xl sm:text-6xl md:text-7xl"
          >
            {profile.headline}
          </h1>
          <p className="sr-only">
            {profile.name} — {profile.role}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-center text-base leading-relaxed text-muted sm:text-lg">
            {profile.intro}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <Link
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5 sm:px-6 sm:py-3"
            >
              Explore the work
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-2 sm:px-6 sm:py-3"
            >
              What I do
            </Link>
            {introVideo.youtubeId && (
              <Link
                href="#intro"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-2 sm:px-6 sm:py-3"
              >
                Watch intro
              </Link>
            )}
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {profile.focus.map((item) => (
              <span
                key={item}
                className="max-w-full rounded-full bg-surface-2 px-3 py-1 text-center text-xs font-medium text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={400}>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-3 border-t border-border pt-10 sm:gap-6">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="min-w-0 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl font-semibold tracking-tight min-[400px]:text-3xl sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block break-words text-[0.6875rem] leading-snug text-muted min-[400px]:text-xs sm:text-sm">
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
