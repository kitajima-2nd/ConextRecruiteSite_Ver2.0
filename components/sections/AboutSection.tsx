"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutSection() {
  return (
    <AnimatedSection id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conext Marktingを<span className="text-gray-400">知る</span>
          </h2>
          <p className="text-xl text-gray-600">
            スポーツで繋がる、ひろがる。その一歩目を踏み出してくれ。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* について */}
          <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                A
              </div>
              <h3 className="text-2xl font-bold mb-4">
                営業力から始まり生まれる
                <br />
                会社を支える人財
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              営業を通して培う力は、ビジネスにおいて根幹にあたるもの。その力が自分の糧となり今後のキャリアだけでなく会社をも切り開く力に繋がります。私たちは、その最強の武器を手に入れる環境や活かせる環境を用意し、仲間とともに次のステージを目指します。
            </p>
            <a
              href="#about-detail"
              className="text-black font-bold hover:underline inline-flex items-center"
            >
              詳しく見る
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* こだわり */}
          <div id="stance" className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                S
              </div>
              <h3 className="text-2xl font-bold mb-4">
                サッカーの広がり繋がりを
                <br />
                最大限に
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              サッカーやスポーツを通して出来た友達や人脈。その繋がりをさらに深め、仕事として広げていく。ただ広げるだけではなく『個々の力を最大限』にして広めていきます。そしてその先にある「日本一のサッカーカンパニー」を目指し、仲間と共にアイディアを形にしていきます。
            </p>
            <a
              href="#stance-detail"
              className="text-black font-bold hover:underline inline-flex items-center"
            >
              詳しく見る
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* 数字でみる */}
          <div id="data" className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                D
              </div>
              <h3 className="text-2xl font-bold mb-4">
                ここにtestをいれます
                <br />
                ここにtestをいれます
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              ここにtestをいれます
            </p>
            <a
              href="#data-detail"
              className="text-black font-bold hover:underline inline-flex items-center"
            >
              詳しく見る
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

