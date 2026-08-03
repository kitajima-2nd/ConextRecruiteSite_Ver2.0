"use client";

import SectionShell from "@/components/layout/SectionShell";
import SectionHeading from "@/components/layout/SectionHeading";
import { newsItems } from "@/components/sections/5_NewsSection/newsData";

export default function NewsSection() {
  return (
    <SectionShell id="news" variant="muted" animated={false}>
      <SectionHeading
        align="left"
        eyebrow="News"
        title="お知らせ"
        description="Conext Marktingからの最新情報をお届けします。"
        className="mb-12 max-w-2xl"
      />

      <ul className="m-0 list-none border-t border-brand-blue-soft p-0">
        {newsItems.map((item) => {
          const content = (
            <>
              <time
                dateTime={item.date.replace(/\./g, "-")}
                className="text-xs tracking-[0.16em] text-neutral-500"
              >
                {item.date}
              </time>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue-mid">
                {item.category}
              </span>
              <div className="min-w-0">
                <p className="text-base font-medium leading-snug text-neutral-900 md:text-lg">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {item.summary}
                </p>
              </div>
            </>
          );

          return (
            <li key={item.id}>
              {item.href ? (
                <a href={item.href} className="news-row no-underline">
                  {content}
                </a>
              ) : (
                <div className="news-row" role="article" aria-label={item.title}>
                  {content}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </SectionShell>
  );
}
