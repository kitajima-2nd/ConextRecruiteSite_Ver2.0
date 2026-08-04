"use client";

import { useEffect, useRef } from "react";
import TruncatedIcosahedronBackground from "@/components/TruncatedIcosahedron/TruncatedIcosahedronBackground";
import { useTruncatedIcosahedronScroll } from "@/hooks/useTruncatedIcosahedronScroll";
import {
  HERO_PIN_END_VH,
  HERO_SLOW_END_VH,
  useHeroScrollPhases,
} from "@/hooks/useHeroScrollPhases";
import HeroSection from "./HeroSection";
import Hero2Section, { HERO2_GROW_END } from "./Hero2Section";
import Hero3Section from "./Hero3Section";

/**
 * トップセクション（Hero → Hero2 → Hero3）と切頂二十面体背景をまとめるラッパー。
 *
 * Hero スクロール区間（トラック 300dvh / sticky 走行 200vh）:
 * - 0–100vh: sticky 固定（本体に transform しない）
 * - 100–200vh: 内側コンテンツが視覚 1/5 で上へ
 * - slow 終了で Hero2 hold（全面ブルー）へ自動遷移
 */
export default function TopSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const hero2Ref = useRef<HTMLDivElement>(null);
  const hero3Ref = useRef<HTMLDivElement>(null);
  const jumpLockRef = useRef(false);
  const jumpArmedRef = useRef(true);
  const lastLocalYRef = useRef(0);

  const scrollState = useTruncatedIcosahedronScroll([
    heroRef,
    hero2Ref,
    hero3Ref,
  ]);
  const { exitOffsetY } = useHeroScrollPhases(heroRef);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const update = () => {
      const heroEl = heroRef.current;
      const hero2El = hero2Ref.current;
      if (!heroEl || !hero2El) return;

      const vh = window.innerHeight;
      const slowEnd = (HERO_SLOW_END_VH / 100) * vh;
      const pinEnd = (HERO_PIN_END_VH / 100) * vh;
      const heroRect = heroEl.getBoundingClientRect();
      const localY = Math.min(
        Math.max(-heroRect.top, 0),
        heroRect.height
      );
      const prev = lastLocalYRef.current;
      lastLocalYRef.current = localY;
      const scrollingDown = localY > prev;

      if (localY < pinEnd) {
        jumpArmedRef.current = true;
        jumpLockRef.current = false;
        return;
      }

      if (
        !jumpLockRef.current &&
        jumpArmedRef.current &&
        scrollingDown &&
        localY >= slowEnd
      ) {
        jumpLockRef.current = true;
        jumpArmedRef.current = false;

        const hero2Rect = hero2El.getBoundingClientRect();
        const hero2Top = window.scrollY + hero2Rect.top;
        const pinRange = Math.max(hero2Rect.height - vh, 1);
        const targetY = hero2Top + HERO2_GROW_END * pinRange;

        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

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
