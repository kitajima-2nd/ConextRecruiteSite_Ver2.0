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
  if (!scrollState.visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5] h-dvh w-full"
      aria-hidden
    >
      <TruncatedIcosahedronCanvas scrollState={scrollState} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
    </div>
  );
}