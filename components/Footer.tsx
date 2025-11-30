import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/library/GlobalDateConfig";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ロゴと会社情報 */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src={companyData.logo.path}
              alt={companyData.logo.alt}
              width={120}
              height={40}
              className="h-10 w-auto mb-4 invert"
            />
            <p className="text-gray-400 mb-2">
              {companyData.companyName}
            </p>
            <p className="text-gray-400 text-sm mb-4">
              {companyData.address.postalCode && `${companyData.address.postalCode} `}
              {companyData.address.prefecture}
              {companyData.address.city}
              {companyData.address.street}
              {companyData.address.building && ` ${companyData.address.building}`}
            </p>
            {companyData.contact.phone && (
              <p className="text-gray-400 text-sm">
                TEL: {companyData.contact.phone}
              </p>
            )}
          </div>

          {/* ナビゲーション */}
          <div>
            <h3 className="font-bold mb-4">知る</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  経営理念
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  について
                </Link>
              </li>
              <li>
                <Link href="#stance" className="hover:text-white transition-colors">
                  こだわり
                </Link>
              </li>
              <li>
                <Link href="#data" className="hover:text-white transition-colors">
                  数字でみる
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">極める・破る</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#mind" className="hover:text-white transition-colors">
                  仕入れの極意
                </Link>
              </li>
              <li>
                <Link href="#item" className="hover:text-white transition-colors">
                  戦略
                </Link>
              </li>
              <li>
                <Link href="#history" className="hover:text-white transition-colors">
                  軌跡
                </Link>
              </li>
              <li>
                <Link href="#member" className="hover:text-white transition-colors">
                  型破りな社員たち
                </Link>
              </li>
              <li>
                <Link href="#special" className="hover:text-white transition-colors">
                  SHOWTIME SHOW
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* SNSリンク */}
        {companyData.social && (
          <div className="mt-8 pt-8 border-t border-gray-800 flex items-center justify-between">
            <div className="flex space-x-4">
              {companyData.social.twitter && (
                <a
                  href={companyData.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {companyData.social.website && (
                <a
                  href={companyData.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Website"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </a>
              )}
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {companyData.companyNameEn || companyData.companyName}
            </p>
          </div>
        )}
      </div>
    </footer>
  );
}

