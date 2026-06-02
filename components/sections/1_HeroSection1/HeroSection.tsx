"use client";

import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import TopBackgroundSlideshow from "./TopBackgroundSlideshow";
import Image from "next/image";

export default function HeroSection() {
  const { opacityClass } = useHeroAnimation();

  return (
    <section className="relative h-dvh w-full py-20 perspective-normal">
      {/* 螺旋階段風スライドショー（Three.js） */}
      <div className="absolute inset-0 w-full h-dvh z-10 overflow-hidden">
        <TopBackgroundSlideshow
          containerClassName="inset-0 w-full h-full"
          rotationSpeed={0.002}
        />
      </div>

      {/* 背景画像（3D背景が透けるよう透明度を下げる） */}
      {/* <div className="absolute inset-0 h-dvh w-full bg-linear-to-b">
        <Image
          src="/images/bg_Image_skeleton.png"
          alt="Top背景画像"
          fill
          className="object-cover opacity-35"
        />
      </div> */}

      {/* コンテンツ - 最前面 */}
      {/* <div className={`relative z-30 w-full h-dvh ${opacityClass}`}>
        <div className="absolute top-0 left-0 px-10">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-9xl mb-6 italic text-white">
            <span>Be a</span>
            <br />
            <span className="text-primary text-blue-900">Soccer</span>
            <br />
            <span className="text-white">Company</span>
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
      </div> */}

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
