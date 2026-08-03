"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/library/GlobalDateConfig";

type MenuItem = {
  label: string;
  href: string | null;
  submenu?: { label: string; href: string }[];
};

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
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
      <nav className="section-inner flex h-[var(--header-height)] items-center justify-between py-0">
        <Link href="/" className="flex items-center">
          <Image
            src={companyData.logo.path}
            alt={companyData.logo.alt}
            width={120}
            height={40}
            className="h-9 w-auto md:h-10"
            quality={100}
            priority
            unoptimized
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.submenu ? (
                <div className="group relative">
                  <button className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-950">
                    {item.label}
                  </button>
                  <div className="absolute left-0 top-full hidden pt-3 group-hover:block">
                    <ul className="m-0 min-w-48 list-none overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 shadow-xl">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="block rounded-lg px-4 py-2.5 text-sm text-neutral-700 transition-colors hover:bg-neutral-50"
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
                  className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-950"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="#entry"
            className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-neutral-800"
          >
            ENTRY
          </Link>
        </div>

        <button
          className="rounded-lg p-2 text-neutral-900 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニュー"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      </nav>

      {isMenuOpen && (
        <div className="border-t border-neutral-100 bg-white px-4 pb-6 pt-4 md:hidden">
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <>
                    <div className="py-2 text-sm font-semibold text-neutral-900">
                      {item.label}
                    </div>
                    <ul className="m-0 list-none p-0">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="block py-2 pl-3 text-sm text-neutral-600"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="block py-2 text-sm text-neutral-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="#entry"
              className="mt-4 block rounded-full bg-neutral-950 px-6 py-3 text-center text-sm font-bold text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              ENTRY
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
