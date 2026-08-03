"use client";

const PHRASES = [
  "Be a Soccer Company",
  "繋がる、広がる",
  "日本一のサッカーカンパニーへ",
  "サッカーの経験を、仕事の力に",
  "Jリーグ浦和レッズ オフィシャルパートナー",
];

export default function SiteMarquee() {
  const line = PHRASES.join("  ·  ");

  return (
    <div className="site-marquee" aria-hidden>
      <div className="site-marquee__track">
        <span>{line}</span>
        <span>{line}</span>
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  );
}
