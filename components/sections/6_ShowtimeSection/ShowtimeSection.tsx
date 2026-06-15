"use client";

import SectionShell from "@/components/layout/SectionShell";
import SectionHeading from "@/components/layout/SectionHeading";

export default function ShowtimeSection() {
  return (
    <SectionShell variant="dark">
      <SectionHeading
        tone="light"
        eyebrow="Showtime"
        title="SHOWTIME SHOW"
        description="社員の挑戦と個性が光る、Conext Marktingの特別企画。"
        className="mb-12"
      />

      <div className="mx-auto max-w-4xl">
        <div className="relative mb-8 flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <svg
                className="h-8 w-8 text-white/70"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-sm text-neutral-400">動画プレースホルダー</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="mb-6 text-lg font-bold text-white md:text-xl">
            仲間の挑戦を応援し、最高のショータイムを一緒につくろう。
          </p>
          <a
            href="#special-detail"
            className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-bold text-neutral-950 transition hover:bg-sky-100"
          >
            特設ページで投票する
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
