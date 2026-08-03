"use client";

import { useRef } from "react";
import TruncatedIcosahedronBackground from "@/components/TruncatedIcosahedron/TruncatedIcosahedronBackground";
import { useTruncatedIcosahedronScroll } from "@/hooks/useTruncatedIcosahedronScroll";
import { useHeroScrollPhases } from "@/hooks/useHeroScrollPhases";
import HeroSection from "./HeroSection";
import Hero2Section from "./Hero2Section";
import Hero3Section from "./Hero3Section";

/**
 * トップセクション（Hero → Hero2 → Hero3）と切頂二十面体背景をまとめるラッパー。
 *
 * Hero スクロール区間（トラック 300dvh）:
 * - 0–100vh: sticky 固定（本体に transform しない）
 * - 100–200vh: 内側コンテンツが視覚 1/5 で上へ
 * - 200–300vh: 通常相当で追い切り → Hero2 へ
 */
export default function TopSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const hero2Ref = useRef<HTMLDivElement>(null);
  const hero3Ref = useRef<HTMLDivElement>(null);

  const scrollState = useTruncatedIcosahedronScroll([
    heroRef,
    hero2Ref,
    hero3Ref,
  ]);
  const { exitOffsetY } = useHeroScrollPhases(heroRef);

  return (
    <>
      <TruncatedIcosahedronBackground scrollState={scrollState} />

      <div
        ref={heroRef}
        data-scroll-stage="hero"
        className="relative h-[300dvh] w-full"
      >
        {/* sticky には transform を付けない（sticky 破綻防止） */}
        <div className="sticky top-0 h-dvh w-full overflow-hidden">
          <div
            className="h-full w-full will-change-transform"
            style={{
              transform:
                exitOffsetY !== 0
                  ? `translate3d(0, ${exitOffsetY}px, 0)`
                  : undefined,
            }}
          >
            <HeroSection />
          </div>
        </div>
      </div>

      <div ref={hero2Ref} data-scroll-stage="hero2">
        <Hero2Section />
      </div>
      <div ref={hero3Ref} data-scroll-stage="hero3">
        <Hero3Section />
      </div>
    </>
  );
}
