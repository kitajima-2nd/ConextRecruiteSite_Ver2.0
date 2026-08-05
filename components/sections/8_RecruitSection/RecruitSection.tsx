"use client";

import Reveal from "@/components/motion/Reveal";
import { companyData } from "@/library/GlobalDateConfig";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeading from "@/components/layout/SectionHeading";

export default function RecruitSection() {
  return (
    <SectionShell id="recruit" variant="light" animated={false}>
      <SectionHeading
        align="left"
        eyebrow="Recruit"
        title={
          <>
            Recruit
            <br />
            <span className="text-neutral-500">採用情報</span>
          </>
        }
        size="display"
        className="mb-12 max-w-2xl"
      />

      <div className="max-w-3xl">
        <Reveal from="up">
          <p className="mb-8 font-heading text-3xl leading-[1.1] tracking-tight text-brand-blue md:text-4xl lg:text-5xl">
            一緒にサッカーで
            <br />
            「日本一」を目指しませんか？
          </p>
        </Reveal>

        <Reveal from="up" delay={0.08}>
          <div className="mb-12 space-y-5 text-sm leading-relaxed text-neutral-600 md:text-base">
            <p>
              株式会社Conext Marktingは事業拡大に向けて採用強化予定です。「サッカーで日本一のカンパニー」この目標は決して簡単ではなく、楽しいことばかりではありません。
            </p>
            <p>
              時には、乗り越えなきゃいけない壁も自分との勝負の場面ももちろんあります。その為個々の力を強化し、いずれマネジメント職や新規事業を先導するメンバーを育てていく予定です。
            </p>
            <p className="font-medium text-neutral-900">
              本気で一緒に戦ってくれる人、本気で「日本一」を一緒に目指してくれる人、サッカーへの熱意は誰にも負けない方、そんなメンバーと一緒に働きたいと思っています。経験などは一切気にしてません。是非ご応募お待ちしております。
            </p>
          </div>
        </Reveal>

        <Reveal from="up" delay={0.14}>
          <div className="mb-16 flex flex-col items-start gap-4 sm:flex-row">
            <a
              id="entry"
              href={companyData.recruitment?.email ? `mailto:${companyData.recruitment.email}` : "#"}
              className="inline-flex min-w-44 items-center justify-center rounded-full bg-brand-red px-10 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-brand-red-deep"
            >
              Entry
            </a>
            <a
              href="#"
              className="inline-flex min-w-44 items-center justify-center rounded-full border border-brand-blue-mid px-10 py-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue-mid transition hover:bg-brand-blue-wash"
            >
              Wantedly
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal from="up" delay={0.1}>
        <div className="border-t border-brand-blue-soft pt-12">
          <p className="mb-8 text-xs font-medium tracking-[0.2em] text-brand-blue-mid">
            ( Positions )
          </p>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-8">
            <article className="border-b border-brand-blue-soft py-8 md:border-b-0 md:border-r md:border-brand-blue-soft md:pr-10">
              <h4 className="mb-4 text-lg font-bold text-brand-blue">正社員</h4>
              <p className="mb-5 text-sm leading-relaxed text-neutral-600 md:text-base">
                事業拡大に向けて採用強化予定です。サッカー業界で日本一を目指す仲間を募集しています。
              </p>
              <a href="#" className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue-mid hover:text-brand-red">
                View more →
              </a>
            </article>
            <article className="py-8 md:pl-2">
              <h4 className="mb-4 text-lg font-bold text-brand-blue">アルバイト・インターン</h4>
              <p className="mb-5 text-sm leading-relaxed text-neutral-600 md:text-base">
                まずは現場を知り、自分の強みを活かせるかを確かめたい方も歓迎しています。
              </p>
              <a href="#" className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue-mid hover:text-brand-red">
                View more →
              </a>
            </article>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
