import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/library/GlobalDateConfig";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-white">
      <div className="section-inner py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image
              src={companyData.logo.path}
              alt={companyData.logo.alt}
              width={120}
              height={40}
              className="mb-5 h-10 w-auto invert"
            />
            <p className="mb-2 font-medium text-white">{companyData.companyName}</p>
            <p className="mb-4 max-w-md text-sm leading-relaxed text-neutral-400">
              {companyData.address.postalCode && `${companyData.address.postalCode} `}
              {companyData.address.prefecture}
              {companyData.address.city}
              {companyData.address.street}
              {companyData.address.building && ` ${companyData.address.building}`}
            </p>
            {companyData.contact.phone && (
              <p className="text-sm text-neutral-400">TEL: {companyData.contact.phone}</p>
            )}
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-neutral-300">
              知る
            </h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link href="#about" className="transition hover:text-white">
                  Conextを知る
                </Link>
              </li>
              <li>
                <Link href="#service" className="transition hover:text-white">
                  5つの価値観
                </Link>
              </li>
              <li>
                <Link href="#project" className="transition hover:text-white">
                  事業内容
                </Link>
              </li>
              <li>
                <Link href="#company" className="transition hover:text-white">
                  会社概要
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-neutral-300">
              採用
            </h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link href="#mind" className="transition hover:text-white">
                  極める
                </Link>
              </li>
              <li>
                <Link href="#member" className="transition hover:text-white">
                  破る
                </Link>
              </li>
              <li>
                <Link href="#recruit" className="transition hover:text-white">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="#entry" className="transition hover:text-white">
                  ENTRY
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {companyData.social && (
          <div className="mt-10 flex flex-col gap-4 border-t border-neutral-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-4">
              {companyData.social.twitter && (
                <a
                  href={companyData.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 transition hover:text-white"
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
                  className="text-neutral-400 transition hover:text-white"
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
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()}{" "}
              {companyData.companyNameEn || companyData.companyName}
            </p>
          </div>
        )}
      </div>
    </footer>
  );
}
