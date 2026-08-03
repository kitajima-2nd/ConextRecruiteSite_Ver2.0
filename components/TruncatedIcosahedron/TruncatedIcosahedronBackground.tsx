"use client";

import dynamic from "next/dynamic";
import type { TruncatedIcosahedronScrollState } from "@/hooks/useTruncatedIcosahedronScroll";

const TruncatedIcosahedronCanvas = dynamic(
  () => import("./TruncatedIcosahedronCanvas"),
  { ssr: false }
);

type TruncatedIcosahedronBackgroundProps = {
  scrollState: TruncatedIcosahedronScrollState;
};

export default function TruncatedIcosahedronBackground({
  scrollState,
}: TruncatedIcosahedronBackgroundProps) {
  const { visible, exitOffsetY } = scrollState;

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5] h-dvh w-full"
      style={{
        transform: exitOffsetY !== 0 ? `translateY(${exitOffsetY}px)` : undefined,
        willChange: exitOffsetY !== 0 ? "transform" : undefined,
      }}
      aria-hidden
    >
      <TruncatedIcosahedronCanvas scrollState={scrollState} />
    </div>
  );
}
