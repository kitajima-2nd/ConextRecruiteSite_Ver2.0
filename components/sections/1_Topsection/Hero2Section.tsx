"use client";

export default function Hero2Section() {
  return (
    <section className="relative h-[200dvh] w-full bg-transparent">
      <div className="sticky top-0 flex h-dvh w-full items-end bg-brand-blue text-white">
        <div className="section-inner flex w-full items-end justify-between pb-14">
          <div className="max-w-lg">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-white">
              ( Mission )
            </p>
            <h2 className="font-heading mb-4 text-3xl leading-[1.05] tracking-tight text-white md:text-4xl lg:text-5xl">
              サッカーの経験を、
              <br />
              仕事の力に。
            </h2>
            <p className="text-sm leading-relaxed text-white/75 md:text-base">
              プレーで培った行動力・チームワーク・挑戦心を、ビジネスの現場で発揮する。
            </p>
          </div>
          <div className="hidden flex-col items-end gap-2 md:flex">
            <span className="text-xs uppercase tracking-[0.24em] text-white/50">
              Keep scrolling
            </span>
            <div className="h-24 w-px bg-linear-to-b from-white/80 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
