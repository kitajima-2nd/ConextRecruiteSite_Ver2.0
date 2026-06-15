"use client";

export default function Hero2Section() {
  return (
    <section className="relative h-[200dvh] w-full bg-linear-to-b from-black/10 via-black/20 to-black/50">
      <div className="sticky top-0 flex h-dvh w-full items-end">
        <div className="section-inner flex w-full items-end justify-between pb-12">
          <div className="max-w-md">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-300/80">
              Stage 02
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
