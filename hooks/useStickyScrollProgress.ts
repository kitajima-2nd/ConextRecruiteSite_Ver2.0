"use client";

import { RefObject, useEffect, useState } from "react";

/**
 * sticky ピン区間（trackHeight - viewportHeight）におけるスクロール進捗 0→1。
 * prefers-reduced-motion 時は常に 1（最終状態）。
 */
export function useStickyScrollProgress(
  trackRef: RefObject<HTMLElement | null>
): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setProgress(1);
      return;
    }

    const update = () => {
      const el = trackRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollY = window.scrollY;
      const top = scrollY + rect.top;
      const height = rect.height;
      const vh = window.innerHeight;
      const range = Math.max(height - vh, 1);
      const p = Math.min(1, Math.max(0, (scrollY - top) / range));
      setProgress(p);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [trackRef]);

  return progress;
}
