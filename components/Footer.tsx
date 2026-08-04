"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { companyData } from "@/library/GlobalDateConfig";

export default function Footer() {
  const footerPartners =
    companyData.partnerships?.filter(
      (p) => p.supportMessage || p.logo
    ) ?? [];

  return (
    <footer className="border-t border-brand-blue-soft bg-white text-neutral-900">
      <div className="section-inner py-14 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <Reveal from="up" className="md:col-span-2">
            <Image
              src={companyData.logo.path}
              alt={companyData.logo.alt}
              width={120}
              height={40}
              className="mb-5 h-10 w-auto"
              style={{ width: "auto" }}
            />
            <p className="mb-2 font-medium text-brand-blue">{companyData.companyName}</p>
            <p className="mb-4 max-w-md text-sm leading-relaxed text-neutral-600">
              {companyData.address.postalCode && `${companyData.address.postalCode} `}
              {companyData.address.prefecture}
              {companyData.address.city}
              {companyData.address.street}
              {companyData.address.building && ` ${companyData.address.building}`}
            </p>
            {companyData.contact.phone && (
              <p className="text-sm text-neutral-600">TEL: {companyData.contact.phone}</p>
            )}
          </Reveal>

          <Reveal from="up" delay={0.08}>
            <h3 className="mb-5 text-xs font-medium tracking-[0.2em] text-brand-blue-mid">
              ( About )
            </h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li>
                <Link href="#service" className="transition hover:text-brand-blue">
                  Values
                </Link>
              </li>
              <li>
                <Link href="#project" className="transition hover:text-brand-blue">
                  Project
                </Link>
              </li>
              <li>
                <Link href="#voice" className="transition hover:text-brand-blue">
                  Voice
                </Link>
              </li>
              <li>
                <Link href="#company" className="transition hover:text-brand-blue">
                  Company
                </Link>
              </li>
            </ul>
          </Reveal>

          <Reveal from="up" delay={0.14}>
            <h3 className="mb-5 text-xs font-medium tracking-[0.2em] text-brand-blue-mid">
              ( More )
            </h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li>
                <Link href="#news" className="transition hover:text-brand-blue">
                  News
                </Link>
              </li>
              <li>
                <Link href="#recruit" className="transition hover:text-brand-blue">
                  Recruit
                </Link>
              </li>
              <li>
                <Link href="#entry" className="transition hover:text-brand-blue">
                  Entry
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal from="up" delay={0.1}>
          <div className="mt-12 flex flex-col gap-6 border-t border-brand-blue-soft pt-8">
            {footerPartners.length > 0 ? (
              <div className="flex flex-col gap-3">
                {footerPartners.map((partner) => (
                  <p
                    key={`${partner.label}-${partner.name}`}
                    className="inline-flex flex-wrap items-center gap-2 text-xs text-neutral-500 sm:text-sm"
                  >
                    {partner.logo ? (
                      <Image
                        src={partner.logo.path}
                        alt={partner.logo.alt}
                        width={120}
                        height={32}
                        className="h-7 w-auto"
                        style={{ width: "auto" }}
                      />
                    ) : null}
                    {partner.supportMessage ? (
                      <span>{partner.supportMessage}</span>
                    ) : null}
                  </p>
                ))}
              </div>
            ) : null}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {companyData.social ? (
                <div className="flex gap-4">
                  {companyData.social.twitter && (
                    <a
                      href={companyData.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 transition hover:text-brand-blue"
                      aria-label="Twitter"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  )}
                  {companyData.social.website && (
                    <a
                      href={companyData.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 transition hover:text-brand-blue"
                      aria-label="Website"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              ) : (
                <span />
              )}
              <p className="text-sm text-neutral-500">
                © {new Date().getFullYear()}{" "}
                {companyData.companyNameEn || companyData.companyName}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
