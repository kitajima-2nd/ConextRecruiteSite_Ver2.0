import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSections/HeroSection";
import ConceptSection from "@/components/sections/ConceptSection";
import KnowConextSection from "@/components/sections/KnowConextSection";
import MasterSection from "@/components/sections/MasterSection";
import BreakSection from "@/components/sections/BreakSection";
import ShowtimeSection from "@/components/sections/ShowtimeSection";
import RecruitSection from "@/components/sections/RecruitSection";
import Hero2Section from "@/components/sections/Hero2Section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection useTopBackgroundSlideshow={true} />
      <Hero2Section />
      <ConceptSection />
      <KnowConextSection />
      <MasterSection />
      <BreakSection />
      <ShowtimeSection />
      <RecruitSection />
      <Footer />
    </main>
  );
}
