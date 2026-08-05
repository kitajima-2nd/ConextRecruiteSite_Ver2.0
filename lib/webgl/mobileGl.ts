/** タッチ／粗いポインタ端末向けの WebGL・スクロール設定 */
export function isCoarsePointerDevice(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: coarse)").matches ||
    navigator.maxTouchPoints > 0
  );
}

export function getMobileAwareDpr(): number | [number, number] {
  return isCoarsePointerDevice() ? 1 : [1, 2];
}

export function getMobileAwareGl(extra: Record<string, unknown> = {}) {
  const mobile = isCoarsePointerDevice();
  return {
    alpha: true,
    antialias: !mobile,
    powerPreference: mobile ? "default" : "high-performance",
    ...extra,
  };
}

export function getScrollBehaviorPreference(): ScrollBehavior {
  return isCoarsePointerDevice() ? "auto" : "smooth";
}
