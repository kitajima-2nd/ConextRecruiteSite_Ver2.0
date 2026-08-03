"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { classNameProps } from "@/library/GlobalDateConfig";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeading from "@/components/layout/SectionHeading";

const values = [
  {
    title: "Challenge",
    label: "挑戦",
    description: "新しいことに踏み出す勇気を大切にし、成長の機会を自ら創り出します。",
  },
  {
    title: "Connection",
    label: "繋がり",
    description: "サッカーを通じて築いた人脈を、仕事と事業の力に変えていきます。",
  },
  {
    title: "Growth",
    label: "成長",
    description: "営業力や実務力を磨き、個人と組織の双方が高め合う環境を目指します。",
  },
  {
    title: "Team",
    label: "チーム",
    description: "一人ひとりの強みを活かし、日本一を目指す仲間として協力します。",
  },
  {
    title: "Fun",
    label: "楽しさ",
    description: "仕事もサッカーも、前向きな熱量と楽しさを忘れずに取り組みます。",
  },
] as const;

type ValueItem = (typeof values)[number];

type ValueTileProps = {
  value: ValueItem;
  index: number;
  featured?: boolean;
  delay: number;
  active: boolean;
  reduceMotion: boolean | null;
};

function ValueTile({
  value,
  index,
  featured = false,
  delay,
  active,
  reduceMotion,
}: ValueTileProps) {
  const number = String(index + 1).padStart(2, "0");
  const duration = reduceMotion ? 0.01 : 0.55;
  const show = active || !!reduceMotion;

  return (
    <motion.article
      initial={false}
      animate={
        show
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: reduceMotion ? 0 : 18 }
      }
      transition={{ duration, delay: reduceMotion ? 0 : delay, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl bg-linear-to-br from-brand-blue-wash to-white px-6 py-7 pl-7 transition-colors duration-300 before:absolute before:inset-y-5 before:left-0 before:w-0.5 before:rounded-full before:bg-brand-blue-soft before:transition-colors before:duration-300 hover:before:bg-brand-blue-mid md:px-8 md:py-8 md:pl-8 ${
        featured ? "md:min-h-56 lg:col-span-2" : ""
      }`}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute -right-1 -top-2 font-heading font-bold leading-none text-brand-blue-soft/70 transition-colors duration-300 group-hover:text-brand-blue-soft ${
          featured
            ? "text-7xl md:text-8xl lg:text-9xl"
            : "text-6xl md:text-7xl"
        }`}
      >
        {number}
      </span>

      <div className={`relative ${featured ? "max-w-xl" : ""}`}>
        <motion.p
          initial={false}
          animate={{ opacity: show ? 1 : 0 }}
          transition={{
            duration,
            delay: reduceMotion ? 0 : delay + 0.08,
            ease: "easeOut",
          }}
          className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-blue-mid"
        >
          {value.title}
        </motion.p>
        <motion.h3
          initial={false}
          animate={
            show
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: reduceMotion ? 0 : 8 }
          }
          transition={{
            duration,
            delay: reduceMotion ? 0 : delay + 0.14,
            ease: "easeOut",
          }}
          className={`mb-3 font-bold text-neutral-900 ${
            featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
          }`}
        >
          {value.label}
        </motion.h3>
        <motion.p
          initial={false}
          animate={
            show
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: reduceMotion ? 0 : 8 }
          }
          transition={{
            duration,
            delay: reduceMotion ? 0 : delay + 0.2,
            ease: "easeOut",
          }}
          className={`leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-neutral-800 ${
            featured ? "text-sm md:text-base" : "text-sm"
          }`}
        >
          {value.description}
        </motion.p>
      </div>
    </motion.article>
  );
}

export default function ConextfiveValueSection({ className = "" }: classNameProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, amount: 0.2 });
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell
      id="service"
      variant="light"
      animated={false}
      className={`flex min-h-dvh items-center ${className}`}
      innerClassName="w-full"
    >
      <SectionHeading
        align="left"
        eyebrow="Values"
        title={
          <>
            大切にしている
            <br />
            <span className="text-brand-red">5つの価値観</span>
          </>
        }
        description="サッカーで培った強みを、ビジネスの現場でも活かすための行動指針です。"
        className="mb-3 max-w-2xl"
      />
      <div className="rule-sky mb-10" aria-hidden />

      <div
        ref={gridRef}
        className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3"
      >
        {values.map((value, index) => (
          <ValueTile
            key={value.title}
            value={value}
            index={index}
            featured={index === 0}
            delay={index * 0.08}
            active={inView}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>
    </SectionShell>
  );
}
