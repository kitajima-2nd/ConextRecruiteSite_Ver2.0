"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { companyData } from "@/library/GlobalDateConfig";

export default function HeroSection() {
  // カスタムフックを使用してフェードイン関連のロジックを取得
  const {
    opacityClass,
  } = useHeroAnimation();

  // スライドショー用の状態管理
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = companyData.heroSlideshow?.images || [];
  const interval = companyData.heroSlideshow?.interval || 3000;

  // スライドショーの自動切り替え
  useEffect(() => {
    if (images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  
  return (
    <section className="relative h-screen flex items-start justify-start px-5 py-30 overflow-hidden bg-white">
      {/* 左側コンテンツ */}
      <div className={`z-20 text-left text-gray-800 px-4 transition-opacity duration-2000 delay-1000 ${opacityClass}`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Be a <span className="text-primary text-blue-900">Soccer</span> Company
        </h1>
        <div className="items-center justify-center space-between">
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            サッカーで「繋がる」「広がる」
            <br />
            そして日本一のサッカーカンパニーへ
            <br />
            一緒に目指しませんか？
          </p>
        </div>
      </div>

      {/* 右側コンテンツ - 画面右下に配置 */}
      <div className="absolute bottom-0 right-0 z-0">
        {/* 六角形要素 - 横1:縦0.86の比率、全体的に20%拡大、レスポンシブ対応 */}
        <div
          className={`
            clip-hexagon absolute z-30 overflow-hidden
            /* モバイル（デフォルト） - 78.62vw × 67.63vw */
            bottom-4 right-4
            w-[78.62vw] h-[67.63vw]
            min-w-[353.81px] min-h-[304.28px]
            /* タブレット小（sm: 640px以上） - 68.8vw × 59.17vw */
            sm:w-[68.8vw] sm:h-[59.17vw]
            /* タブレット大（md: 768px以上） - 62.9vw × 54.1vw */
            md:bottom-8 md:right-8
            md:w-[62.9vw] md:h-[54.1vw]
            /* デスクトップ（lg: 1024px以上） - 55.03vw × 47.33vw */
            lg:bottom-12 lg:right-12
            lg:w-[55.03vw] lg:h-[47.33vw]
            /* 大型デスクトップ（xl: 1280px以上） - 49.14vw × 42.26vw */
            xl:w-[49.14vw] xl:h-[42.26vw]
            /* 最大サイズ制限 - 982.8px × 845.21px */
            max-w-[982.8px] max-h-[845.21px]
          `}
        >
          {/* スライドショー - 横スライド */}
          <AnimatePresence>
            {images.length > 0 && (
              <motion.div
                key={currentIndex}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentIndex].path}
                  alt={images[currentIndex].alt}
                  fill
                  className="object-cover"
                  priority={currentIndex === 0}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ボタン - 画面下側中央に配置 */}
      {/* <div className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex flex-col sm:flex-row gap-4 justify-center items-center transition-opacity duration-1000 ${opacityClass}`}>
        <a
          href="#entry"
          className="bg-white text-black px-8 py-4 rounded-md font-bold hover:bg-gray-200 transition-colors"
        >
          ENTRY
        </a>
        <a
          href="#about"
          className="border-2 border-white text-white px-8 py-4 rounded-md font-bold hover:bg-white/10 transition-colors"
        >
          詳しく見る
        </a>
      </div> */}

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

