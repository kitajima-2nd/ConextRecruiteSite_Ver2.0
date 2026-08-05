"use client";

import Reveal from "@/components/motion/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  /** default: 節タイトル / display: 見せ場用の一段大きい見出し */
  size?: "default" | "display";
  className?: string;
};

const titleSizeClass = {
  default: "text-5xl md:text-6xl lg:text-7xl",
  display: "text-6xl md:text-7xl lg:text-8xl",
} as const;

function formatEyebrow(label: string) {
  const trimmed = label.trim();
  if (trimmed.startsWith("(") && trimmed.endsWith(")")) return trimmed;
  return `( ${trimmed} )`;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  size = "default",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const isLight = tone === "light";
  const titleTone = isLight ? "text-white" : "text-neutral-900";
  const descTone = isLight ? "text-white/80" : "text-neutral-600";
  const eyebrowTone = isLight ? "text-white/70" : "text-brand-blue-mid";
  const headingFrom = align === "left" ? "left" : "right";

  return (
    <div className={`section-heading max-w-3xl ${alignClass} ${className}`}>
      <Reveal from={headingFrom}>
        {eyebrow && (
          <p
            className={`section-eyebrow mb-4 text-xs font-medium tracking-[0.2em] ${eyebrowTone}`}
          >
            {formatEyebrow(eyebrow)}
          </p>
        )}
        <h2
          className={`font-heading leading-[1.05] tracking-tight ${titleSizeClass[size]} ${titleTone}`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal from="up" delay={0.12}>
          <p
            className={`mt-5 max-w-2xl text-base leading-relaxed md:text-lg ${descTone} ${align === "center" ? "mx-auto" : ""}`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
