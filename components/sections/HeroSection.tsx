"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

export default function HeroSection() {
  // カスタムフックを使用してフェードイン関連のロジックを取得
  const {
    opacityClass,
  } = useHeroAnimation();

  return (
    <section className="relative h-screen flex items-start justify-start px-5 py-30 overflow-hidden bg-black">
      {/* 背景画像 - 複数の画像を重ねて表示 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-20" />
        
        {/* member_image.jpg - 背面の画像 */}
        <motion.div 
          initial={{ x:"-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full z-0 "
          >
          <Image
            src="/images/member_image.jpg"
            alt="メンバー画像"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Toppage_Image.png - 薄くした前面画像 */}
        <motion.div
          className="absolute inset-0 w-full h-full z-10 opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.5 , delay: 0.5}}
          >
          <Image
            src="/images/TopPage_Image.png"
            alt="背景画像"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* メインコンテンツ */}
      <div className={`relative z-20 text-left text-white px-4 transition-opacity duration-2000 delay-1000 ${opacityClass}`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Be a <span className="text-primary text-blue-900">Soccer</span> Company
        </h1>
        <div className="items-center justify-center space-between">
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            サッカーで「繋がる」「広がる」
            <br />
            そして日本一のサッカーカンパニーへ
            <br />
            一緒に目指しませんか？
          </p>
        </div>
      </div>

      {/* ボタン - 画面下側中央に配置 */}
      <div className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex flex-col sm:flex-row gap-4 justify-center items-center transition-opacity duration-1000 ${opacityClass}`}>
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
      </div>

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

