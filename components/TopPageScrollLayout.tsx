"use client";

import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSections/HeroSection";
import Hero2Section from "@/components/sections/Hero2Section";
import ConceptSection from "@/components/sections/ConceptSection";
import KnowConextSection from "@/components/sections/KnowConextSection";
import MasterSection from "@/components/sections/MasterSection";
import BreakSection from "@/components/sections/BreakSection";
import ShowtimeSection from "@/components/sections/ShowtimeSection";
import RecruitSection from "@/components/sections/RecruitSection";
import TruncatedIcosahedronBackground from "@/components/TruncatedIcosahedron/TruncatedIcosahedronBackground";
import { useTruncatedIcosahedronScroll } from "@/hooks/useTruncatedIcosahedronScroll";

export default function TopPageScrollLayout() {
  const heroRef = useRef<HTMLDivElement>(null);
  const hero2Ref = useRef<HTMLDivElement>(null);
  const conceptRef = useRef<HTMLDivElement>(null);

  const scrollState = useTruncatedIcosahedronScroll([
    heroRef,
    hero2Ref,
    conceptRef,
  ]);

  return (
    <main className="relative min-h-screen">
      <TruncatedIcosahedronBackground scrollState={scrollState} />

      <div className="relative z-20">
        <Header />
        <div ref={heroRef} data-scroll-stage="hero">
          <HeroSection useTopBackgroundSlideshow />
        </div>
        <div ref={hero2Ref} data-scroll-stage="hero2">
          <Hero2Section />
        </div>
        <div ref={conceptRef} data-scroll-stage="concept">
          <ConceptSection />
        </div>
        <KnowConextSection />
        <MasterSection />
        <BreakSection />
        <ShowtimeSection />
        <RecruitSection />
        <Footer />
      </div>
    </main>
  );
}
