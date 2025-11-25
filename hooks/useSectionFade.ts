"use client";

import { useRef, useState, useEffect } from "react";

/**
 * セクションのフェードイン・フェードアウト用フック
 * セクションが50%以上見えたらフェードイン、50%以下になったらフェードアウト
 */
export function useSectionFade() {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // 50%以上見えているかどうか
        const isVisibleNow = entry.intersectionRatio >= 0.5;
        setIsVisible(isVisibleNow);
      },
      {
        threshold: [0, 0.5, 1], // 0%, 50%, 100%のタイミングで検知
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, isVisible };
}

