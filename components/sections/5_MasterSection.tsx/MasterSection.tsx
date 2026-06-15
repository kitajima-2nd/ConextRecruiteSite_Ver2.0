"use client";

import SectionShell from "@/components/layout/SectionShell";
import SectionHeading from "@/components/layout/SectionHeading";
import FeatureCard from "@/components/layout/FeatureCard";

const masterItems = [
  {
    id: "mind",
    badge: "M",
    title: (
      <>
        仕入れの極意
        <br />
        最適な商品選び
      </>
    ),
    description:
      "市場の動きを読み、サッカー業界に必要な価値を見極める力を磨いていきます。",
    href: "#mind-detail",
  },
  {
    id: "item",
    badge: "I",
    title: (
      <>
        戦略
        <br />
        勝てる仕組みづくり
      </>
    ),
    description:
      "現場の経験とデータを掛け合わせ、事業を前に進める戦略を描いていきます。",
    href: "#item-detail",
  },
  {
    id: "history",
    badge: "H",
    title: (
      <>
        軌跡
        <br />
        積み重ねてきた挑戦
      </>
    ),
    description:
      "これまでの歩みと学びを振り返りながら、次のステージへ向かう原動力にしています。",
    href: "#history-detail",
  },
];

export default function MasterSection() {
  return (
    <SectionShell variant="muted">
      <SectionHeading
        eyebrow="Master"
        title={
          <>
            Conext Marktingを<span className="text-neutral-400">極める</span>
          </>
        }
        description="面白い仕事は、熱中の先にある。"
        className="mb-14"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {masterItems.map((item) => (
          <FeatureCard key={item.id} {...item} />
        ))}
      </div>
    </SectionShell>
  );
}
