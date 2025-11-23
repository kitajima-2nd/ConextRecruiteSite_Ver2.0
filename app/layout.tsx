import type { Metadata } from "next";
import { Sawarabi_Gothic } from "next/font/google";
import "./globals.css";

const sawarabiGothic = Sawarabi_Gothic({
  variable: "--font-sawarabi-gothic",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Conext Markting 採用サイト",
  description: "スポーツで繋がる、ひろがる。日本一のサッカーカンパニーを目指すConext Marktingの採用情報サイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${sawarabiGothic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
