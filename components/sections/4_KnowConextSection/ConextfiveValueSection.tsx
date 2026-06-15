"use client";

import { classNameProps } from "@/library/GlobalDateConfig";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeading from "@/components/layout/SectionHeading";

const values = [
  {
    title: "Challenge",
    label: "挑戦",
    description: "新しいことに踏み出す勇気を大切にし、成長の機会を自ら創り出します。",
  },
  {
    title: "Connection",
    label: "繋がり",
    description: "サッカーを通じて築いた人脈を、仕事と事業の力に変えていきます。",
  },
  {
    title: "Growth",
    label: "成長",
    description: "営業力や実務力を磨き、個人と組織の双方が高め合う環境を目指します。",
  },
  {
    title: "Team",
    label: "チーム",
    description: "一人ひとりの強みを活かし、日本一を目指す仲間として協力します。",
  },
  {
    title: "Fun",
    label: "楽しさ",
    description: "仕事もサッカーも、前向きな熱量と楽しさを忘れずに取り組みます。",
  },
];

export default function ConextfiveValueSection({ className = "" }: classNameProps) {
  return (
    <SectionShell
      id="service"
      variant="light"
      animated={false}
      className={`flex min-h-dvh items-center ${className}`}
      innerClassName="w-full"
    >
      <SectionHeading
        align="left"
        eyebrow="Conext Five Values"
        title={
          <>
            大切にしている
            <span className="text-sky-500">5つの価値観</span>
          </>
        }
        description="サッカーで培った強みを、ビジネスの現場でも活かすための行動指針です。"
        className="mb-10 max-w-2xl"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => (
          <article
            key={value.title}
            className={`rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm ${
              index === 0 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-600">
              {value.title}
            </p>
            <h3 className="mb-3 text-xl font-bold text-neutral-900">{value.label}</h3>
            <p className="text-sm leading-relaxed text-neutral-600">{value.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
