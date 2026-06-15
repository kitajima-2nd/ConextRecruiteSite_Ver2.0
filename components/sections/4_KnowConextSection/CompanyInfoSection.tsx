"use client";

import { companyData, classNameProps } from "@/library/GlobalDateConfig";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeading from "@/components/layout/SectionHeading";

export default function CompanyInfoSection({ className = "" }: classNameProps) {
  const rows = [
    { label: "会社名", value: companyData.companyName },
    {
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
      label: "設立",
      value: companyData.established ? `${companyData.established}年` : "未設定",
    },
    { label: "代表取締役", value: companyData.representative.name },
    { label: "電話番号", value: companyData.contact.phone || "未設定" },
  ];

  return (
    <SectionShell
      id="company"
      variant="dark"
      animated={false}
      className={`flex min-h-dvh items-center ${className}`}
    >
      <SectionHeading
        align="left"
        tone="light"
        eyebrow="Company"
        title="会社概要"
        className="mb-10 max-w-2xl"
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <dl className="space-y-0">
            {rows.map((row, index) => (
              <div
                key={row.label}
                className={`grid grid-cols-1 gap-2 py-4 md:grid-cols-[8rem_1fr] md:gap-6 ${
                  index !== rows.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <dt className="text-sm font-bold text-white">{row.label}</dt>
                <dd className="text-sm leading-relaxed text-neutral-300">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
          <div className="relative min-h-[320px] overflow-hidden rounded-xl lg:min-h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683727!2d139.70225841525848!3d35.65858098019456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b9ac42336e3%3A0xcdd3a72f5c0e5b2a!2z5pel5pys44CB44CSMTQwLTAwMDIg5p2x5Lqs6YO95riL6LC35Yy656We5a6u5YmN77yS5LiB55uu77yR77yR4oiS77yR77yT!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="会社所在地マップ"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
