"use client";

import { companyData } from "@/library/GlobalDateConfig";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeading from "@/components/layout/SectionHeading";

export default function RecruitSection() {
  return (
    <SectionShell id="recruit" variant="dark">
      <SectionHeading
        tone="light"
        eyebrow="Recruit"
        title={
          <>
            RECRUIT
            <br />
            <span className="text-neutral-400">採用情報</span>
          </>
        }
        className="mb-12"
      />

      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-8 text-xl leading-relaxed text-white md:text-2xl">
          一緒にサッカーで
          <br />
          「日本一」を目指しませんか？
        </p>

        <div className="mb-12 space-y-5 text-left text-sm leading-relaxed text-neutral-300 md:text-base">
          <p>
            株式会社Conext Marktingは事業拡大に向けて採用強化予定です。「サッカーで日本一のカンパニー」この目標は決して簡単ではなく、楽しいことばかりではありません。
          </p>
          <p>
            時には、乗り越えなきゃいけない壁も自分との勝負の場面ももちろんあります。その為個々の力を強化し、いずれマネジメント職や新規事業を先導するメンバーを育てていく予定です。
          </p>
          <p className="font-bold text-white">
            本気で一緒に戦ってくれる人、本気で「日本一」を一緒に目指してくれる人、サッカーへの熱意は誰にも負けない方、そんなメンバーと一緒に働きたいと思っています。経験などは一切気にしてません。是非ご応募お待ちしております。
          </p>
        </div>

        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            id="entry"
            href={companyData.recruitment?.email ? `mailto:${companyData.recruitment.email}` : "#"}
            className="inline-flex min-w-44 items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-bold text-neutral-950 transition hover:bg-sky-100"
          >
            ENTRY
          </a>
          <a
            href="#"
            className="inline-flex min-w-44 items-center justify-center rounded-full border border-white/30 px-10 py-4 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Wantedly
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-4xl">
        <h3 className="mb-8 text-center text-xl font-bold text-white md:text-2xl">
          採用情報を見る
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h4 className="mb-4 text-lg font-bold text-white">正社員</h4>
            <p className="mb-5 text-sm leading-relaxed text-neutral-300 md:text-base">
              事業拡大に向けて採用強化予定です。サッカー業界で日本一を目指す仲間を募集しています。
            </p>
            <a href="#" className="text-sm font-bold text-sky-300 hover:text-sky-200">
              詳しく見る →
            </a>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h4 className="mb-4 text-lg font-bold text-white">アルバイト・インターン</h4>
            <p className="mb-5 text-sm leading-relaxed text-neutral-300 md:text-base">
              まずは現場を知り、自分の強みを活かせるかを確かめたい方も歓迎しています。
            </p>
            <a href="#" className="text-sm font-bold text-sky-300 hover:text-sky-200">
              詳しく見る →
            </a>
          </article>
        </div>
      </div>
    </SectionShell>
  );
}
