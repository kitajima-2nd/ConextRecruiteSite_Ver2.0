"use client";

import { ReactNode } from "react";
import AnimatedSection from "@/components/AnimatedSection";

type SectionShellProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
  variant?: "light" | "muted" | "dark" | "transparent";
  as?: "section" | "div";
  animated?: boolean;
};

const variantClasses: Record<NonNullable<SectionShellProps["variant"]>, string> = {
  light: "bg-white text-neutral-900",
  muted: "bg-neutral-50 text-neutral-900",
  dark: "bg-neutral-950 text-white",
  transparent: "bg-transparent",
};

export default function SectionShell({
  children,
  id,
  className = "",
  innerClassName = "",
  variant = "light",
  as = "section",
  animated = true,
}: SectionShellProps) {
  const shellClassName = `section-shell ${variantClasses[variant]} ${className}`;

  const content = (
    <div className={`section-inner ${innerClassName}`}>{children}</div>
  );

  if (!animated) {
    const Tag = as;
    return (
      <Tag id={id} className={shellClassName}>
        {content}
      </Tag>
    );
  }

  return (
    <AnimatedSection id={id} as={as} className={shellClassName}>
      {content}
    </AnimatedSection>
  );
}
