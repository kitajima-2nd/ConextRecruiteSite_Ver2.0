"use client";

import Image from "next/image";
import { classNameProps } from "@/library/GlobalDateConfig";

export default function VoiceSection({ className = "" } : classNameProps) {
  return (
    <section className={`w-[100dvw] h-[100dvh] py-12 md:py-20 bg-gradient-to-b bg-white ${className}`}>
      <div className="container mx-auto px-4">
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">働いている人の声</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* 左側：画像 */}
              <div className="w-full md:w-1/3 shrink-0">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/slide_image.jpg"
                    alt="働いている人の声イメージ"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* 右側：テキストボックス */}
              <div className="flex-1 bg-white rounded-lg p-8 shadow-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  サッカーを通じて築いた人脈やネットワークを、事業や仕事に活用できる環境があります。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  サッカーやスポーツを通して出来た友達や人脈。その繋がりをさらに深め、仕事として広げていく。ただ広げるだけではなく『個々の力を最大限』にして広めていきます。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  そしてその先にある「日本一のサッカーカンパニー」を目指し、仲間と共にアイディアを形にしていきます。自分も、自分の周りも楽しませながら仕事ができる環境です。
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

