"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { useSectionFade } from "@/hooks/useSectionFade";
import { SectionAnimationProvider } from "@/hooks/useSectionAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
}

/**
 * セクションのフェードイン・フェードアウトを自動で適用するラッパーコンポーネント
 * セクションが50%以上見えたらフェードイン、50%以下になったらフェードアウト
 * 子要素はuseSectionAnimationフックでisVisibleを取得して独自のアニメーションを実装可能
 */
export default function AnimatedSection({
  children,
  className = "",
  id,
  as = "section",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useSectionFade();

  const Component = as;

  return (
    <Component ref={ref as any} id={id} className={`snap-section ${className}`}>
      <SectionAnimationProvider isVisible={isVisible}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </SectionAnimationProvider>
    </Component>
  );
}

