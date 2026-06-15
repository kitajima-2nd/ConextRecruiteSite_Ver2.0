"use client";

import AboutSection from "@/components/sections/4_KnowConextSection/AboutSection";
import VoiceSection from "@/components/sections/4_KnowConextSection/VoiceSection";
import CompanyInfoSection from "@/components/sections/4_KnowConextSection/CompanyInfoSection";
import ConextfiveValueSection from "@/components/sections/4_KnowConextSection/ConextfiveValueSection";
import { motion, useTransform, useScroll } from "motion/react";
import { useRef } from "react";

export default function KnowConextSections() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const headingOpacity = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [0, 1, 1, 0]);

  return (
    <section ref={targetRef} id="about" className="relative w-full bg-white">
      <motion.div
        className="pointer-events-none fixed left-0 top-[var(--header-height)] z-40 px-6 md:px-10"
        style={{ opacity: headingOpacity }}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-600">
          Know Conext
        </p>
        <h2 className="font-heading text-3xl text-neutral-900 md:text-4xl">Conextを知る</h2>
      </motion.div>

      <div className="relative">
        <ConextfiveValueSection />
        <AboutSection />
        <VoiceSection />
        <CompanyInfoSection />
      </div>
    </section>
  );
}
