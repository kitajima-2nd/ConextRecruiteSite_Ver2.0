"use client";

import AboutSection from "@/components/sections/4_KnowConextSection/AboutSection";
import VoiceSection from "@/components/sections/4_KnowConextSection/VoiceSection";
import CompanyInfoSection from "@/components/sections/4_KnowConextSection/CompanyInfoSection";
import ConextfiveValueSection from "@/components/sections/4_KnowConextSection/ConextfiveValueSection";

/**
 * Values と一緒にスクロールイン → sticky で左上固定 →
 * 親（会社概要まで）が抜けるときにそのままスクロールアウト。
 */
export default function KnowConextSections() {
  return (
    <section id="about" className="relative w-full bg-white">
      {/* h-0 でレイアウトを押し上げず、Values と同時に登場して sticky 固定 */}
      <div className="pointer-events-none sticky top-[calc(var(--header-height)+1rem)] z-40 h-0">
        <div className="px-6 md:px-10">
          <p className="mb-2 text-xs font-medium tracking-[0.2em] text-brand-blue-mid">
            ( Know Conext )
          </p>
          <h2 className="font-heading text-3xl leading-[1.05] tracking-tight text-brand-blue md:text-4xl lg:text-5xl">
            Conextを知る
          </h2>
        </div>
      </div>

      <div className="relative">
        <ConextfiveValueSection />
        <AboutSection />
        <VoiceSection />
        <CompanyInfoSection />
      </div>
    </section>
  );
}
