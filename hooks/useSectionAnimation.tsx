"use client";

import { createContext, useContext, ReactNode } from "react";

const SectionAnimationContext = createContext<{ isVisible: boolean }>({
  isVisible: false,
});

/**
 * セクションのアニメーション状態を提供するProvider
 */
export const SectionAnimationProvider = ({
  children,
  isVisible,
}: {
  children: ReactNode;
  isVisible: boolean;
}) => {
  return (
    <SectionAnimationContext.Provider value={{ isVisible }}>
      {children}
    </SectionAnimationContext.Provider>
  );
};

/**
 * セクションのアニメーション状態を取得するフック
 * セクションが50%以上見えているかどうかを返す
 */
export const useSectionAnimation = () => useContext(SectionAnimationContext);

