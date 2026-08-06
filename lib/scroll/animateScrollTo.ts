type AnimateScrollToOptions = {
  durationMs?: number;
};

let activeAnimations = 0;
let animationGeneration = 0;

export function isScrollAnimating(): boolean {
  return activeAnimations > 0;
}

/**
 * 端末非依存のスムーズスクロール。
 * iOS の behavior:"smooth" 不安定さを避け、rAF で位置を補間する。
 * PC の html { scroll-behavior: smooth } はフレーム毎 scrollTo を阻害するため、
 * 実行中だけ scrollBehavior を auto にする。
 * 新規呼び出し時は進行中アニメをキャンセルする。
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

  const generation = ++animationGeneration;
  const start = performance.now();
  activeAnimations += 1;

  const root = document.documentElement;
  const prevInlineScrollBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";

  const finish = (resolve: () => void) => {
    activeAnimations = Math.max(0, activeAnimations - 1);
    if (generation === animationGeneration) {
      root.style.scrollBehavior = prevInlineScrollBehavior;
    }
    resolve();
  };

  return new Promise((resolve) => {
    const tick = (now: number) => {
      if (generation !== animationGeneration) {
        finish(resolve);
        return;
      }
      const t = Math.min(1, (now - start) / durationMs);
      const eased =
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      window.scrollTo(0, startY + delta * eased);
      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        finish(resolve);
      }
    };
    requestAnimationFrame(tick);
  });
}

function getHeaderOffset(): number {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--header-height")
    .trim();
  const parsed = Number.parseFloat(raw);
  if (Number.isFinite(parsed)) return parsed;
  const header = document.querySelector("header");
  return header?.getBoundingClientRect().height ?? 0;
}

/** セクション id へヘッダー分を差し引いてスムーズスクロール */
export function animateScrollToId(
  id: string,
  options?: AnimateScrollToOptions
): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  const target = document.getElementById(id);
  if (!target) return Promise.resolve();
  const rect = target.getBoundingClientRect();
  const targetY = window.scrollY + rect.top - getHeaderOffset();
  return animateScrollTo(Math.max(0, targetY), options);
}
