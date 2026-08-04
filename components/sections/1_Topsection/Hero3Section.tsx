"use client";

import { motion } from "motion/react";
import { useSectionFade } from "@/hooks/useSectionFade";
import {
  SectionAnimationProvider,
  useSectionAnimation,
} from "@/hooks/useSectionAnimation";

function Hero3Content() {
  const { isVisible } = useSectionAnimation();

  return (
    <div className="sticky top-0 z-20 h-dvh w-full bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="flex h-full items-center px-6 pt-[calc(var(--header-height)+1rem)] md:px-10 lg:px-16"
      >
        <div className="section-inner grid w-full grid-cols-1 md:grid-cols-2">
          <div className="w-full max-w-xl md:col-start-1">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-brand-blue-mid">
              ( Concept )
            </p>
            <h2 className="font-heading mb-6 text-3xl leading-[1.05] tracking-tight text-brand-blue md:text-4xl lg:text-5xl">
              サッカー人のポテンシャルを
              <br />
              最大限に解き放つ
            </h2>

            <div className="space-y-5">
              <p className="text-sm leading-relaxed text-neutral-700 md:text-base">
                サッカーを通じて培われた経験やスキルを、ビジネスの現場でも存分に活かし、
                一人ひとりがその可能性を広げていける社会を目指しています。
              </p>
              <ul className="space-y-3 text-sm leading-relaxed text-neutral-600 md:text-base">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue-mid" />
                  <span>サッカー人材の“その先”を見据えたセカンドキャリアの創出</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue-mid" />
                  <span>営業力や実務能力を磨き、企業を支える人材への成長を支援</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue-mid" />
                  <span>
                    サッカーを通じて築いた
                    <strong className="font-bold text-brand-blue"> 人脈 </strong>
                    や
                    <strong className="font-bold text-brand-blue"> ネットワーク </strong>
                    を、事業や仕事に活用
                  </span>
                </li>
              </ul>
              <p className="border-t border-brand-blue-soft pt-4 text-sm font-medium text-neutral-700">
                代表取締役 小田原 敬介
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero3Section() {
  const { ref, isVisible } = useSectionFade();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative h-[200dvh] w-full overflow-visible bg-transparent py-0"
    >
      <SectionAnimationProvider isVisible={isVisible}>
        <Hero3Content />
      </SectionAnimationProvider>
    </section>
  );
}
