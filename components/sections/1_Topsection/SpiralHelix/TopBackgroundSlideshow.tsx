"use client";

import { useEffect, useState, type RefObject } from "react";
import dynamic from "next/dynamic";

const SpiralStairCanvas = dynamic(() => import("./SpiralStairCanvas"), {
  ssr: false,
});

type TopBackgroundSlideshowProps = {
  containerClassName?: string;
  /** 1フレームあたりの Y 回転量（小さいほどゆっくり） */
  rotationSpeed?: number;
  /** false のとき Canvas を破棄して GPU を解放 */
  active?: boolean;
};

/**
 * Topページ背景：Three.js 螺旋階段風スライドショー
 * 参考: https://www.inouekabu.com/ （top-fv-canvas の helix 配置）
 */
export default function TopBackgroundSlideshow({
  containerClassName = "absolute inset-0 w-full h-full",
  rotationSpeed = 0.002,
  active = true,
}: TopBackgroundSlideshowProps) {
  if (!active) {
    return <div className={containerClassName} aria-hidden />;
  }

  return (
    <SpiralStairCanvas
      containerClassName={containerClassName}
      rotationSpeed={rotationSpeed}
    />
  );
}

/** Hero sticky が見えている間だけ螺旋を維持するフック */
export function useHeroSpiralActive(rootRef: RefObject<HTMLElement | null>) {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      { threshold: 0.01, rootMargin: "0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootRef]);

  return active;
}
