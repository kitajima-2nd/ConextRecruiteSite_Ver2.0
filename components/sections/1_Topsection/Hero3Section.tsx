"use client";

import { motion } from "motion/react";
import AnimatedSection from "@/components/AnimatedSection";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

function Hero3Content() {
  const { isVisible } = useSectionAnimation();

  return (
    <div className="absolute inset-0 z-20 h-dvh w-full bg-linear-to-r from-black/80 via-black/45 to-transparent">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="flex h-full items-end px-6 pb-12 pt-[calc(var(--header-height)+1rem)] md:px-10 lg:px-16"
      >
        <div className="w-full max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
            Concept
          </p>
          <h2 className="font-heading mb-6 text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
            サッカー人のポテンシャルを
            <br />
            最大限に解き放つ
          </h2>

          <div className="glass-panel space-y-5 rounded-2xl p-6 md:p-8">
            <p className="text-sm leading-relaxed text-neutral-200 md:text-base">
              サッカーを通じて培われた経験やスキルを、ビジネスの現場でも存分に活かし、
              一人ひとりがその可能性を広げていける社会を目指しています。
            </p>
            <ul className="space-y-3 text-sm leading-relaxed text-neutral-300 md:text-base">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                <span>サッカー人材の“その先”を見据えたセカンドキャリアの創出</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                <span>営業力や実務能力を磨き、企業を支える人材への成長を支援</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                <span>
                  サッカーを通じて築いた
                  <strong className="font-bold text-white"> 人脈 </strong>
                  や
                  <strong className="font-bold text-white"> ネットワーク </strong>
                  を、事業や仕事に活用
                </span>
              </li>
            </ul>
            <p className="border-t border-white/10 pt-4 text-sm font-medium text-white/80">
              代表取締役 小田原 敬介
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero3Section() {
  return (
    <AnimatedSection className="relative h-dvh w-full overflow-hidden bg-transparent py-0">
      <Hero3Content />
    </AnimatedSection>
  );
}
