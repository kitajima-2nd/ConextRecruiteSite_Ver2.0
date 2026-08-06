"use client";

/**
 * VoiceSection（働いている人の声）
 *
 * 上部: 縦長ポートレート6枚の無限マーキー（右→左）+ 重ね見出し
 * 下部: 代表3名カード（画像 / 向き合い方一言 / ローマ字名・説明・部署・役職）
 */

import type { ReactNode } from "react";
import Image from "next/image";
import { classNameProps } from "@/library/GlobalDateConfig";
import SectionShell from "@/components/layout/SectionShell";
import {
  voiceItems,
  type VoiceItem,
} from "@/components/sections/4_KnowConextSection/voiceData";

const FEATURED = voiceItems.slice(0, 3);

function MarqueePortrait({ item, priority = false }: { item: VoiceItem; priority?: boolean }) {
  return (
    <div className="relative overflow-hidden bg-brand-blue-wash">
      <Image
        src={item.imageSrc}
        alt={item.imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 28vw, 22vw"
        priority={priority}
      />
    </div>
  );
}

const BASE_TEXT =
  "text-[3.375rem] font-bold leading-snug text-white md:text-[3.75rem] lg:text-[4.5rem]";
/** 通常語（旧 BASE）の約5倍。モバイルははみ出し防止で一段抑える */
const EMPHASIS =
  "inline-block text-4xl font-bold leading-none md:text-[5.625rem] lg:text-[7.5rem]";

type AttitudeOverlay = {
  top: ReactNode;
  bottom: ReactNode;
};

const ATTITUDE_OVERLAYS: AttitudeOverlay[] = [
  {
    top: (
      <p
        className={`absolute top-4 left-4 z-10 flex max-w-[90%] flex-col items-start text-left ${BASE_TEXT}`}
      >
        <span>自分の</span>
        <span className={`${EMPHASIS} text-brand-red`}>限界</span>
        <span>を決めず</span>
      </p>
    ),
    bottom: (
      <p className={`absolute right-4 bottom-4 z-10 max-w-[90%] text-right ${BASE_TEXT}`}>
        <span className={`${EMPHASIS} text-white`}>挑戦</span>
        できる。
      </p>
    ),
  },
  {
    top: (
      <p
        className={`absolute top-4 right-4 z-10 flex max-w-[90%] flex-col items-end text-right ${BASE_TEXT}`}
      >
        <span className={`${EMPHASIS} text-brand-red`}>時間</span>
        <span>を忘れるくらい</span>
      </p>
    ),
    bottom: (
      <p className={`absolute bottom-4 left-4 z-10 max-w-[90%] text-left ${BASE_TEXT}`}>
        <span className={`${EMPHASIS} text-white`}>熱中</span>
        できる。
      </p>
    ),
  },
  {
    top: (
      <p className={`absolute top-4 right-4 z-10 max-w-[90%] text-right ${BASE_TEXT}`}>
        <span className={`${EMPHASIS} text-brand-red`}>今、人生</span>
        で
      </p>
    ),
    bottom: (
      <p className={`absolute bottom-4 left-4 z-10 max-w-[90%] text-left ${BASE_TEXT}`}>
        1番
        <span className={`${EMPHASIS} text-white`}>自分に自信</span>
        がある。
      </p>
    ),
  },
];

function MemberCard({
  item,
  index,
  reverse = false,
}: {
  item: VoiceItem;
  index: number;
  reverse?: boolean;
}) {
  const overlay = ATTITUDE_OVERLAYS[index];

  const photo = (
    <div className="relative aspect-3/4 w-full shrink-0 overflow-hidden md:aspect-auto md:w-[70%] md:min-h-[46.8rem]">
      <Image
        src={item.imageSrc}
        alt={item.imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 90vw, 70vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-brand-blue/55 via-brand-blue/10 to-transparent" />
      {overlay ? (
        <>
          {overlay.top}
          {overlay.bottom}
        </>
      ) : null}
    </div>
  );

  const copy = (
    <div className="flex w-full flex-col justify-between gap-6 bg-brand-blue px-6 py-7 text-white md:w-[30%] md:gap-8 md:px-8 md:py-10">
      <h3 className="font-heading text-left text-4xl font-bold tracking-wide text-white md:text-6xl lg:text-8xl">
        {item.romanName}
      </h3>

      {/* attitude（画像上）と部署名のあいだに quote */}
      <div className="space-y-3 text-left">
        {item.quote.map((paragraph, i) => (
          <p
            key={`${item.id}-q${i}`}
            className="text-base leading-relaxed text-white/90 md:text-xl"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="space-y-2 text-right">
        <p className="text-lg leading-relaxed text-white/85 md:text-2xl">
          {item.blurb}
        </p>
        <p className="text-base font-medium tracking-wide text-white/70 md:text-lg">
          {item.department} ／ {item.role}
        </p>
      </div>
    </div>
  );

  return (
    <article
      className={`flex flex-col overflow-hidden md:flex-row md:items-stretch ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {photo}
      {copy}
    </article>
  );
}

export default function VoiceSection({ className = "" }: classNameProps) {
  const marqueeItems = [...voiceItems, ...voiceItems];

  return (
    <SectionShell
      id="voice"
      variant="light"
      animated={false}
      className={`min-h-dvh ${className}`}
      innerClassName="w-full! max-w-none! px-0!"
    >
      {/* 上部: マーキー + 重ね見出し */}
      <div className="relative mb-12 w-full md:mb-16 lg:mb-20">
        <div className="voice-marquee h-[64dvh] md:h-[72dvh]" aria-hidden>
          <div className="voice-marquee__track">
            {marqueeItems.map((item, index) => (
              <MarqueePortrait
                key={`${item.id}-m${index}`}
                item={item}
                priority={index < 4}
              />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-r from-brand-blue/55 via-brand-blue/25 to-transparent" />

        <div className="section-inner pointer-events-none absolute inset-x-0 top-0 z-20 flex h-full flex-col justify-center pt-[calc(var(--header-height)+0.5rem)]">
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-white/80 md:mb-4 md:text-sm">
            ( Voice )
          </p>
          <h2 className="font-heading max-w-none text-7xl leading-[1.05] font-bold tracking-tight text-white/20 sm:text-8xl md:text-[7.5rem] lg:text-[9rem] xl:text-[12rem]">
            WE ARE
            <br />
            CONEXT MARKETING
          </h2>
        </div>
      </div>

      {/* マーキーと代表3名のあいだ */}
      <div className="mx-auto mb-12 w-[90%] md:mb-16 lg:mb-20">
        <h3 className="font-heading flex flex-col items-start gap-2 leading-[1.2] font-bold tracking-tight md:gap-2.5">
          <span className="w-fit bg-brand-blue px-3 py-1 text-[clamp(1.2rem,calc((90vw-1.5rem)/10),4.8rem)] text-white">
            現場の声
          </span>
          <span className="w-fit whitespace-nowrap bg-brand-blue px-3 py-1 text-[calc((90vw-1.5rem)/18.75)] text-white">
            サッカーから始まる仕事の楽しさ
          </span>
        </h3>
      </div>

      {/* 下部: 代表3名（画面幅90%） */}
      <div className="mx-auto w-[90%] pb-8 md:pb-12">
        <div className="grid grid-cols-1 gap-3 md:gap-4">
          {FEATURED.map((item, index) => (
            <MemberCard
              key={item.id}
              item={item}
              index={index}
              reverse={index === 1}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
