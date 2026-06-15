"use client";

import SectionShell from "@/components/layout/SectionShell";
import SectionHeading from "@/components/layout/SectionHeading";
import FeatureCard from "@/components/layout/FeatureCard";

const breakItems = [
  {
    id: "member",
    badge: "M",
    title: (
      <>
        型破りな
        <br />
        社員たち
      </>
    ),
    description:
      "個性と強みを活かし、常識にとらわれない発想で新しい価値を生み出すメンバーが活躍しています。",
    href: "#member-detail",
  },
  {
    id: "special",
    badge: "S",
    title: (
      <>
        SHOWTIME
        <br />
        SHOW
      </>
    ),
    description:
      "社内イベントや特別企画を通じて、チームの一体感と創造性を高めています。",
    href: "#special-detail",
    linkLabel: "特設ページで投票する",
  },
];

export default function BreakSection() {
  return (
    <SectionShell variant="light">
      <SectionHeading
        eyebrow="Break"
        title={
          <>
            Conext Marktingで<span className="text-neutral-400">破る</span>
          </>
        }
        description="さあ、ここからぶっ飛んでみようぜ。"
        className="mb-14"
      />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {breakItems.map((item) => (
          <FeatureCard key={item.id} {...item} />
        ))}
      </div>
    </SectionShell>
  );
}
