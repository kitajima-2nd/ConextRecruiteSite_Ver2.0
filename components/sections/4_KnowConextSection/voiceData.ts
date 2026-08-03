export type VoiceItem = {
  id: string;
  name: string;
  department: string;
  quote: string[];
  imageSrc: string;
  imageAlt: string;
};

/**
 * 従業員の声データ。
 * 追加・差し替えは配列に要素を足す／各フィールドを編集するだけで反映される。
 * Voice UI は「前面3枚帯＋背面1枚」のため、最低4件を推奨（現行は6件）。
 */
export const voiceItems: VoiceItem[] = [
  {
    id: "voice-1",
    name: "田中 翔",
    department: "営業部",
    quote: [
      "サッカーを通じて築いた人脈やネットワークを、事業や仕事に活用できる環境があります。",
      "サッカーやスポーツを通して出来た友達や人脈。その繋がりをさらに深め、仕事として広げていく。ただ広げるだけではなく「個々の力を最大限」にして広めていきます。",
      "そしてその先にある「日本一のサッカーカンパニー」を目指し、仲間と共にアイディアを形にしていきます。自分も、自分の周りも楽しませながら仕事ができる環境です。",
    ],
    imageSrc: "/images/member_image.jpg",
    imageAlt: "営業部 田中 翔",
  },
  {
    id: "voice-2",
    name: "佐藤 美咲",
    department: "マーケティング部",
    quote: [
      "プレーで培ったチームワークが、企画の進め方にも生きています。",
      "現場の声を拾い、数字で検証できる施策に落とし込む日々が刺激的です。仲間とゴールを共有できるのがこの会社の魅力です。",
    ],
    imageSrc: "/images/slide_image.jpg",
    imageAlt: "マーケティング部 佐藤 美咲",
  },
  {
    id: "voice-3",
    name: "鈴木 大輔",
    department: "事業企画部",
    quote: [
      "新しい挑戦を後押ししてくれる文化があります。",
      "未経験の領域でも、周囲のサポートがありながら自分の裁量で進められるのが嬉しいです。",
    ],
    imageSrc: "/images/slide_image2.jpg",
    imageAlt: "事業企画部 鈴木 大輔",
  },
  {
    id: "voice-4",
    name: "高橋 優",
    department: "カスタマーサポート",
    quote: [
      "お客様との対話を大切にしながら、チーム全体で品質を高めています。",
      "サッカーで学んだ「伝える力」が、そのまま仕事の強みになっています。",
    ],
    imageSrc: "/images/callsenter_image.jpg",
    imageAlt: "カスタマーサポート 高橋 優",
  },
  {
    id: "voice-5",
    name: "伊藤 直樹",
    department: "採用・人事",
    quote: [
      "同じ価値観を持つ仲間と働きたい、という想いが採用の軸です。",
      "候補者一人ひとりのストーリーに向き合い、会社の魅力を誠実に伝えることを心がけています。",
    ],
    imageSrc: "/images/Recruitment_image.jpg",
    imageAlt: "採用・人事 伊藤 直樹",
  },
  {
    id: "voice-6",
    name: "渡辺 恵",
    department: "経営管理部",
    quote: [
      "数字と現場の両方を見ながら、事業を支える役割にやりがいを感じています。",
      "成長スピードが速く、自分の提案がすぐ形になる環境です。",
    ],
    imageSrc: "/images/Representative_director.jpg",
    imageAlt: "経営管理部 渡辺 恵",
  },
];
