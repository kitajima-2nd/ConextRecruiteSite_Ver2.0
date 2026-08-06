export type BusinessImages = {
  top: string;
  bottomRight: string;
  bottomLeft: string;
};

export type BusinessNode = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  images: BusinessImages;
  imageAlt: string;
};

export type BusinessEdge = {
  from: string;
  to: string;
  label: string;
};

export const cycleIntro =
  "サッカーで「繋がる」「広がる」。3つの事業が循環し、ひとつのカンパニーとして完結";

export const businessNodes: BusinessNode[] = [
  {
    id: "event",
    number: "01",
    eyebrow: "Event",
    title: "サッカーイベント事業",
    description:
      "フットサル大会や著名人 MeetUP など、サッカーを軸にした場づくりで出会いと笑顔を生み出します。",
    tags: ["SPORTS × EVENT", "Meet UP", "LiGA DiveRTida"],
    images: {
      top: "/images/background_image_top.jpg",
      bottomRight: "/images/member_image.jpg",
      bottomLeft: "/images/slide_image.jpg",
    },
    imageAlt: "サッカーイベント・大会の様子",
  },
  {
    id: "recruit",
    number: "02",
    eyebrow: "Recruit",
    title: "リクルート事業",
    description:
      "就活フットサルやスポーツ HR など、サッカー起点で採用・キャリアのきっかけをつくります。",
    tags: ["SPORTS × HR", "就活フットサル", "キャリア支援"],
    images: {
      top: "/images/Recruitment_image.jpg",
      bottomRight: "/images/slide_image2.jpg",
      bottomLeft: "/images/sample/sample1.JPG",
    },
    imageAlt: "就活フットサル・リクルートの様子",
  },
  {
    id: "sales",
    number: "03",
    eyebrow: "Sales",
    title: "営業事業",
    description:
      "インサイド／フィールドセールスを通じ、営業力を磨きながら事業と人を次のステージへ進めます。",
    tags: ["Inside Sales", "Field Sales", "人材育成"],
    images: {
      top: "/images/callsenter_image.jpg",
      bottomRight: "/images/Representative_director.jpg",
      bottomLeft: "/images/sample/sample2.JPG",
    },
    imageAlt: "営業・コールセンターの様子",
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
    label: "サッカー人の力が現場へ",
  },
  {
    from: "sales",
    to: "event",
    label: "成果が次の場づくりへ",
  },
];
