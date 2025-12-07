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
    <section ref={targetref} className="relative h-[400dvh] w-full">
      <motion.h2 
        className="fixed top-0 left-0 z-50 px-4 py-25 text-4xl md:text-5xl font-bold mb-4 text-black" 
        style={{ opacity: h2opacity }}
      >
        Conextを知る
      </motion.h2>

        <ConextfiveValueSection className="w-dvh h-dvh"/>
        <AboutSection className="w-dvh h-dvh"/>
        <VoiceSection className="w-full h-dvh"/>
        <CompanyInfoSection className="w-full h-dvh"/>
      
    </section>
  );
}

