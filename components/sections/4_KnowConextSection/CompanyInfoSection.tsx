"use client";

import Reveal from "@/components/motion/Reveal";
import { companyData, classNameProps } from "@/library/GlobalDateConfig";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeading from "@/components/layout/SectionHeading";

export default function CompanyInfoSection({ className = "" }: classNameProps) {
  const partnershipRows =
    companyData.partnerships?.map((p) => ({
      key: `${p.label}-${p.name}`,
      label: p.label,
      value: p.note ? `${p.name}（${p.note}）` : p.name,
    })) ?? [];

  const rows = [
    { key: "会社名", label: "会社名", value: companyData.companyName },
    {
      key: "所在地",
      label: "所在地",
      value: [
        companyData.address.postalCode,
        companyData.address.prefecture,
        companyData.address.city,
        companyData.address.street,
        companyData.address.building,
      ]
        .filter(Boolean)
        .join(" "),
    },
    {
      key: "設立",
      label: "設立",
      value: companyData.established ? `${companyData.established}年` : "未設定",
    },
    {
      key: "代表取締役",
      label: "代表取締役",
      value: companyData.representative.name,
    },
    {
      key: "電話番号",
      label: "電話番号",
      value: companyData.contact.phone || "未設定",
    },
    ...partnershipRows,
  ];

  return (
    <SectionShell
      id="company"
      variant="light"
      animated={false}
      className={`flex min-h-dvh items-center ${className}`}
    >
      <SectionHeading
        align="left"
        eyebrow="Company"
        title="会社概要"
        description="所在地と基本情報です。アクセスの目安に地図もあわせてご確認ください。"
        className="mb-10 max-w-2xl"
      />

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <dl className="m-0">
          {rows.map((row, index) => (
            <Reveal
              key={row.key}
              from="up"
              delay={index * 0.05}
              className={`grid grid-cols-1 gap-2 py-4 md:grid-cols-[8rem_1fr] md:gap-6 ${
                index !== rows.length - 1 ? "border-b border-brand-blue-soft" : ""
              }`}
            >
              <dt className="text-xs font-medium tracking-[0.18em] text-brand-blue-mid">
                {row.label}
              </dt>
              <dd className="m-0 text-sm leading-relaxed text-neutral-800 md:text-base">
                {row.value}
              </dd>
            </Reveal>
          ))}
        </dl>

        <Reveal
          from="down"
          delay={0.1}
          className="relative min-h-[280px] overflow-hidden rounded-2xl shadow-[0_18px_40px_-18px_rgba(0,30,85,0.35)] lg:min-h-88"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683727!2d139.70225841525848!3d35.65858098019456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b9ac42336e3%3A0xcdd3a72f5c0e5b2a!2z5pel5pys44CB44CSMTQwLTAwMDIg5p2x5Lqs6YO95riL6LC35Yy656We5a6u5YmN77yS5LiB55uu77yR77yR4oiS77yR77yT!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="会社所在地マップ"
          />
        </Reveal>
      </div>
    </SectionShell>
  );
}
