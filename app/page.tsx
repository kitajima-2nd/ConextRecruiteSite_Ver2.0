import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ConceptSection from "@/components/sections/ConceptSection";
import AboutSection from "@/components/sections/AboutSection";
import MasterSection from "@/components/sections/MasterSection";
import BreakSection from "@/components/sections/BreakSection";
import ShowtimeSection from "@/components/sections/ShowtimeSection";
import RecruitSection from "@/components/sections/RecruitSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ConceptSection />
      <AboutSection />
      <MasterSection />
      <BreakSection />
      <ShowtimeSection />
      <RecruitSection />
      <Footer />
    </main>
  );
}
