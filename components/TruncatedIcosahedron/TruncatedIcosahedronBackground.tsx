"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import type { TruncatedIcosahedronScrollState } from "@/hooks/useTruncatedIcosahedronScroll";
import { truncatedIcosahedronScrollRef } from "@/hooks/useTruncatedIcosahedronScroll";

const TruncatedIcosahedronCanvas = dynamic(
  () => import("./TruncatedIcosahedronCanvas"),
  { ssr: false }
);

type TruncatedIcosahedronBackgroundProps = {
  scrollState: TruncatedIcosahedronScrollState;
};

/**
 * Hero〜Hero3 を通して常時表示（visible のとき）。
 * exitOffsetY は DOM 直書きで React 再レンダーを避ける。
 */
export default function TruncatedIcosahedronBackground({
  scrollState,
}: TruncatedIcosahedronBackgroundProps) {
  const { visible } = scrollState;
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible) return;
    let raf = 0;
    const tick = () => {
      const el = wrapRef.current;
      if (el) {
        const y = truncatedIcosahedronScrollRef.current.exitOffsetY;
        el.style.transform = y !== 0 ? `translateY(${y}px)` : "";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none fixed inset-0 z-[5] h-dvh w-full"
      aria-hidden
    >
      <TruncatedIcosahedronCanvas />
    </div>
  );
}
