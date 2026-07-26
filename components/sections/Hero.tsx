import Link from "next/link";
import { introVideo, profile } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative overflow-x-clip">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" aria-hidden="true" />
      <div className="animate-float pointer-events-none absolute -right-28 top-12 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto w-full min-w-0 max-w-6xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 md:pb-28 lg:pt-36">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent sm:text-xs">
                AI agents · Full-stack systems · React Native
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1
                id="hero-heading"
                className="mt-6 max-w-4xl text-balance text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.045em] min-[400px]:text-5xl sm:text-6xl md:text-7xl"
              >
                I build intelligent products{" "}
                <span className="bg-gradient-to-r from-accent via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                  that work in the real world.
                </span>
              </h1>
              <p className="sr-only">{profile.headline}</p>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-14px_rgba(139,156,255,0.8)]"
                >
                  View selected work
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/50 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
              >
                Explore capabilities
              </Link>
              {introVideo.youtubeId && (
                <Link href="#intro" className="px-3 py-3 text-sm font-medium text-muted transition-colors hover:text-foreground">
                  Watch intro
                </Link>
              )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={220}>
            <aside className="relative overflow-hidden rounded-3xl border border-border bg-surface/80 p-6 shadow-[0_30px_80px_-45px_rgba(99,102,241,0.8)] backdrop-blur md:p-7">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">Core systems</p>
              <ul className="mt-5 space-y-3">
                {profile.focus.map((item, i) => (
                  <li key={item} className="flex items-center justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-foreground">{item}</span>
                    <span className="font-mono text-[10px] text-accent">0{i + 1}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>

        <Reveal delay={400}>
          <dl className="mt-16 grid overflow-hidden rounded-2xl border border-border bg-surface/60 sm:grid-cols-3">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="min-w-0 border-b border-border p-6 last:border-0 sm:border-b-0 sm:border-r sm:last:border-r-0 md:p-8">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block max-w-[15rem] text-xs leading-relaxed text-muted sm:text-sm">
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
