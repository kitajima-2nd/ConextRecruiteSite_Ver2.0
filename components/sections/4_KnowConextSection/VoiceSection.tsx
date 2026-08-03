"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { classNameProps } from "@/library/GlobalDateConfig";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeading from "@/components/layout/SectionHeading";
import { voiceItems } from "@/components/sections/4_KnowConextSection/voiceData";

const ROTATE_MS = 5500;

export default function VoiceSection({ className = "" }: classNameProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const reduceMotion = useReducedMotion();
  const count = voiceItems.length;
  const active = voiceItems[activeIndex] ?? voiceItems[0];
  const fadeDuration = reduceMotion ? 0.01 : 0.55;

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
    if (!inView || count < 2) return;

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, [inView, count, activeIndex]);

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

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 md:p-10">
            <div className="relative min-h-[16rem]">
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
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-600">
                      {active.department}
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
                const selected = index === activeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-label={`${item.department} ${item.name}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      selected
                        ? "w-8 bg-neutral-900"
                        : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg lg:aspect-square">
            <AnimatePresence mode="sync">
              <motion.div
                key={active.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: fadeDuration, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={active.imageSrc}
                  alt={active.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority={activeIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
