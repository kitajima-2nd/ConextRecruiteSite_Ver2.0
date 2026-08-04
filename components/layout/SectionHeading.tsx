"use client";

import Reveal from "@/components/motion/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

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
  tone: _tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleTone = "text-neutral-900";
  const descTone = "text-neutral-600";
  const eyebrowTone = "text-brand-blue-mid";
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
          className={`font-heading text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl ${titleTone}`}
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
