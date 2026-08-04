"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useStickyScrollProgress } from "@/hooks/useStickyScrollProgress";
import {
  lerp,
  smoothstep,
} from "@/hooks/useTruncatedIcosahedronScroll";

/** 拡大開始スケール（中央の小さな青面） */
const SCALE_FROM = 0.12;
/** grow 完了＝全面ブルー＆文字表示開始（ピン進捗の半分 ≒ 100vh） */
export const HERO2_GROW_END = 0.5;
/** 自動スクロール発火（grow の約 20%） */
const AUTO_TRIGGER = 0.1;

export default function Hero2Section() {
  const trackRef = useRef<HTMLElement>(null);
  const progress = useStickyScrollProgress(trackRef);
  const lockingRef = useRef(false);
  const armedRef = useRef(true);
  const lastProgressRef = useRef(0);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const el = trackRef.current;
    if (!el) return;

    const prev = lastProgressRef.current;
    lastProgressRef.current = progress;
    const scrollingDown = progress > prev;

    if (progress < AUTO_TRIGGER) {
      armedRef.current = true;
      lockingRef.current = false;
      return;
    }

    if (progress >= HERO2_GROW_END) {
      lockingRef.current = false;
      return;
    }

    if (
      !lockingRef.current &&
      armedRef.current &&
      scrollingDown &&
      progress >= AUTO_TRIGGER &&
      progress < HERO2_GROW_END
    ) {
      lockingRef.current = true;
      armedRef.current = false;

      const rect = el.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const pinRange = Math.max(rect.height - window.innerHeight, 1);
      const targetY = sectionTop + HERO2_GROW_END * pinRange;

      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  }, [progress]);

  const growT = smoothstep(0, HERO2_GROW_END, progress);
  const scale = lerp(SCALE_FROM, 1, growT);
  const textVisible = progress >= HERO2_GROW_END;

  return (
    <section
      ref={trackRef}
      className="relative h-[300dvh] w-full bg-transparent"
    >
      {/* sticky 自体は透明（拡大前に全面が青にならない） */}
      <div className="sticky top-0 h-dvh w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-brand-blue will-change-transform"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center bottom",
          }}
          aria-hidden
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={
            textVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 flex h-full w-full items-center px-6 text-white md:px-10 lg:px-16"
        >
          <div className="section-inner grid w-full grid-cols-1 md:grid-cols-2">
            <div className="w-full max-w-xl text-left md:col-start-2">
              <p className="mb-5 text-xs font-medium tracking-[0.2em] text-white/80 md:mb-6">
                ( Mission )
              </p>
              <h2 className="font-heading mb-4 text-3xl leading-[1.05] tracking-tight text-white md:text-4xl lg:text-5xl">
                サッカーの経験を、
                <br />
                仕事の力に。
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-white/75 md:text-base">
                プレーで培った行動力・チームワーク・挑戦心を、ビジネスの現場で発揮する。
              </p>
            </div>
          </div>
        </motion.div>

        {textVisible ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-14 z-10">
            <div className="section-inner flex justify-end">
              <div className="hidden flex-col items-end gap-2 md:flex">
                <span className="text-xs uppercase tracking-[0.24em] text-white/50">
                  Keep scrolling
                </span>
                <div className="h-24 w-px bg-linear-to-b from-white/80 to-transparent" />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
