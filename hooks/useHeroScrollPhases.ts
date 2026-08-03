"use client";

import { RefObject, useEffect, useState } from "react";

export type HeroScrollPhase = "pin" | "slow" | "exit";

export type HeroScrollPhasesState = {
  /** sticky 内側コンテンツの上方向オフセット（px、負値） */
  exitOffsetY: number;
  phase: HeroScrollPhase;
};

/** トラック全体の高さ（vh） */
export const HERO_TRACK_VH = 300;
/** ここまで視覚固定（vh） */
export const HERO_PIN_END_VH = 100;
/** スロー区間の終端（vh） */
export const HERO_SLOW_END_VH = 200;
/** Phase B の視覚移動レート（1/5） */
export const HERO_SLOW_RATE = 0.2;

const INITIAL: HeroScrollPhasesState = {
  exitOffsetY: 0,
  phase: "pin",
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/**
 * Hero トラック内の局所スクロールから exitOffsetY を算出。
 * Phase A (0–100vh): 固定
 * Phase B (100–200vh): 視覚 1/5
 * Phase C (200–300vh): 残りを通常相当で追い切り（約 -1vh まで）
 *
 * ※ transform は sticky 本体ではなく内側ラッパに適用すること。
 */
export function computeHeroExitOffsetY(
  localY: number,
  vh: number,
  reduceMotion: boolean
): HeroScrollPhasesState {
  if (vh <= 0) return INITIAL;

  const pinEnd = (HERO_PIN_END_VH / 100) * vh;
  const slowEnd = (HERO_SLOW_END_VH / 100) * vh;
  const trackEnd = (HERO_TRACK_VH / 100) * vh;

  if (reduceMotion) {
    if (localY <= pinEnd) {
      return { exitOffsetY: 0, phase: "pin" };
    }
    const t = clamp((localY - pinEnd) / Math.max(trackEnd - pinEnd, 1), 0, 1);
    return { exitOffsetY: lerp(0, -vh, t), phase: "exit" };
  }

  if (localY <= pinEnd) {
    return { exitOffsetY: 0, phase: "pin" };
  }

  if (localY <= slowEnd) {
    const exitOffsetY = -(localY - pinEnd) * HERO_SLOW_RATE;
    return { exitOffsetY, phase: "slow" };
  }

  const slowExit = -(slowEnd - pinEnd) * HERO_SLOW_RATE;
  const t = clamp((localY - slowEnd) / Math.max(trackEnd - slowEnd, 1), 0, 1);
  return { exitOffsetY: lerp(slowExit, -vh, t), phase: "exit" };
}

/**
 * Topsection の Hero 300dvh トラック用。
 * sticky の内側ラッパへ渡す exitOffsetY を返す。
 */
export function useHeroScrollPhases(
  trackRef: RefObject<HTMLElement | null>
): HeroScrollPhasesState {
  const [state, setState] = useState<HeroScrollPhasesState>(INITIAL);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const update = () => {
      const el = trackRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const localY = clamp(-rect.top, 0, rect.height);
      const next = computeHeroExitOffsetY(localY, vh, reduceMotion);

      setState((prev) =>
        prev.phase === next.phase &&
        Math.abs(prev.exitOffsetY - next.exitOffsetY) < 0.5
          ? prev
          : next
      );
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [trackRef]);

  return state;
}
