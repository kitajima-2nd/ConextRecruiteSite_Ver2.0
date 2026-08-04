"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Reveal from "@/components/motion/Reveal";
import { classNameProps } from "@/library/GlobalDateConfig";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeading from "@/components/layout/SectionHeading";
import {
  voiceItems,
  type VoiceItem,
} from "@/components/sections/4_KnowConextSection/voiceData";

const ROTATE_MS = 4000;
const STRIP_COUNT = 3;
const SLIDE_EASE = [0.17, 0.84, 0.44, 1] as const;
/** 帯内1枚分の幅（%）。3枚が横並びで少し重なる（旧38の1.3倍） */
const CARD_PCT = 49.4;

function mod(index: number, n: number) {
  return ((index % n) + n) % n;
}

function VoiceCard({
  item,
  priority = false,
}: {
  item: VoiceItem;
  priority?: boolean;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white shadow-[0_18px_40px_-18px_rgba(0,30,85,0.45)]">
      <div className="relative h-full w-full p-2 md:p-2.5">
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 45vw, 22vw"
            priority={priority}
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-brand-blue/80 via-brand-blue/35 to-transparent px-3 pb-3 pt-12 text-white">
            <p className="text-[0.6rem] font-medium tracking-[0.16em] text-white/80">
              {item.department}
            </p>
            <p className="mt-0.5 text-xs font-bold md:text-sm">{item.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

type VoiceCardStripProps = {
  start: number;
  direction: 1 | -1;
  sliding: boolean;
  reduceMotion: boolean | null;
  onSlideComplete: () => void;
  onPrev: () => void;
  onNext: () => void;
};

function VoiceCardStrip({
  start,
  direction,
  sliding,
  reduceMotion,
  onSlideComplete,
  onPrev,
  onNext,
}: VoiceCardStripProps) {
  const count = voiceItems.length;
  const showBack = count >= 4;
  // 帯の切替と同期: スライド開始時点で「次の静止状態」の背面へ切替
  // 進む → 退場する先頭(start)が背面へ / 戻る → start-2 が新しい背面
  const backIndex = showBack
    ? sliding
      ? direction === 1
        ? start
        : mod(start - 2, count)
      : mod(start - 1, count)
    : -1;
  const back = showBack ? voiceItems[backIndex] : null;

  const stripLen = sliding ? STRIP_COUNT + 1 : STRIP_COUNT;
  const stripStart = sliding && direction === -1 ? start - 1 : start;
  const stripItems = Array.from({ length: stripLen }, (_, i) => {
    return voiceItems[mod(stripStart + i, count)]!;
  });

  const duration = reduceMotion ? 0.01 : 0.7;
  const step = `-${CARD_PCT}%`;

  // 進む: 0 → -step / 戻る: -step → 0（戻る開始時は initial で -step）
  const animateX = sliding && direction === 1 ? step : "0%";
  const initialX =
    sliding && direction === -1 && !reduceMotion ? step : "0%";

  return (
    <div className="flex flex-col gap-4">
      <div className="relative mx-auto h-[min(52vw,22rem)] w-full max-w-xl overflow-visible sm:h-96 lg:max-w-none">
        {/* 背面: 帯から外れたカードを左へ 5% はみ出し */}
        {back ? (
          <div
            aria-hidden
            className="absolute top-[10%] left-0 z-0 h-[80%] w-[40%] rounded-2xl bg-brand-blue-soft shadow-md"
            style={{
              transform: reduceMotion
                ? "translateX(-5%)"
                : "translateX(-5%) rotate(-5deg)",
            }}
          >
            <div className="h-full w-full scale-[0.96] opacity-55">
              <VoiceCard item={back} />
            </div>
          </div>
        ) : null}

        {/* 前面3枚帯 */}
        <div className="relative z-10 ml-[4%] h-full overflow-hidden pr-1">
          <motion.div
            key={sliding ? `slide-${direction}-${start}` : `idle-${start}`}
            className="flex h-full items-stretch"
            initial={{ x: initialX }}
            animate={{ x: animateX }}
            transition={{
              duration: sliding ? duration : 0,
              ease: SLIDE_EASE,
            }}
            onAnimationComplete={() => {
              if (sliding) onSlideComplete();
            }}
          >
            {stripItems.map((item, i) => {
              const itemIndex = mod(stripStart + i, count);
              return (
                <div
                  key={`${item.id}-${itemIndex}`}
                  className="h-full shrink-0 px-1"
                  style={{
                    width: `${CARD_PCT}%`,
                    zIndex: 10 + i,
                  }}
                >
                  <VoiceCard item={item} priority={i === 0 && start === 0} />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {count > 1 ? (
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            aria-label="前の声へ"
            onClick={onPrev}
            disabled={sliding}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue-soft bg-white text-brand-blue-mid transition hover:border-brand-blue-mid hover:bg-brand-blue-wash disabled:opacity-40"
          >
            <span aria-hidden className="text-lg leading-none">
              ‹
            </span>
          </button>
          <button
            type="button"
            aria-label="次の声へ"
            onClick={onNext}
            disabled={sliding}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue-soft bg-white text-brand-blue-mid transition hover:border-brand-blue-mid hover:bg-brand-blue-wash disabled:opacity-40"
          >
            <span aria-hidden className="text-lg leading-none">
              ›
            </span>
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default function VoiceSection({ className = "" }: classNameProps) {
  const [start, setStart] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [sliding, setSliding] = useState(false);
  const pendingDir = useRef<1 | -1>(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const reduceMotion = useReducedMotion();
  const count = voiceItems.length;
  const active = voiceItems[start] ?? voiceItems[0];
  const fadeDuration = reduceMotion ? 0.01 : 0.55;

  const beginSlide = (dir: 1 | -1) => {
    if (sliding || count < 2) return;
    if (reduceMotion) {
      setDirection(dir);
      setStart((prev) => mod(prev + dir, count));
      return;
    }
    pendingDir.current = dir;
    setDirection(dir);
    setSliding(true);
  };

  const onSlideComplete = () => {
    setStart((prev) => mod(prev + pendingDir.current, count));
    setSliding(false);
  };

  const goTo = (index: number) => {
    if (sliding || index === start) return;
    const forward = mod(index - start, count);
    const backward = mod(start - index, count);
    const dir: 1 | -1 = forward <= backward ? 1 : -1;
    if (forward === 1 || backward === 1) {
      beginSlide(dir);
      return;
    }
    setDirection(dir);
    setStart(index);
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || count < 2 || sliding) return;

    const id = window.setInterval(() => {
      beginSlide(1);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, [inView, count, start, sliding, reduceMotion]);

  if (!active) return null;

  return (
    <SectionShell
      id="voice"
      variant="light"
      animated={false}
      className={`flex min-h-dvh items-center ${className}`}
    >
      <div ref={sectionRef} className="w-full">
        <SectionHeading
          align="left"
          eyebrow="Voice"
          title="働いている人の声"
          description="現場で活躍するメンバーのリアルな想いをご紹介します。"
          className="mb-10 max-w-2xl"
        />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Reveal from="up" className="min-w-0">
            <div className="relative min-h-64">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: fadeDuration, ease: "easeOut" }}
                  className="space-y-5"
                >
                  <div>
                    <p className="mb-2 text-xs font-medium tracking-[0.2em] text-brand-blue-mid">
                      ( {active.department} )
                    </p>
                    <h3 className="text-xl font-bold text-neutral-900 md:text-2xl">
                      {active.name}
                    </h3>
                  </div>
                  <div className="space-y-5 text-sm leading-relaxed text-neutral-700 md:text-base">
                    {active.quote.map((paragraph, i) => (
                      <p key={`${active.id}-q${i}`}>{paragraph}</p>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div
              className="mt-8 flex flex-wrap items-center gap-2"
              role="tablist"
              aria-label="従業員の声の切り替え"
            >
              {voiceItems.map((item, index) => {
                const selected = index === start;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-label={`${item.department} ${item.name}`}
                    onClick={() => goTo(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      selected
                        ? "w-8 bg-brand-red"
                        : "w-2.5 bg-brand-blue-soft hover:bg-brand-blue-mid"
                    }`}
                  />
                );
              })}
            </div>
          </Reveal>

          <Reveal from="down" delay={0.1} className="min-w-0">
            <VoiceCardStrip
              start={start}
              direction={direction}
              sliding={sliding}
              reduceMotion={reduceMotion}
              onSlideComplete={onSlideComplete}
              onPrev={() => beginSlide(-1)}
              onNext={() => beginSlide(1)}
            />
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
