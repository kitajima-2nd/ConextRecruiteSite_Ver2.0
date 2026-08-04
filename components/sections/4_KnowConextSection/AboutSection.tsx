"use client";

import { classNameProps } from "@/library/GlobalDateConfig";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeading from "@/components/layout/SectionHeading";
import {
  businessEdges,
  businessNodes,
  cycleIntro,
  type BusinessNode,
} from "@/components/sections/4_KnowConextSection/aboutBusiness";

const CARD_WIDTH_CLASS = "w-[34%] sm:w-[32%]";

function BusinessCard({ node }: { node: BusinessNode }) {
  return (
    <article className="group relative overflow-hidden rounded-xl bg-linear-to-br from-brand-blue-wash to-white px-3 py-3 pl-4 shadow-sm before:absolute before:inset-y-2.5 before:left-0 before:w-0.5 before:rounded-full before:bg-brand-blue-soft before:transition-colors before:duration-300 hover:before:bg-brand-blue-mid md:px-4 md:py-3.5 md:pl-5">
      <div className="relative">
        <p className="mb-1 text-[0.6rem] font-medium tracking-[0.18em] text-brand-blue-mid">
          ( {node.eyebrow} )
        </p>
        <h3 className="mb-2 text-sm font-bold leading-snug text-neutral-900 md:text-base">
          {node.title}
        </h3>
        <ul className="m-0 flex list-none flex-wrap gap-1 p-0">
          {node.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-brand-blue-soft bg-white/90 px-1.5 py-0.5 text-[0.55rem] font-medium tracking-wide text-brand-blue-mid"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function DescriptionStack() {
  return (
    <ol className="m-0 flex list-none flex-col divide-y divide-brand-blue-soft p-0">
      {businessNodes.map((node, index) => {
        const edge = businessEdges[index];
        return (
          <li key={node.id} className="py-3 first:pt-0 last:pb-0 md:py-3.5">
            <div className="flex items-baseline gap-3">
              <span className="font-heading text-2xl font-bold leading-none text-brand-blue-soft md:text-3xl">
                {node.number}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="mb-1 text-sm font-bold text-neutral-900 md:text-base">
                  {node.title}
                </h3>
                <p className="text-xs leading-relaxed text-neutral-600 md:text-[0.8125rem]">
                  {node.description}
                </p>
                {edge && (
                  <p className="mt-1.5 text-[0.65rem] font-medium tracking-wide text-brand-blue-mid">
                    → {edge.label}
                  </p>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function CircleDiagram() {
  const placements = [
    { node: businessNodes[0], deg: 0 },
    { node: businessNodes[1], deg: 120 },
    { node: businessNodes[2], deg: 240 },
  ] as const;

  return (
    <div className="mx-auto w-full max-w-md pt-16 sm:pt-20 lg:max-w-xl lg:pt-0">
      <div className="relative aspect-square w-full">
        <div className="about-ring-spin pointer-events-none absolute inset-[6%]">
          <div className="about-ring-breathe h-full w-full text-brand-blue-mid/50">
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden
            >
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.9"
                strokeDasharray="2.2 1.6"
              />
              <circle
                cx="50"
                cy="50"
                r="34"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.4"
                strokeDasharray="1.4 1.2"
                opacity="0.5"
              />
              <path
                d="M50 8 A42 42 0 0 1 86 71"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.55"
                strokeDasharray="1.8 1.4"
                opacity="0.55"
                markerEnd="url(#cycle-arrow)"
              />
              <defs>
                <marker
                  id="cycle-arrow"
                  markerWidth="4"
                  markerHeight="4"
                  refX="3"
                  refY="2"
                  orient="auto"
                >
                  <path d="M0 0 L4 2 L0 4 Z" fill="currentColor" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>

        <p className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 text-center text-[0.65rem] font-medium tracking-[0.28em] text-brand-blue-mid">
          CYCLE
          <br />
          CONEXT
        </p>

        {/* 親サイズ基準で円周配置（translate% は要素自身基準のため使わない） */}
        {placements.map(({ node, deg }) => (
          <div
            key={node.id}
            className="pointer-events-none absolute inset-0"
            style={{ transform: `rotate(${deg}deg)` }}
          >
            <div
              className={`pointer-events-auto absolute top-[18%] left-1/2 z-10 lg:top-[10%] ${CARD_WIDTH_CLASS}`}
              style={{
                transform: `translate(-50%, -50%) rotate(${-deg}deg)`,
              }}
            >
              <BusinessCard node={node} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutSection({ className = "" }: classNameProps) {
  return (
    <SectionShell
      id="project"
      variant="muted"
      animated={false}
      className={`flex items-center py-6! md:py-8! lg:h-dvh lg:overflow-hidden lg:py-5! ${className}`}
      innerClassName="w-full"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
        <div className="min-w-0">
          <SectionHeading
            align="left"
            eyebrow="Project"
            title="事業内容"
            description={cycleIntro}
            className="mb-10 max-w-2xl"
          />
          <DescriptionStack />
        </div>

        <div className="min-w-0">
          <CircleDiagram />
        </div>
      </div>
    </SectionShell>
  );
}
