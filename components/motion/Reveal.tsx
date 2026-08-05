"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

export type RevealFrom = "up" | "down" | "left" | "right";

type RevealAs = "div" | "li" | "article" | "span" | "p" | "ul" | "section";

type RevealProps = {
  children: ReactNode;
  from?: RevealFrom;
  delay?: number;
  duration?: number;
  className?: string;
  as?: RevealAs;
  amount?: number;
  once?: boolean;
};

const OFFSET = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: -32, y: 0 },
  right: { x: 32, y: 0 },
} as const;

const MOTION_TAGS = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
  span: motion.span,
  p: motion.p,
  ul: motion.ul,
  section: motion.section,
} as const;

export default function Reveal({
  children,
  from = "up",
  delay = 0,
  duration = 0.55,
  className = "",
  as = "div",
  amount = 0.2,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once, amount });
  const reduceMotion = useReducedMotion();
  const offset = OFFSET[from];
  const MotionTag = MOTION_TAGS[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      ref={ref as never}
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={
        inView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}
