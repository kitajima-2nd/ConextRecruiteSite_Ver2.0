import { useEffect, useState } from "react";
import { fadeInTransition } from "@/animations/heroAnimations";

/**
 * ヒーローセクション用のアニメーションフック
 * 
 * このフックは以下の機能を提供します：
 * - コンポーネントのロード状態管理
 * - フェードイン用のクラス名生成
 * 
 * @returns アニメーション関連の状態と設定
 */
export function useHeroAnimation() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return {
    isLoaded,
    fadeInTransition,
    opacityClass: isLoaded ? " opacity-100" : " opacity-0",
  };
}

