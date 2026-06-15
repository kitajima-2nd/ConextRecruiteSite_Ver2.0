"use client";

import Image from "next/image";
import { classNameProps } from "@/library/GlobalDateConfig";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeading from "@/components/layout/SectionHeading";

export default function VoiceSection({ className = "" }: classNameProps) {
  return (
    <SectionShell
      id="voice"
      variant="light"
      animated={false}
      className={`flex min-h-dvh items-center ${className}`}
    >
      <SectionHeading
        align="left"
        eyebrow="Voice"
        title="働いている人の声"
        description="現場で活躍するメンバーのリアルな想いをご紹介します。"
        className="mb-10 max-w-2xl"
      />

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 md:p-10">
          <div className="space-y-5 text-sm leading-relaxed text-neutral-700 md:text-base">
            <p>
              サッカーを通じて築いた人脈やネットワークを、事業や仕事に活用できる環境があります。
            </p>
            <p>
              サッカーやスポーツを通して出来た友達や人脈。その繋がりをさらに深め、仕事として広げていく。ただ広げるだけではなく「個々の力を最大限」にして広めていきます。
            </p>
            <p>
              そしてその先にある「日本一のサッカーカンパニー」を目指し、仲間と共にアイディアを形にしていきます。自分も、自分の周りも楽しませながら仕事ができる環境です。
            </p>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg lg:aspect-square">
          <Image
            src="/images/slide_image.jpg"
            alt="働いている人の声イメージ"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </div>
    </SectionShell>
  );
}
