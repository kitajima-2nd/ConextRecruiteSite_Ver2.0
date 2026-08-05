"use client";

/**
 * AboutSection（事業内容 / Project）
 *
 * 固定見出し + スクロール連動で左テキスト／右写真を切替。
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
  cycleIntro,
} from "@/components/sections/4_KnowConextSection/aboutBusiness";

const NODE_COUNT = businessNodes.length;

/** 三角配置オフセット: 左上 / 右 / 下（角〜辺だけ重なる程度） */
const PHOTO_PLACEMENTS = [
  { x: "-32%", y: "-24%" },
  { x: "30%", y: "-6%" },
  { x: "-6%", y: "28%" },
] as const;

function getActiveIndex(progress: number) {
  return Math.min(NODE_COUNT - 1, Math.floor(progress * NODE_COUNT));
}

/**
 * 左カラム: アクティブ事業の番号・タイトル・説明・タグ・接続ラベル。
 * 全ノードを重ね、active のみ表示（クロスフェード）。
 */
function BusinessCopy({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="relative min-h-52 md:min-h-64">
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
              <div className="flex items-baseline gap-3">
                <span className="font-heading shrink-0 text-4xl font-bold leading-none text-brand-blue-soft md:text-6xl lg:text-7xl">
                  {node.number}
                </span>
                <h3 className="min-w-0 text-xl font-bold leading-tight text-neutral-900 md:text-3xl lg:text-4xl">
                  {node.title}
                </h3>
              </div>
              <p className="mb-1 text-sm leading-relaxed text-neutral-600 md:text-base">
                {node.description}
              </p>
              <ul className="m-0 mb-2 flex list-none flex-wrap gap-1 p-0">
                {node.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-brand-blue-soft bg-white/90 px-1.5 py-0.5 text-[0.55rem] font-medium tracking-wide text-brand-blue-mid"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              {edge && (
                <p className="text-xs font-medium tracking-wide text-brand-blue-mid md:text-sm">
                  → {edge.label}
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
 * 右カラム: 3枚を左上 / 右 / 下へ広げた三角スタック。
 * active が前面・不透明、それ以外は薄く背面へ。左テキストへのはみ出し可。
 */
function BusinessPhotoStack({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-lg sm:aspect-[4/3] sm:max-w-md lg:max-w-none">
      {/* 正六角形バックドロップ: 3枚写真の中心に配置、切替ごとに120°回転 */}
      <div
        aria-hidden
        className="clip-hexagon pointer-events-none absolute top-1/2 left-1/2 z-0 w-[123%] bg-brand-blue/70 transition-transform duration-700 ease-out motion-reduce:transition-none"
        style={{
          aspectRatio: "1 / 0.866",
          transform: `translate(-50%, -50%) rotate(${activeIndex * 120}deg)`,
        }}
      />
      {businessNodes.map((node, index) => {
        const isActive = index === activeIndex;
        const { x, y } = PHOTO_PLACEMENTS[index];
        return (
          <div
            key={node.id}
            className="absolute top-1/2 left-1/2 h-[80%] w-[66%] overflow-hidden rounded-lg shadow-md transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none lg:h-[72%] lg:w-[56%]"
            style={{
              transform: `translate(calc(-50% + ${x}), calc(-50% + ${y})) scale(${isActive ? 1.04 : 0.96})`,
              opacity: isActive ? 1 : 0.35,
              zIndex: isActive ? 30 : 10 + index,
            }}
          >
            <Image
              src={node.imageSrc}
              alt={node.imageAlt}
              fill
              sizes="(max-width: 1024px) 70vw, 40vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        );
      })}
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
      variant="muted"
      animated={false}
      as="div"
      className={`py-0! ${className}`}
      innerClassName="w-full! max-w-none! px-0!"
    >
      <div ref={trackRef} className="relative h-[600dvh] w-full">
        {/* モバイルは上寄せ + Know Conext の固定見出し分だけ下げて重なりを回避 */}
        <div className="sticky top-0 flex h-dvh w-full items-start overflow-visible md:items-center">
          <div className="section-inner grid w-full grid-cols-1 items-center gap-8 pt-[calc(var(--header-height)+1rem+5rem)] pb-8 md:gap-10 md:py-[calc(var(--header-height)+1rem)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 lg:py-8">
            {/* 左: 固定見出し + 切替コピー（写真より前面で可読性を確保） */}
            <div className="relative z-20 min-w-0">
              <SectionHeading
                align="left"
                eyebrow="Project"
                title="Conext 3つの軸"
                size="display"
                className="mb-8 max-w-2xl md:mb-10"
              />
              <BusinessCopy activeIndex={activeIndex} />
            </div>

            {/* 右: 三角配置写真（左へはみ出してテキストと重なってよい） */}
            <div className="relative z-10 min-w-0 lg:-ml-[18%] lg:w-[118%]">
              <BusinessPhotoStack activeIndex={activeIndex} />
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
