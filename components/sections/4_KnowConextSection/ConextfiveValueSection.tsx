"use client";

import Reveal from "@/components/motion/Reveal";
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
};

function ValueTile({ value, index, featured = false, delay }: ValueTileProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Reveal
      as="article"
      from="up"
      delay={delay}
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
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-blue-mid">
          {value.title}
        </p>
        <h3
          className={`mb-3 font-bold text-neutral-900 ${
            featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
          }`}
        >
          {value.label}
        </h3>
        <p
          className={`leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-neutral-800 ${
            featured ? "text-sm md:text-base" : "text-sm"
          }`}
        >
          {value.description}
        </p>
      </div>
    </Reveal>
  );
}

export default function ConextfiveValueSection({ className = "" }: classNameProps) {
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
      <Reveal from="up" delay={0.08}>
        <div className="rule-sky mb-10" aria-hidden />
      </Reveal>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {values.map((value, index) => (
          <ValueTile
            key={value.title}
            value={value}
            index={index}
            featured={index === 0}
            delay={index * 0.08}
          />
        ))}
      </div>
    </SectionShell>
  );
}
