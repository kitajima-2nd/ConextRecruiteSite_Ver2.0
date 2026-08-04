"use client";

import TopBackgroundSlideshow from "./SpiralHelix/TopBackgroundSlideshow";

export default function HeroSection() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-transparent">
      <div className="absolute inset-0 z-10 overflow-hidden">
        <TopBackgroundSlideshow
          containerClassName="inset-0 h-full w-full opacity-80"
          rotationSpeed={0.002}
        />
      </div>

      <div className="relative z-30 flex h-full flex-col justify-between px-6 pb-32 pt-[calc(var(--header-height)+2rem)] md:px-10 lg:px-16">
        <div className="max-w-5xl">
          <p className="mb-5 text-xs font-medium tracking-[0.2em] text-brand-blue-mid">
            ( Recruit Site )
          </p>
          <h1 className="font-heading text-5xl leading-[0.92] tracking-tight text-brand-blue md:text-7xl lg:text-8xl">
            <span className="block">Be a</span>
            <span className="block text-brand-red">Soccer</span>
            <span className="block">Company</span>
          </h1>
        </div>

        <div className="max-w-xl">
          <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
            サッカーで「繋がる」「広がる」。
            <br />
            日本一のサッカーカンパニーを、一緒に目指しませんか。
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-10 z-30 flex flex-col items-center gap-3">
        <a
          href="#recruit"
          className="pointer-events-auto inline-flex items-center rounded-full bg-brand-red px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-brand-red-deep"
        >
          ENTRY NOW!!
        </a>
        <div className="flex items-center gap-3 text-neutral-400">
          <span className="text-xs uppercase tracking-[0.24em]">Scroll</span>
          <svg
            className="h-5 w-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
