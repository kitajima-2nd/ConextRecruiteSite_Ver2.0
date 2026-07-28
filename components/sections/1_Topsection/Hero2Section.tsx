"use client";

export default function Hero2Section() {
  return (
    <section className="relative h-[200dvh] w-full bg-linear-to-b from-black/10 via-black/20 to-black/50">
      <div className="sticky top-0 flex h-dvh w-full items-end">
        <div className="section-inner flex w-full items-end justify-between pb-12">
          <div className="max-w-md">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-sky-300/80">
              Mission
            </p>
            <h2 className="font-heading mb-3 text-2xl leading-snug text-white md:text-3xl lg:text-4xl">
              サッカーの経験を、仕事の力に。
            </h2>
            <p className="text-sm leading-relaxed text-white/70 md:text-base">
              プレーで培った行動力・チームワーク・挑戦心を、ビジネスの現場で発揮する。
            </p>
          </div>
          <div className="hidden flex-col items-end gap-2 md:flex">
            <span className="text-xs uppercase tracking-[0.24em] text-white/40">
              Keep scrolling
            </span>
            <div className="h-24 w-px bg-gradient-to-b from-sky-300/80 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
