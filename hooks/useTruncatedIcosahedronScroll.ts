"use client";

import { RefObject, useEffect, useRef, useState } from "react";

export type TruncatedIcosahedronScrollState = {
  /** 0: Hero, 1: Hero2, 2: Hero3 */
  stageIndex: number;
  /** 現在セクション内の進捗 0〜1 */
  stageProgress: number;
  /** 3セクション全体の進捗 0〜1 */
  globalProgress: number;
  /** 3D背景を表示するか（Hero3が画面外へ抜け切ったら非表示） */
  visible: boolean;
  /**
   * Hero3 が sticky 走行を終えて上方向へ抜けた量（px）。
   * sticky 中は 0、抜け始めは負方向（例: -200）。
   * fixed 背景を同じ量だけ translateY してスクロールアウトさせる。
   */
  exitOffsetY: number;
};

const INITIAL_STATE: TruncatedIcosahedronScrollState = {
  stageIndex: 0,
  stageProgress: 0,
  globalProgress: 0,
  visible: true,
  exitOffsetY: 0,
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
  time: number,
  stageIndex = 0,
  /** R3F viewport.width（ワールド単位、画面幅 100vw 相当） */
  viewportWidth = 6.4
) {
  const stage1End = 1 / 3;
  const stage2End = 2 / 3;

  const toStage1 = smoothstep(0, stage1End, globalProgress);
  const toStage2 = smoothstep(stage1End, stage2End, globalProgress);

  // Hero3 到達後は位置・スケールを固定（脈動も停止）
  const locked = stageIndex >= 2 || globalProgress >= stage2End;

  const baseScale = lerp(lerp(2.8, 2.0, toStage1), 0.82, toStage2);
  const pulse = locked
    ? 1
    : toStage2 > 0
      ? 1 + 0.1 * Math.sin(stageProgress * Math.PI * 5 + time * 2.2)
      : 1 + 0.03 * Math.sin(time * 1.4);

  const scale = baseScale * pulse;
  // 画面幅に比例（デスクトップ相当で約 2.15）。70% まではみ出し可・30% は必ず残す
  const desiredX = viewportWidth * 0.34;
  const maxX = viewportWidth / 2 + scale * 0.7;
  const positionX = lerp(0, Math.min(desiredX, maxX), toStage2);
  const positionY = lerp(0, -0.15, toStage2);

  return { scale, positionX, positionY, toStage2, locked };
}

function isSameScrollState(
  a: TruncatedIcosahedronScrollState,
  b: TruncatedIcosahedronScrollState
) {
  return (
    a.stageIndex === b.stageIndex &&
    a.visible === b.visible &&
    Math.abs(a.stageProgress - b.stageProgress) < 0.0001 &&
    Math.abs(a.globalProgress - b.globalProgress) < 0.0001 &&
    Math.abs(a.exitOffsetY - b.exitOffsetY) < 0.5
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

      // Hero3 が画面から完全に出たら非表示（スクロール同期で消えた後）
      const visible = lastRect ? lastRect.bottom > 0 : true;
      // sticky 走行分を超えてから背景を一緒に上げる（200dvh sticky 対応）
      const stickyTravel = lastRect
        ? Math.max(0, lastRect.height - window.innerHeight)
        : 0;
      const exitOffsetY =
        lastRect && lastRect.top < -stickyTravel
          ? lastRect.top + stickyTravel
          : 0;

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
          const next = {
            stageIndex: i,
            stageProgress,
            globalProgress,
            visible,
            exitOffsetY,
          };
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
