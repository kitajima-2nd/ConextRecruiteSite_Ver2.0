"use client";

import dynamic from "next/dynamic";

const SpiralStairCanvas = dynamic(() => import("./SpiralStairCanvas"), {
  ssr: false,
});

type TopBackgroundSlideshowProps = {
  containerClassName?: string;
  /** 1フレームあたりの Y 回転量（小さいほどゆっくり） */
  rotationSpeed?: number;
};

/**
 * Topページ背景：Three.js 螺旋階段風スライドショー
 * 参考: https://www.inouekabu.com/ （top-fv-canvas の helix 配置）
 */
export default function TopBackgroundSlideshow({
  containerClassName = "absolute inset-0 w-full h-full",
  rotationSpeed = 0.002,
}: TopBackgroundSlideshowProps) {
  return (
    <SpiralStairCanvas
      containerClassName={containerClassName}
      rotationSpeed={rotationSpeed}
    />
  );
}
