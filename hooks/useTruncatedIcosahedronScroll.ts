"use client";

import { RefObject, useEffect, useRef, useState } from "react";

export type TruncatedIcosahedronScrollState = {
  /** 0: Hero, 1: Hero2, 2: Concept */
  stageIndex: number;
  /** 現在セクション内の進捗 0〜1 */
  stageProgress: number;
  /** 3セクション全体の進捗 0〜1 */
  globalProgress: number;
  /** 3D背景を表示するか（Concept通過後は非表示） */
  visible: boolean;
};

const INITIAL_STATE: TruncatedIcosahedronScrollState = {
  stageIndex: 0,
  stageProgress: 0,
  globalProgress: 0,
  visible: true,
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function smoothstep(edge0: number, edge1: number, x: number) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/** スクロール進捗から3Dの変換値を算出 */
export function getTruncatedIcosahedronTransform(
  globalProgress: number,
  stageProgress: number,
  time: number
) {
  const stage1End = 1 / 3;
  const stage2End = 2 / 3;

  const toStage1 = smoothstep(0, stage1End, globalProgress);
  const toStage2 = smoothstep(stage1End, stage2End, globalProgress);

  const baseScale = lerp(lerp(2.8, 2.0, toStage1), 0.82, toStage2);
  const pulse =
    toStage2 > 0
      ? 1 + 0.1 * Math.sin(stageProgress * Math.PI * 5 + time * 2.2)
      : 1 + 0.03 * Math.sin(time * 1.4);

  const scale = baseScale * pulse;
  const positionX = lerp(0, 2.15, toStage2);
  const positionY = lerp(0, -0.15, toStage2);

  return { scale, positionX, positionY, toStage2 };
}

function isSameScrollState(
  a: TruncatedIcosahedronScrollState,
  b: TruncatedIcosahedronScrollState
) {
  return (
    a.stageIndex === b.stageIndex &&
    a.visible === b.visible &&
    Math.abs(a.stageProgress - b.stageProgress) < 0.0001 &&
    Math.abs(a.globalProgress - b.globalProgress) < 0.0001
  );
}

export function useTruncatedIcosahedronScroll(
  sectionRefs: RefObject<HTMLElement | null>[]
) {
  const [state, setState] =
    useState<TruncatedIcosahedronScrollState>(INITIAL_STATE);

  // page.tsx で毎レンダー新しい配列が渡されても effect を再登録しない
  const sectionRefsRef = useRef(sectionRefs);
  sectionRefsRef.current = sectionRefs;

  useEffect(() => {
    const update = () => {
      const refs = sectionRefsRef.current;
      const scrollY = window.scrollY;
      const count = refs.length;
      const lastSection = refs[count - 1]?.current;
      const lastRect = lastSection?.getBoundingClientRect();
      const visible = lastRect ? lastRect.bottom > window.innerHeight * 0.15 : true;

      for (let i = 0; i < count; i++) {
        const el = refs[i].current;
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const top = scrollY + rect.top;
        const height = Math.max(el.offsetHeight, 1);
        const bottom = top + height;

        const isLast = i === count - 1;
        if (scrollY < bottom || isLast) {
          const stageProgress = clamp((scrollY - top) / height, 0, 1);
          const globalProgress = clamp((i + stageProgress) / count, 0, 1);
          const next = { stageIndex: i, stageProgress, globalProgress, visible };
          setState((prev) => (isSameScrollState(prev, next) ? prev : next));
          return;
        }
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return state;
}
