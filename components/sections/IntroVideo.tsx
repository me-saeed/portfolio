import { introVideo } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function IntroVideo() {
  if (!introVideo.youtubeId) return null;

  const embedUrl = `https://www.youtube-nocookie.com/embed/${introVideo.youtubeId}?rel=0`;

  return (
    <section
      id="intro"
      className="relative scroll-mt-20 overflow-hidden border-t border-border bg-surface"
      aria-labelledby="intro-video-title"
    >
      <div
        className="pointer-events-none absolute -right-28 top-16 h-72 w-72 rounded-full bg-accent/[0.055] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-36 bottom-10 h-80 w-80 rounded-full bg-indigo-300/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 py-24 sm:px-6 md:py-28">
        <Reveal>
          <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.58fr)] md:items-end md:gap-12">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium uppercase tracking-widest text-accent">
                  Intro
                </span>
                <span className="h-px w-10 bg-accent/30" aria-hidden="true" />
                <span className="font-mono text-[11px] text-muted-2">01 / 08</span>
              </div>
              <h2
                id="intro-video-title"
                className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
              >
                {introVideo.title}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted md:pb-1 md:text-base">
              {introVideo.description}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-10 sm:mt-12">
            <div
              className="absolute -inset-x-3 bottom-2 top-8 rounded-[2rem] bg-gradient-to-br from-accent/[0.08] via-transparent to-indigo-400/[0.08] blur-xl sm:-inset-x-6"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-[1.35rem] border border-border bg-background shadow-[0_32px_80px_-42px_rgba(15,23,42,0.35)] sm:rounded-[1.75rem]">
              <div className="flex min-h-14 items-center justify-between gap-4 border-b border-border bg-background px-4 sm:px-5">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
                  <p className="truncate text-xs font-medium text-muted sm:text-sm">
                    Introduction <span className="text-muted-2">/</span>{" "}
                    <span className="text-foreground">Muhammad Saeed</span>
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-surface px-2.5 py-1">
                  <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-30 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.13em] text-muted">
                    Ready to play
                  </span>
                </div>
              </div>

              <div className="bg-surface-2 p-1.5 sm:p-2.5">
                <div className="relative aspect-video w-full overflow-hidden rounded-[0.9rem] bg-black sm:rounded-[1.15rem]">
                  <iframe
                    src={embedUrl}
                    title={introVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-border bg-background px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <div className="flex flex-wrap items-center gap-2" aria-label="Introduction topics">
                  {["AI agents", "Full-stack systems", "React Native"].map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-border bg-surface px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-muted"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <p className="flex items-center gap-2 text-[11px] text-muted-2">
                  <svg
                    className="h-3.5 w-3.5 text-accent"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5.75 4.5 11 8l-5.25 3.5v-7Z"
                      fill="currentColor"
                    />
                    <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.25" />
                  </svg>
                  YouTube privacy-enhanced playback
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
