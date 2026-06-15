"use client";

import { useRef } from "react";
import TruncatedIcosahedronBackground from "@/components/TruncatedIcosahedron/TruncatedIcosahedronBackground";
import { useTruncatedIcosahedronScroll } from "@/hooks/useTruncatedIcosahedronScroll";
import HeroSection from "./HeroSection";
import Hero2Section from "./Hero2Section";
import Hero3Section from "./Hero3Section";

/**
 * トップセクション（Hero → Hero2 → Hero3）と切頂二十面体背景をまとめるラッパー。
 * 3Dのスクロール連動はこのファイル内の ref 3つで制御する。
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

  return (
    <>
      <TruncatedIcosahedronBackground scrollState={scrollState} />

      <div ref={heroRef} data-scroll-stage="hero">
        <HeroSection />
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
