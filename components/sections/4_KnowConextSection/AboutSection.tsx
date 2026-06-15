"use client";

import Image from "next/image";
import { classNameProps } from "@/library/GlobalDateConfig";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeading from "@/components/layout/SectionHeading";

export default function AboutSection({ className = "" }: classNameProps) {
  return (
    <SectionShell
      id="project"
      variant="muted"
      animated={false}
      className={`flex min-h-dvh items-center ${className}`}
    >
      <SectionHeading
        align="left"
        eyebrow="About"
        title="事業内容"
        description="サッカーイベントの企画・運営、営業（人材育成）を中心とした事業を展開しています。"
        className="mb-10 max-w-2xl"
      />

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg lg:aspect-square">
          <Image
            src="/images/member_image.jpg"
            alt="事業内容イメージ"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm md:p-10">
          <div className="space-y-5 text-sm leading-relaxed text-neutral-700 md:text-base">
            <p>
              サッカーを通じて培われた経験やスキルを、ビジネスの現場でも存分に活かし、一人ひとりがその可能性を広げていける社会を目指しています。
            </p>
            <p>
              営業を通して培う力は、ビジネスにおいて根幹にあたるもの。その力が自分の糧となり今後のキャリアだけでなく会社をも切り開く力に繋がります。
            </p>
            <p>
              私たちは、その最強の武器を手に入れる環境や活かせる環境を用意し、仲間とともに次のステージを目指します。
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
