"use client";

import Image from "next/image";
import { motion } from "motion/react";
import AnimatedSection from "@/components/AnimatedSection";

export default function ConceptSection() {
  return (
    <AnimatedSection className="py-20 bg-white relative min-h-screen">
      {/* 背景画像の設定 */}
        {/* 浅沼背景画像 */}
        <motion.div
          initial={{ x:"100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <Image
            src="/images/asanuma_bk.png"
            alt="浅沼背景画像"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        {/* 浅沼オンリー画像 */}
        <motion.div
          initial={{ x:"-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2 , delay: 0.3 }}
          className="absolute inset-0 w-full h-full z-10"
        >
          <Image
            src="/images/asanuma_only.png"
            alt="浅沼オンリー画像"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      <div className="absolute z-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            サッカーで「繋がる」「広がる」
            <br />
            そして日本一のサッカーカンパニーへ
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              私たちはこの目標を掲げ、スポーツ人材を中心として「サッカーイベントの企画・運営」、就活やセカンドキャリア、ライフプランなど様々な状況に合わせて人材育成を行う「営業」の事業を行っています。
            </p>
            <p className="mt-8">
              株式会社Conext Marktingでは、スポーツ人材のその先へ向け、事業展開をしております。
              <br />
              学業や仕事だけでなく、趣味や部活などの経験を活かし、仕事として楽しく両立することが出来る。
              <br />
              そして会社・事業・人の全てが成長していき、社会に貢献する。
              <br />
              そんな会社を目指しています。
            </p>
            <p className="mt-8 font-bold">
              経験してきたからこそ分かる顧客ニーズや顧客心理、そこから生まれるアイディアやイベント。
              <br />
              それを実現出来るのが株式会社Conext Marktingです。
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

