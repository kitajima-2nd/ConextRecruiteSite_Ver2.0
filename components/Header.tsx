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
    label: "About",
    href: null,
    submenu: [
      { label: "Values", href: "#service" },
      { label: "Project", href: "#project" },
      { label: "Voice", href: "#voice" },
      { label: "Company", href: "#company" },
    ],
  },
  {
    label: "News",
    href: "#news",
  },
  {
    label: "Recruit",
    href: "#recruit",
  },
];

const linkClass =
  "text-xs font-medium uppercase tracking-[0.22em] text-neutral-600 transition-colors hover:text-neutral-950";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur-sm">
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

        <div className="hidden items-center gap-10 md:flex">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.submenu ? (
                <div className="group relative">
                  <button className={linkClass}>{item.label}</button>
                  <div className="absolute left-0 top-full hidden pt-3 group-hover:block">
                    <ul className="m-0 min-w-44 list-none overflow-hidden border border-neutral-200 bg-white p-1 shadow-lg">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="block px-4 py-2.5 text-xs uppercase tracking-[0.18em] text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-950"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link href={item.href!} className={linkClass}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="#entry"
            className="rounded-full bg-brand-red px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand-red-deep"
          >
            Entry
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
                    <div className="py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900">
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
                    className="block py-2 text-xs uppercase tracking-[0.2em] text-neutral-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="#entry"
              className="mt-4 block rounded-full bg-brand-red px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand-red-deep"
              onClick={() => setIsMenuOpen(false)}
            >
              Entry
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
