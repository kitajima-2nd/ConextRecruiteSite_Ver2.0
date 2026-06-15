"use client";

import TopBackgroundSlideshow from "./SpiralHelix/TopBackgroundSlideshow";

export default function HeroSection() {
  return (
    <section className="relative h-dvh w-full overflow-hidden">
      <div className="absolute inset-0 z-10 overflow-hidden">
        <TopBackgroundSlideshow
          containerClassName="inset-0 h-full w-full opacity-30"
          rotationSpeed={0.002}
        />
      </div>

      <div className="absolute inset-0 z-20 bg-linear-to-b from-black/60 via-black/20 to-black/10" />

      <div className="relative z-30 flex h-full flex-col justify-between px-6 pb-10 pt-[calc(var(--header-height)+2rem)] md:px-10 lg:px-16">
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">
            Recruit Site
          </p>
          <h1 className="font-heading text-5xl italic leading-[0.95] text-white md:text-7xl lg:text-8xl">
            <span className="block">Be a</span>
            <span className="block text-sky-300">Soccer</span>
            <span className="block">Company</span>
          </h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
            サッカーで「繋がる」「広がる」。
            <br />
            日本一のサッカーカンパニーを、一緒に目指しませんか。
          </p>

          <div className="flex flex-col items-start gap-3 lg:items-end">
            <a
              href="#recruit"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-neutral-950 transition hover:bg-sky-100"
            >
              採用情報を見る
            </a>
            <div className="flex items-center gap-3 text-white/60">
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
        </div>
      </div>
    </section>
  );
}
