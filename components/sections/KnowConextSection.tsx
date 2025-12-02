"use client";

import AboutSection from "@/components/sections/KnowConextSections/AboutSection";
import VoiceSection from "@/components/sections/KnowConextSections/VoiceSection";
import CompanyInfoSection from "@/components/sections/KnowConextSections/CompanyInfoSection";
import ConextfiveValueSection from "@/components/sections/KnowConextSections/ConextfiveValueSection";
import { motion, useTransform, useScroll } from "motion/react";
import { useRef } from "react";

export default function KnowConextSections() {
  const targetref = useRef < HTMLDivElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: targetref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const h2opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1.0], [0, 1, 1, 0]);
  
  return (
    <section ref={targetref} className="relative h-[400dvh] w-[400dvw]">
      <motion.h2 
        className="fixed top-0 left-0 z-50 px-4 py-25 text-4xl md:text-5xl font-bold mb-4 text-black" 
        style={{ opacity: h2opacity }}
      >
        Conextを知る
      </motion.h2>
      <motion.div className="sticky top-[10%] h-dvh flex  items-center overflow-hidden" style={{x}}>
        <ConextfiveValueSection className=""/>
        <AboutSection className=""/>
        <VoiceSection className=""/>
        <CompanyInfoSection className=""/>
      </motion.div>
      
    </section>
  );
}

