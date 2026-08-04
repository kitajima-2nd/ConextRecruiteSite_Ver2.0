"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  lerp,
  smoothstep,
} from "@/hooks/useTruncatedIcosahedronScroll";
import {
  animateScrollTo,
  isScrollAnimating,
} from "@/lib/scroll/animateScrollTo";

/** 拡大開始スケール（中央の小さな青面） */
const SCALE_FROM = 0.12;
/** grow 完了＝全面ブルー＆文字表示開始（ピン進捗の半分 ≒ 100vh） */
export const HERO2_GROW_END = 0.5;
/** 自動スクロール発火（grow の約 20%） */
const AUTO_TRIGGER = 0.1;

function readProgress(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const scrollY = window.scrollY;
  const top = scrollY + rect.top;
  const range = Math.max(rect.height - window.innerHeight, 1);
  return Math.min(1, Math.max(0, (scrollY - top) / range));
}

export default function Hero2Section() {
  const trackRef = useRef<HTMLElement>(null);
  const blueRef = useRef<HTMLDivElement>(null);
  const lockingRef = useRef(false);
  const armedRef = useRef(true);
  const lastProgressRef = useRef(0);
  const readyRef = useRef(false);
  const rafRef = useRef(0);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTextVisible(true);
      if (blueRef.current) {
        blueRef.current.style.transform = "scale(1)";
      }
      return;
    }

    const apply = () => {
      rafRef.current = 0;
      const el = trackRef.current;
      const blue = blueRef.current;
      if (!el || !blue) return;

      const progress = readProgress(el);
      const growT = smoothstep(0, HERO2_GROW_END, progress);
      const scale = lerp(SCALE_FROM, 1, growT);
      blue.style.transform = `scale(${scale})`;

      const showText = progress >= HERO2_GROW_END;
      setTextVisible((prev) => (prev === showText ? prev : showText));

      if (!readyRef.current) {
        readyRef.current = true;
        lastProgressRef.current = progress;
        if (progress >= AUTO_TRIGGER) armedRef.current = false;
        return;
      }

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
        progress < HERO2_GROW_END &&
        !isScrollAnimating()
      ) {
        lockingRef.current = true;
        armedRef.current = false;
        const rect = el.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const pinRange = Math.max(rect.height - window.innerHeight, 1);
        const targetY = sectionTop + HERO2_GROW_END * pinRange;
        void animateScrollTo(targetY, { durationMs: 550 });
      }
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={trackRef}
      className="relative h-[300dvh] w-full bg-transparent"
    >
      {/*
        重ね順:
        1) 侍ブルー（sticky・z なし）→ fixed 切頂(z-5)の下
        2) 切頂 WebGL（TopSection 側 z-5）
        3) コピー（sticky z-10）→ 切頂の上
      */}
      <div className="sticky top-0 h-dvh w-full overflow-hidden">
        <div
          ref={blueRef}
          className="absolute inset-0 opacity-100"
          style={{
            transform: `scale(${SCALE_FROM})`,
            transformOrigin: "center bottom",
            backgroundColor: "var(--brand-blue)",
          }}
          aria-hidden
        />
      </div>

      <div className="pointer-events-none sticky top-0 z-10 -mt-[100dvh] h-dvh w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={
            textVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="pointer-events-auto flex h-full w-full items-center px-6 text-white md:px-10 lg:px-16"
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
