"use client";

import Image from "next/image";
import { classNameProps } from "@/library/GlobalDateConfig";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutSection({ className = "" }: classNameProps) {
  return (
    <AnimatedSection className={`w-[100dvw] h-[100dvh] py-12 md:py-20 bg-gradient-to-b bg-white ${className}`}>
      <div className="container mx-auto px-4">
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">事業内容</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* 左側：画像 */}
              <div className="w-full md:w-1/3 shrink-0">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/member_image.jpg"
                    alt="事業内容イメージ"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* 右側：テキストボックス */}
              <div className="flex-1 bg-white rounded-lg p-8 shadow-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  サッカーイベントの企画・運営、営業（人材育成）を中心とした事業を展開しています。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  サッカーを通じて培われた経験やスキルを、ビジネスの現場でも存分に活かし、一人ひとりがその可能性を広げていける社会を目指しています。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  営業を通して培う力は、ビジネスにおいて根幹にあたるもの。その力が自分の糧となり今後のキャリアだけでなく会社をも切り開く力に繋がります。私たちは、その最強の武器を手に入れる環境や活かせる環境を用意し、仲間とともに次のステージを目指します。
                </p>
              </div>
            </div>
          </div>
      </div>
    </AnimatedSection>
  );
}
