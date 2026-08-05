"use client";

/**
 * ConextfiveValueSection（5つの価値観）
 *
 * 見出し + 縦書き背景文字だけ sticky 固定し、
 * 01〜05 の各 h-dvh ブロックは通常フローで見出しの背後を抜けていく。
 * JavaScript のスクロール進捗計算は使わない。
 */

import Image from "next/image";
import { classNameProps } from "@/library/GlobalDateConfig";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeading from "@/components/layout/SectionHeading";

const values = [
  {
    title: "Challenge",
    label: "挑戦",
    description:
      "新しいことに踏み出す勇気を大切にし、成長の機会を自ら創り出します。",
    imageSrc: "/images/background_image_top.jpg",
    imageAlt: "挑戦を象徴するシーン",
  },
  {
    title: "Connection",
    label: "繋がり",
    description:
      "サッカーを通じて築いた人脈を、仕事と事業の力に変えていきます。",
    imageSrc: "/images/member_image.jpg",
    imageAlt: "繋がりを象徴するシーン",
  },
  {
    title: "Growth",
    label: "成長",
    description:
      "営業力や実務力を磨き、個人と組織の双方が高め合う環境を目指します。",
    imageSrc: "/images/Recruitment_image.jpg",
    imageAlt: "成長を象徴するシーン",
  },
  {
    title: "Team",
    label: "チーム",
    description:
      "一人ひとりの強みを活かし、日本一を目指す仲間として協力します。",
    imageSrc: "/images/slide_image.jpg",
    imageAlt: "チームを象徴するシーン",
  },
  {
    title: "Fun",
    label: "楽しさ",
    description:
      "仕事もサッカーも、前向きな熱量と楽しさを忘れずに取り組みます。",
    imageSrc: "/images/slide_image2.jpg",
    imageAlt: "楽しさを象徴するシーン",
  },
] as const;

export default function ConextfiveValueSection({ className = "" }: classNameProps) {
  return (
    <SectionShell
      id="service"
      variant="brand"
      animated={false}
      as="div"
      className={`relative py-0! ${className}`}
      innerClassName="w-full! max-w-none! px-0!"
    >
      {/* 背面固定: 縦書きデコ文字 */}
      <div className="pointer-events-none sticky top-0 z-0 h-dvh overflow-hidden">
        <div
          aria-hidden
          className="absolute right-0 top-0 flex h-dvh items-start gap-2 md:gap-6"
        >
          <span className="[writing-mode:vertical-rl] whitespace-nowrap font-heading text-[16vh] font-bold leading-none tracking-[0.08em] text-white/10 md:text-[18vh]">
            FIVEVALUE
          </span>
          <span className="[writing-mode:vertical-rl] whitespace-nowrap font-heading text-[16vh] font-bold leading-none tracking-[0.08em] text-white/10 md:text-[18vh]">
            CONEXT
          </span>
        </div>
      </div>

      {/* 前面固定: 上部マスク + 見出し（背面レイヤーへ重ねる） */}
      <div className="pointer-events-none sticky top-0 z-20 -mt-[100dvh] h-dvh">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[45dvh] bg-linear-to-b from-brand-blue via-brand-blue/85 to-transparent"
        />
        <div className="section-inner relative pt-[calc(var(--header-height)+1rem+5rem)] md:pt-[calc(var(--header-height)+1rem)]">
          <SectionHeading
            align="left"
            tone="light"
            eyebrow="Values"
            title={
              <>
                大切にしている
                <br />
                <span className="text-brand-red">5つ</span><span className="text-brand-white">の価値観</span>
              </>
            }
            className="mb-0 max-w-2xl"
          />
          <div className="mt-6 h-px w-16 bg-white/50" aria-hidden />
        </div>
      </div>

      {/* 通常フロー: 01〜05（各 100dvh、見出しの背後を抜けていく） */}
      <div className="relative z-10 -mt-[100dvh]">
        {values.map((value, index) => (
          <div
            key={value.title}
            className="flex h-dvh w-full items-end pb-[8dvh]"
          >
            <div className="section-inner w-full">
              <div className="relative h-[58dvh] w-full overflow-hidden rounded-2xl">
                <Image
                  src={value.imageSrc}
                  alt={value.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, min(100vw - 2rem, 72rem)"
                  className="object-cover"
                  priority={index === 0}
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-bl from-brand-blue/80 via-brand-blue/25 to-transparent" />
                <div className="absolute top-4 right-4 z-10 max-w-[min(100%,18rem)] text-right sm:top-6 sm:right-6 sm:max-w-xs md:top-8 md:right-8 md:max-w-sm">
                  <p className="font-heading text-5xl font-bold leading-none text-white/90 md:text-7xl lg:text-8xl">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 md:mt-3 md:text-sm">
                    {value.title}
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
                    {value.label}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/85 sm:text-sm md:mt-3 md:text-base">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
