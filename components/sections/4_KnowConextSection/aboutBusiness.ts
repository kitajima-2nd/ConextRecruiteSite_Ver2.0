export type BusinessNode = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
};

export type BusinessEdge = {
  from: string;
  to: string;
  label: string;
};

export const cycleIntro =
  "サッカーで「繋がる」「広がる」。3つの事業が循環し、ひとつのカンパニーとして完結しています。";

export const businessNodes: BusinessNode[] = [
  {
    id: "event",
    number: "01",
    eyebrow: "Event",
    title: "サッカーイベント事業",
    description:
      "フットサル大会や著名人 MeetUP など、サッカーを軸にした場づくりで出会いと笑顔を生み出します。",
    tags: ["SPORTS × EVENT", "Meet UP", "LiGA DiveRTida"],
  },
  {
    id: "recruit",
    number: "02",
    eyebrow: "Recruit",
    title: "サッカーを通じたリクルート事業",
    description:
      "就活フットサルやスポーツ HR など、サッカー起点で採用・キャリアのきっかけをつくります。",
    tags: ["SPORTS × HR", "就活フットサル", "キャリア支援"],
  },
  {
    id: "sales",
    number: "03",
    eyebrow: "Sales",
    title: "営業事業",
    description:
      "インサイド／フィールドセールスを通じ、営業力を磨きながら事業と人を次のステージへ進めます。",
    tags: ["Inside Sales", "Field Sales", "人材育成"],
  },
];

export const businessEdges: BusinessEdge[] = [
  {
    from: "event",
    to: "recruit",
    label: "出会いがキャリアへ",
  },
  {
    from: "recruit",
    to: "sales",
    label: "人の力が現場へ",
  },
  {
    from: "sales",
    to: "event",
    label: "成果が次の場づくりへ",
  },
];
