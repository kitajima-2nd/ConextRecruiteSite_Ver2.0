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
      {/* 背景画像 */}
      <motion.div
        initial={{ x: "100%" }}
        animate={isVisible ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute z-0 w-full h-full"
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
        transition={{ duration: 0.2, delay: 0.5, ease: "easeOut" }}
        className="absolute inset-0 z-10 w-full h-full"
      >
        <Image
          src="/images/asanuma_only.png"
          alt="浅沼オンリー画像"
          fill
          className="object-cover overflow-visible translate-x-[65%] sm:translate-x-[30%] md:translate-x-[20%] lg:translate-x-[0%]"
          sizes="100vw"
          priority
        />
      </motion.div>
      
      {/* コンテンツ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
        className="absolute bottom-0 left-0 z-20 w-full"
      >
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">
              サッカーで「繋がる」「広がる」
              <br />
              そして日本一のサッカーカンパニーへ
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                私たちはこの目標を掲げ、スポーツ人材を中心として「サッカーイベントの企画・運営」、就活やセカンドキャリア、ライフプランなど様々な状況に合わせて人材育成を行う「営業」の事業を行っています。
              </p>
              <p>
                株式会社Conext Marktingでは、スポーツ人材のその先へ向け、事業展開をしております。
                <br />
                学業や仕事だけでなく、趣味や部活などの経験を活かし、仕事として楽しく両立することが出来る。
                <br />
                そして会社・事業・人の全てが成長していき、社会に貢献する。
                <br />
                そんな会社を目指しています。
              </p>
              <p className="font-bold">
                経験してきたからこそ分かる顧客ニーズや顧客心理、そこから生まれるアイディアやイベント。
                <br />
                それを実現出来るのが株式会社Conext Marktingです。
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default function ConceptSection() {
  return (
    <AnimatedSection className="snap-section py-20 bg-white relative min-h-screen ">
      <ConceptContent />
    </AnimatedSection>
  );
}

