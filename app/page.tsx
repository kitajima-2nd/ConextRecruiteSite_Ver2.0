"use client";

import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/1_HeroSection1/HeroSection";
import Hero2Section from "@/components/sections/2_HeroSection2/Hero2Section";
import ConceptSection from "@/components/sections/3_ConceptSection/ConceptSection";
import KnowConextSection from "@/components/sections/4_KnowConextSection/KnowConextSection";
import MasterSection from "@/components/sections/5_MasterSection.tsx/MasterSection";
import ShowtimeSection from "@/components/sections/6_ShowtimeSection/ShowtimeSection";
import BreakSection from "@/components/sections/7_BreakSection/BreakSection";
import RecruitSection from "@/components/sections/8_RecruitSection/RecruitSection";
import TruncatedIcosahedronBackground from "@/components/TruncatedIcosahedron/TruncatedIcosahedronBackground";
import { useTruncatedIcosahedronScroll } from "@/hooks/useTruncatedIcosahedronScroll";

export default function Home() {
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
          <HeroSection />
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
