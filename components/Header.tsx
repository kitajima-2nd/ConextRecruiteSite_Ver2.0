"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/library/GlobalDateConfig";

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
            />
          </Link>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-black transition-colors">
              経営理念
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-black transition-colors">
                知る
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="#about" className="block px-4 py-2 text-sm hover:bg-gray-50">
                  について
                </Link>
                <Link href="#stance" className="block px-4 py-2 text-sm hover:bg-gray-50">
                  こだわり
                </Link>
                <Link href="#data" className="block px-4 py-2 text-sm hover:bg-gray-50">
                  数字でみる
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-black transition-colors">
                極める
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="#mind" className="block px-4 py-2 text-sm hover:bg-gray-50">
                  仕入れの極意
                </Link>
                <Link href="#item" className="block px-4 py-2 text-sm hover:bg-gray-50">
                  戦略
                </Link>
                <Link href="#history" className="block px-4 py-2 text-sm hover:bg-gray-50">
                  軌跡
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-black transition-colors">
                破る
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="#member" className="block px-4 py-2 text-sm hover:bg-gray-50">
                  型破りな社員たち
                </Link>
                <Link href="#special" className="block px-4 py-2 text-sm hover:bg-gray-50">
                  SHOWTIME SHOW
                </Link>
              </div>
            </div>
            <Link href="#recruit" className="text-gray-700 hover:text-black transition-colors">
              採用情報
            </Link>
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
            <Link href="#about" className="block py-2 text-gray-700">
              経営理念
            </Link>
            <Link href="#about" className="block py-2 text-gray-700">
              について
            </Link>
            <Link href="#stance" className="block py-2 text-gray-700">
              こだわり
            </Link>
            <Link href="#data" className="block py-2 text-gray-700">
              数字でみる
            </Link>
            <Link href="#mind" className="block py-2 text-gray-700">
              仕入れの極意
            </Link>
            <Link href="#item" className="block py-2 text-gray-700">
              戦略
            </Link>
            <Link href="#history" className="block py-2 text-gray-700">
              軌跡
            </Link>
            <Link href="#member" className="block py-2 text-gray-700">
              型破りな社員たち
            </Link>
            <Link href="#special" className="block py-2 text-gray-700">
              SHOWTIME SHOW
            </Link>
            <Link href="#recruit" className="block py-2 text-gray-700">
              採用情報
            </Link>
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

