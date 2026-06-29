"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Slide = { title: string; caption: string; image?: string };

type GalleryProps = {
  slides: Slide[];
  accentFrom: string;
  accentTo: string;
  projectName: string;
};

export function Gallery({ slides, accentFrom, accentTo, projectName }: GalleryProps) {
  const [active, setActive] = useState(0);
  const count = slides.length;
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Drag / swipe tracking
  const dragX = useRef<number | null>(null);

  const go = useCallback(
    (next: number) => {
      setActive((prev) => {
        const total = count;
        return ((next % total) + total) % total;
      });
    },
    [count],
  );

  const prev = useCallback(() => go(active - 1), [active, go]);
  const next = useCallback(() => go(active + 1), [active, go]);

  // Keyboard navigation when the gallery (or a child) is focused.
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    };
    node.addEventListener("keydown", onKey);
    return () => node.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const onPointerDown = (e: React.PointerEvent) => {
    dragX.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (dragX.current === null) return;
    const delta = e.clientX - dragX.current;
    if (delta > 50) prev();
    else if (delta < -50) next();
    dragX.current = null;
  };

  if (count === 0) return null;

  return (
    <div
      ref={containerRef}
      className="group/gallery relative outline-none"
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${projectName} screens`}
    >
      {/* Viewport */}
      <div
        className="relative overflow-hidden rounded-2xl border border-border bg-surface"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 px-4 py-4 sm:px-6 sm:py-6"
              aria-hidden={i !== active}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${slide.title}`}
            >
              <Frame slide={slide} index={i} accentFrom={accentFrom} accentTo={accentTo} />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm backdrop-blur transition-all hover:scale-105 hover:bg-background"
        >
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm backdrop-blur transition-all hover:scale-105 hover:bg-background"
        >
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Counter */}
        <span className="absolute right-4 top-4 z-10 rounded-full bg-black/40 px-3 py-1 font-mono text-xs text-white backdrop-blur">
          {active + 1} / {count}
        </span>
      </div>

      {/* Caption + dots */}
      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-h-[2.5rem]">
          <p className="text-sm font-semibold tracking-tight">{slides[active].title}</p>
          <p className="mt-0.5 text-sm text-muted">{slides[active].caption}</p>
        </div>

        <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
          {slides.map((slide, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-foreground" : "w-2 bg-border-strong hover:bg-muted-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Frame({
  slide,
  index,
  accentFrom,
  accentTo,
}: {
  slide: Slide;
  index: number;
  accentFrom: string;
  accentTo: string;
}) {
  const angle = 120 + index * 35;

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)]">
      {/* Faux window bar */}
      <div className="flex items-center gap-1.5 border-b border-border bg-surface px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>

      {/* Screen */}
      <div
        className="relative flex aspect-[16/9] items-center justify-center"
        style={{ backgroundImage: `linear-gradient(${angle}deg, ${accentFrom}, ${accentTo})` }}
      >
        {slide.image ? (
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
            <div className="absolute inset-0 p-5 sm:p-8">
              <div className="h-3 w-24 rounded-full bg-white/45" />
              <div className="mt-3 h-2 w-16 rounded-full bg-white/30" />
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="h-16 rounded-lg bg-white/25 sm:h-20" />
                <div className="h-16 rounded-lg bg-white/35 sm:h-20" />
                <div className="h-16 rounded-lg bg-white/20 sm:h-20" />
              </div>
              <div className="mt-4 h-20 rounded-lg bg-white/15 sm:h-28" />
            </div>
            <span className="relative z-10 px-4 text-center text-xl font-semibold tracking-tight text-white drop-shadow sm:text-2xl">
              {slide.title}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
