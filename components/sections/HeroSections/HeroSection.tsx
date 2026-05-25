"use client";

import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import HeroBackgroundVideo from "./HeroBackgroundVideo";
import HeroSlideshow from "./HeroSlideshow";
import TopBackgroundSlideshow from "./TopBackgroundSlideshow";
import Image from "next/image";

interface HeroSectionProps {
  useTopBackgroundSlideshow?: boolean; // Top背景用スライドショーを使用するか
}

export default function HeroSection({ 
  useTopBackgroundSlideshow = false 
}: HeroSectionProps) {
  // カスタムフックを使用してフェードイン関連のロジックを取得
  const {
    opacityClass,
  } = useHeroAnimation();

  return (
    <section className="relative h-dvh w-full py-20 perspective-normal">
      {/* 3. Topページ要素 - 奥行きのある斜めに見える要素 */}
      <div className="absolute inset-0 w-[90%] h-dvh z-10 overflow-hidden rounded-lg perspective-3d-tilt">
        {/* 1. 背景スライドショー - 最背面 */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            <TopBackgroundSlideshow 
              containerClassName="absolute inset-0 w-full h-full opacity-25"
              speed={5}
            />
        </div>
      </div>

      {/* 2. 背景画像（3D背景が透けるよう透明度を下げる） */}
      <div className="absolute inset-0 h-dvh w-full bg-linear-to-b from-black/40 to-black/80">
        <Image 
          src="/images/bg_Image_skeleton.png" 
          alt="Top背景画像" 
          fill
          className="object-cover opacity-35"
        />
      </div>


      
      {/* 4. コンテンツ - 最前面 */}
        <div className={`relative z-30 w-full h-dvh ${opacityClass}`}>
            <div className="absolute top-0 left-0 px-10">
                <h1 className="font-heading text-5xl md:text-6xl lg:text-9xl mb-6 italic text-white">
                    <span className="">
                      Be a
                    </span> 
                    <br />
                    <span className="text-primary text-blue-900">
                      Soccer
                    </span>
                    <br />
                    <span className="text-white">
                      Company
                    </span>
                </h1>
            </div>
            <div className="absolute bottom-35 right-0 px-10 ">
                <h2 className="font-heading text-right text-3xl md:text-4xl lg:text-6xl text-white ">
                    サッカーで
                    <br />
                    「繋がる」 「広がる」
                    <br />
                    <br />
                    そして日本一のサッカーカンパニーへ
                    <br />
                    一緒に目指しませんか？
                </h2>
            </div>
        </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
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

