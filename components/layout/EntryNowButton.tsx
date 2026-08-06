"use client";

import { animateScrollToId } from "@/lib/scroll/animateScrollTo";

export default function EntryNowButton() {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    void animateScrollToId("recruit", { durationMs: 900 });
  };

  return (
    <a
      href="#recruit"
      onClick={handleClick}
      className="fixed bottom-10 left-1/2 z-50 inline-flex -translate-x-1/2 items-center rounded-full bg-brand-red px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-md transition hover:bg-brand-red-deep"
    >
      ENTRY NOW!!
    </a>
  );
}
