import { useEffect, useState } from "react";

/**
 * ヒーローセクション用のアニメーションフック
 * コンポーネントのロード状態管理とフェードイン用クラス名を提供
 */
export function useHeroAnimation() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return {
    isLoaded,
    opacityClass: isLoaded ? " opacity-100" : " opacity-0",
  };
}
