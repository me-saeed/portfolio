import { introVideo } from "@/lib/data";

export function IntroVideo() {
  if (!introVideo.youtubeId) return null;

  const embedUrl = `https://www.youtube-nocookie.com/embed/${introVideo.youtubeId}?rel=0`;

  return (
    <section id="intro" className="scroll-mt-20 border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">Intro</p>
        <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {introVideo.title}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          {introVideo.description}
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-background shadow-[0_24px_60px_-30px_rgba(0,0,0,0.2)]">
          <div className="relative aspect-video w-full">
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
      </div>
    </section>
  );
}
