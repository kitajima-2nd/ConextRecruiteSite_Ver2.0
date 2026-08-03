export type NewsItem = {
  id: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  href?: string;
};

/**
 * お知らせデータ。配列に要素を追加するだけで一覧に反映される。
 */
export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    date: "2026.07.28",
    category: "Release",
    title: "リクルートサイトをリニューアルしました",
    summary:
      "会社の価値観や働く人の声がより伝わる構成にアップデートしました。ぜひご覧ください。",
  },
  {
    id: "news-2",
    date: "2026.06.15",
    category: "Recruit",
    title: "採用強化のお知らせ",
    summary:
      "事業拡大に伴い、正社員・インターンの採用を強化しています。本気で日本一を目指す仲間を募集します。",
  },
  {
    id: "news-3",
    date: "2026.05.01",
    category: "Company",
    title: "サッカーイベント事業の取り組みを拡大",
    summary:
      "企画・運営と人材育成を軸に、サッカーを通じたキャリア創出の取り組みをさらに広げていきます。",
  },
];
