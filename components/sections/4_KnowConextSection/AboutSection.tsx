"use client";

/**
 * AboutSection（事業内容 / Project）
 *
 * 固定見出し + スクロール連動で左テキスト／右写真を切替。
 * 左: 正六角形枠線 + 白ハイライト／侍ブルー文字
 * 右: 上 / 左下 / 右下の3枚（切替は上→右下→左下のスタッガー）
 * トラック 600dvh（1事業 200dvh × 3）、sticky でビューポートにピン留め。
 */

import { useRef } from "react";
import Image from "next/image";
import { classNameProps } from "@/library/GlobalDateConfig";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeading from "@/components/layout/SectionHeading";
import { useStickyScrollProgress } from "@/hooks/useStickyScrollProgress";
import {
  businessEdges,
  businessNodes,
  type BusinessImages,
} from "@/components/sections/4_KnowConextSection/aboutBusiness";

const NODE_COUNT = businessNodes.length;

/** 文字サイズに沿う白ハイライト（純白・行高1で高さ超過を抑える） */
const textHighlightClass =
  "inline box-decoration-clone bg-[#ffffff] px-[0.08em] py-0 leading-none text-brand-blue [box-decoration-break:clone]";

/** 切替順序: 上 → 右下 → 左下（SPは残り高さで行分割、md+は aspect 固定） */
const SLOT_ORDER = [
  {
    key: "top" as const,
    delayMs: 0,
    className:
      "col-span-2 col-start-1 row-start-1 md:col-span-4 md:aspect-[2/1]",
  },
  {
    key: "bottomRight" as const,
    delayMs: 180,
    className:
      "col-span-1 col-start-2 row-start-2 md:col-span-2 md:col-start-3 md:aspect-square",
  },
  {
    key: "bottomLeft" as const,
    delayMs: 360,
    className:
      "col-span-1 col-start-1 row-start-2 md:col-span-2 md:col-start-1 md:aspect-square",
  },
] satisfies {
  key: keyof BusinessImages;
  delayMs: number;
  className: string;
}[];

function getActiveIndex(progress: number) {
  return Math.min(NODE_COUNT - 1, Math.floor(progress * NODE_COUNT));
}

/**
 * 左カラム: アクティブ事業の番号・タイトル・説明・タグ・接続ラベル。
 * 全ノードを重ね、active のみ表示（クロスフェード）。白ハイライト＋侍ブルー文字。
 */
function BusinessCopy({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="relative min-h-40 md:min-h-64">
      {businessNodes.map((node, index) => {
        const edge = businessEdges[index];
        const isActive = index === activeIndex;
        return (
          <div
            key={node.id}
            className="absolute inset-x-0 top-0 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? "translateY(0)" : "translateY(0.5rem)",
              pointerEvents: isActive ? "auto" : "none",
            }}
            aria-hidden={!isActive}
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-nowrap items-baseline gap-2 sm:gap-3">
                <span
                  className={`font-heading shrink-0 text-[clamp(1.5rem,8vw,2.25rem)] font-bold md:text-6xl lg:text-7xl ${textHighlightClass}`}
                >
                  {node.number}
                </span>
                <h3 className="min-w-0 text-[clamp(1rem,calc((100vw-5rem)/9),1.25rem)] font-bold whitespace-nowrap md:text-3xl lg:text-4xl">
                  <span className={textHighlightClass}>{node.title}</span>
                </h3>
              </div>
              <p className="mb-1 text-sm md:text-base">
                <span className={textHighlightClass}>{node.description}</span>
              </p>
              <ul className="m-0 mb-2 flex list-none flex-wrap gap-1 p-0">
                {node.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-brand-blue bg-[#ffffff] px-[0.35em] py-0 text-[0.55rem] font-medium leading-[1.15] tracking-wide text-brand-blue"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              {edge && (
                <p className="text-xs font-medium tracking-wide md:text-sm">
                  <span className={textHighlightClass}>→ {edge.label}</span>
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * 右カラム: 上（横幅2倍） / 左下 / 右下のグリッド。
 * active 切替時は上→右下→左下の順でクロスフェード。
 */
function BusinessPhotoGrid({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="mx-auto grid h-full min-h-0 w-full grid-cols-2 grid-rows-2 gap-0 md:h-auto md:max-w-lg md:grid-cols-4 lg:max-w-none">
      {SLOT_ORDER.map((slot) => (
        <div
          key={slot.key}
          className={`relative overflow-hidden shadow-md ${slot.className}`}
        >
          {businessNodes.map((node, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={`${node.id}-${slot.key}`}
                className="absolute inset-0 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none motion-reduce:delay-[0ms]!"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "scale(1)" : "scale(0.98)",
                  transitionDelay: isActive
                    ? `${slot.delayMs}ms`
                    : `${Math.max(0, 360 - slot.delayMs)}ms`,
                  zIndex: isActive ? 10 : 1,
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <Image
                  src={node.images[slot.key]}
                  alt={node.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 45vw, 25vw"
                  className="object-cover"
                  priority={index === 0 && slot.key === "top"}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

/**
 * 事業内容セクション本体。
 * sticky ピン中に progress で activeIndex を進め、左コピーと右写真のみ切替。
 */
export default function AboutSection({ className = "" }: classNameProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const progress = useStickyScrollProgress(trackRef);
  const activeIndex = getActiveIndex(progress);

  return (
    <SectionShell
      id="project"
      variant="light"
      animated={false}
      as="div"
      className={`py-0! ${className}`}
      innerClassName="w-full! max-w-none! px-0!"
    >
      <div ref={trackRef} className="relative h-[600dvh] w-full">
        {/* モバイルは上寄せ + Know Conext の固定見出し分だけ下げて重なりを回避 */}
        <div className="sticky top-0 flex h-dvh w-full items-start overflow-hidden md:items-center md:overflow-visible">
          <div className="relative mx-auto flex h-full w-full min-h-0 flex-col gap-3 px-3 pt-[calc(var(--header-height)+0.75rem+3.5rem)] pb-3 md:grid md:h-auto md:w-[80%] md:grid-cols-1 md:items-center md:gap-10 md:px-0 md:py-[calc(var(--header-height)+1rem)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 lg:py-8">
            {/* 正六角形: セクション最背面 */}
            <svg
              aria-hidden
              className="pointer-events-none absolute top-[42%] left-1/2 z-0 h-auto w-[min(120%,26.4rem)] text-brand-blue transition-transform duration-700 ease-out motion-reduce:transition-none md:top-1/2 md:left-[24%] md:w-[min(165%,42rem)] lg:w-[min(180%,48rem)]"
              viewBox="0 0 100 86.6"
              style={{
                transform: `translate(-50%, -50%) rotate(${activeIndex * 120}deg)`,
              }}
            >
              <polygon
                points="25,0 75,0 100,43.3 75,86.6 25,86.6 0,43.3"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.9"
              />
            </svg>

            {/* 左: 固定見出し + 切替コピー */}
            <div className="relative z-20 flex min-w-0 shrink-0 items-center md:min-h-80">
              <div className="relative w-full min-w-0">
                <SectionHeading
                  align="left"
                  eyebrow="Project"
                  title={
                    <span className={`whitespace-nowrap ${textHighlightClass}`}>
                      Conext 3つの軸
                    </span>
                  }
                  size="display"
                  className="mb-3 max-w-none md:mb-10 [&_h2]:mt-1 [&_h2]:leading-none [&_h2]:whitespace-nowrap [&_h2]:text-[clamp(1.5rem,calc((100vw-1.5rem)/7.5),3.75rem)] md:[&_h2]:text-7xl lg:[&_h2]:text-8xl [&_.section-eyebrow]:mb-3 [&_.section-eyebrow]:inline-block [&_.section-eyebrow]:bg-[#ffffff] [&_.section-eyebrow]:px-[0.08em] [&_.section-eyebrow]:py-0 [&_.section-eyebrow]:leading-none [&_.section-eyebrow]:text-brand-blue"
                />
                <BusinessCopy activeIndex={activeIndex} />
              </div>
            </div>

            {/* 右: 上 / 左下 / 右下（SPは残り高さに収まるよう縦を圧縮） */}
            <div className="relative z-10 min-h-0 w-full flex-1 md:flex-none">
              <BusinessPhotoGrid activeIndex={activeIndex} />
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
