"use client";

import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import HeroBackgroundVideo from "./HeroBackgroundVideo";
import HeroSlideshow from "./HeroSlideshow";

export default function HeroSection() {
  // カスタムフックを使用してフェードイン関連のロジックを取得
  const {
    opacityClass,
  } = useHeroAnimation();

  return (
    <section className="relative h-screen flex items-start justify-start px-5 py-30 overflow-hidden">
      {/* 背景動画 */}
      <HeroBackgroundVideo />
      
      {/* 左側コンテンツ */}
      <div className={`relative z-20 text-left text-gray-800 px-4 transition-opacity duration-2000 delay-1000 ${opacityClass}`}>
        <h1 className="font-heading text-5xl md:text-6xl lg:text-9xl mb-6 tracking-tight italic">
          Be a 
          <br />
          <span className="text-primary text-blue-900">Soccer</span>
          <br />
          Company
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
      <div className="absolute bottom-0 right-0 z-10">
        <HeroSlideshow />
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

