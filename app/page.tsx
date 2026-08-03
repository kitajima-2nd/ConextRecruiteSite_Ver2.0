"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteMarquee from "@/components/layout/SiteMarquee";
import TopSection from "@/components/sections/1_Topsection/Topsection";
import KnowConextSection from "@/components/sections/4_KnowConextSection/KnowConextSection";
import NewsSection from "@/components/sections/5_NewsSection/NewsSection";
import RecruitSection from "@/components/sections/8_RecruitSection/RecruitSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <div className="relative z-20">
        <Header />
        <TopSection />
        <SiteMarquee />
        <KnowConextSection />
        <NewsSection />
        <RecruitSection />
        <Footer />
      </div>
    </main>
  );
}
