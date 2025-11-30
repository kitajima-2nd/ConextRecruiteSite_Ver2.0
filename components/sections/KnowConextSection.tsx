"use client";

import AboutSection from "@/components/sections/KnowConextSections/AboutSection";
import VoiceSection from "@/components/sections/KnowConextSections/VoiceSection";
import CompanyInfoSection from "@/components/sections/KnowConextSections/CompanyInfoSection";

import { motion, useTransform, useScroll } from "motion/react";
import { useRef } from "react";

export default function KnowConextSections() {
  const targetref = useRef < HTMLDivElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: targetref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);
  
  return (
    <section ref={targetref} className="relative h-[300dvh] w-[300dvw]">
      <motion.div className="sticky top-0 h-[100dvh] flex  items-center overflow-hidden" style={{x}}>
        <AboutSection className=""/>
        <VoiceSection className=""/>
        <CompanyInfoSection className=""/>
      </motion.div>
      
    </section>
  );
}

