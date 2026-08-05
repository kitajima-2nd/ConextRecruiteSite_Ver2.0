type AnimateScrollToOptions = {
  durationMs?: number;
};

let activeAnimations = 0;

export function isScrollAnimating(): boolean {
  return activeAnimations > 0;
}

/**
 * 端末非依存のスムーズスクロール。
 * iOS の behavior:"smooth" 不安定さを避け、rAF で位置を補間する。
 * PC の html { scroll-behavior: smooth } はフレーム毎 scrollTo を阻害するため、
 * 実行中だけ scrollBehavior を auto にする。
 */
export function animateScrollTo(
  targetY: number,
  { durationMs = 650 }: AnimateScrollToOptions = {}
): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();

  const startY = window.scrollY;
  const delta = targetY - startY;
  if (Math.abs(delta) < 1) return Promise.resolve();

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (reduceMotion) {
    window.scrollTo({ top: targetY, behavior: "auto" });
    return Promise.resolve();
  }

  const start = performance.now();
  activeAnimations += 1;

  const root = document.documentElement;
  const prevInlineScrollBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";

  return new Promise((resolve) => {
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased =
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      window.scrollTo(0, startY + delta * eased);
      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        activeAnimations = Math.max(0, activeAnimations - 1);
        root.style.scrollBehavior = prevInlineScrollBehavior;
        resolve();
      }
    };
    requestAnimationFrame(tick);
  });
}
