"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopSection from "@/components/sections/1_Topsection/Topsection";
import KnowConextSection from "@/components/sections/4_KnowConextSection/KnowConextSection";
import MasterSection from "@/components/sections/5_MasterSection.tsx/MasterSection";
import ShowtimeSection from "@/components/sections/6_ShowtimeSection/ShowtimeSection";
import BreakSection from "@/components/sections/7_BreakSection/BreakSection";
import RecruitSection from "@/components/sections/8_RecruitSection/RecruitSection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-20">
        <Header />
        <TopSection />
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
