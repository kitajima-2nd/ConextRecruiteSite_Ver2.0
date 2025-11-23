"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/library/GlobalDateConfig";

// メニュー項目の型定義
type MenuItem = {
  label: string;
  href: string | null;
  submenu?: { label: string; href: string }[];
};

// メニュー項目をデータとして定義
const menuItems: MenuItem[] = [
  {
    label: "Conextを知る",
    href: null,
    submenu: [
      { label: "SERVICE", href: "#service" },
      { label: "PROJECT", href: "#project" },
      { label: "VOICE", href: "#voice" },
    ],
  },
  {
    label: "企業情報",
    href: "#company",
  },
  {
    label: "採用情報",
    href: "#recruit",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <Link href="/" className="flex items-center">
            <Image
              src={companyData.logo.path}
              alt={companyData.logo.alt}
              width={120}
              height={40}
              className="h-10 w-auto"
              quality={100}
              priority
              unoptimized
            />
          </Link>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <div className="relative group">
                    <button className="text-gray-700 hover:text-black transition-colors">
                      {item.label}
                    </button>
                    <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                      <ul className="w-48 bg-white shadow-lg rounded-md border border-gray-100 list-none p-0 m-0">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex} className="first:rounded-t-md last:rounded-b-md">
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="#entry"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              ENTRY
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <>
                    <div className="py-2 text-gray-700 font-semibold">
                      {item.label}
                    </div>
                    <ul className="list-none p-0 m-0">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="block py-2 pl-4 text-gray-700"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={item.href!} className="block py-2 text-gray-700">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="#entry"
              className="block bg-black text-white px-6 py-2 rounded-md text-center mt-4"
            >
              ENTRY
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

