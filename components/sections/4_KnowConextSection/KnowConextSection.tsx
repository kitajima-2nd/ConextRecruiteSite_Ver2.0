"use client";

import AboutSection from "@/components/sections/4_KnowConextSection/AboutSection";
import VoiceSection from "@/components/sections/4_KnowConextSection/VoiceSection";
import CompanyInfoSection from "@/components/sections/4_KnowConextSection/CompanyInfoSection";
import ConextfiveValueSection from "@/components/sections/4_KnowConextSection/ConextfiveValueSection";
import { useEffect, useRef, useState } from "react";

/**
 * Values と一緒にスクロールイン → sticky で左上固定 →
 * 親（会社概要まで）が抜けるときにそのままスクロールアウト。
 * 文字色だけ会社概要（暗背景）進入時に切り替える。
 */
export default function KnowConextSections() {
  const companyRef = useRef<HTMLDivElement | null>(null);
  const [overCompany, setOverCompany] = useState(false);

  useEffect(() => {
    const update = () => {
      const companyEl = companyRef.current;
      if (!companyEl) return;

      const companyRect = companyEl.getBoundingClientRect();
      const rootStyle = getComputedStyle(document.documentElement);
      const headerRaw = rootStyle.getPropertyValue("--header-height").trim();
      const rootFontSize = parseFloat(rootStyle.fontSize) || 16;
      const headerPx = headerRaw.endsWith("rem")
        ? parseFloat(headerRaw) * rootFontSize
        : parseFloat(headerRaw) || 72;
      const headingTop = headerPx + 16;

      setOverCompany(companyRect.top <= headingTop + 32);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const eyebrowClass = overCompany ? "text-sky-300" : "text-sky-600";
  const titleClass = overCompany ? "text-white" : "text-neutral-900";

  return (
    <section id="about" className="relative w-full bg-white">
      {/* h-0 でレイアウトを押し上げず、Values と同時に登場して sticky 固定 */}
      <div className="pointer-events-none sticky top-[calc(var(--header-height)+1rem)] z-40 h-0">
        <div className="px-6 md:px-10">
          <p
            className={`mb-2 text-xs font-semibold uppercase tracking-[0.28em] transition-colors duration-300 ${eyebrowClass}`}
          >
            Know Conext
          </p>
          <h2
            className={`font-heading text-3xl transition-colors duration-300 md:text-4xl ${titleClass}`}
          >
            Conextを知る
          </h2>
        </div>
      </div>

      <div className="relative">
        <ConextfiveValueSection />
        <AboutSection />
        <VoiceSection />
        <div ref={companyRef}>
          <CompanyInfoSection />
        </div>
      </div>
    </section>
  );
}
