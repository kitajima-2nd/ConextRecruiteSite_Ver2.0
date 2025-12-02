"use client";

import Image from "next/image";
import { motion } from "motion/react";
import AnimatedSection from "@/components/AnimatedSection";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

/**
 * コンテンツ部分を別コンポーネントに分離
 * useSectionAnimationはAnimatedSectionの子要素内で呼び出す必要がある
 */
function ConceptContent() {
  const { isVisible } = useSectionAnimation();

  return (
    <>
      {/* 背景オーバーレイ */}
      <div className="bg-black/50 w-dvw h-dvh absolute z-20 inset-0">

      {/* 背景画像 */}
      <motion.div
        initial={{ x: "100%" }}
        animate={isVisible ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute z-0 w-dvw h-dvh"
      >
        <Image
          src="/images/asanuma_bk.png"
          alt="浅沼背景画像"
          fill
          className="object-cover object-right"
          sizes="100vw"
          priority
        />
      </motion.div>
      
      {/* 浅沼オンリー画像 */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={isVisible ? { x: 0 } : { x: "-100%" }}
        transition={{ duration: 0.2, delay: 0.3, ease: "easeOut" }}
        className="absolute z-10 w-dvw h-dvh"
      >
        <Image
          src="/images/asanuma_only.png"
          alt="浅沼オンリー画像"
          fill
          className="object-cover overflow-visible opacity-70 translate-x-[65%] sm:translate-x-[30%] md:translate-x-[20%] lg:translate-x-[0%]"
          sizes="100vw"
          priority
        />
      </motion.div>
      
      {/* コンテンツ */}
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: "100%" }}
        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        className="absolute px-8 py-8 bottom-10 h-[50%] w-[90%] z-30"
      >
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h2 className="text-xl font-bold mb-8 text-gray-200">
              サッカー人のポテンシャルを<br />最大限に解き放つ
            </h2>
            <div className="space-y-6 text-gray-300 p-4 rounded-lg  text-sm ">
              <p>
                サッカーを通じて培われた経験やスキルを、ビジネスの現場でも存分に活かし、
                <br />
                一人ひとりがその可能性を広げていける社会を目指しています。
                <br />
                サッカー人材の“その先”を見据えた セカンドキャリアの創出
                <br />
                営業力や実務能力を磨き、 企業を支える人材への成長を支援
                <br />
                サッカーを通じて築いた<span className="font-bold text-base">人脈</span>や
                <span className="font-bold text-base">ネットワーク</span>を、事業や仕事に活用します。
              </p>
              <p className="font-bold text-gray-300">
                代表取締役 小田原 敬介
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      </div>
    </>
  );
}

export default function ConceptSection() {
  return (
    <AnimatedSection className="py-20 bg-white relative h-screen w-full overflow-hidden">
      <ConceptContent />
    </AnimatedSection>
  );
}

