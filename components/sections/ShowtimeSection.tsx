"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function ShowtimeSection() {
  return (
    <AnimatedSection className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            SHOWTIME SHOW
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            ここにtestをいれます
            <br />
            ここにtestをいれます
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* 動画プレースホルダー */}
          <div className="relative aspect-video bg-gray-900 rounded-lg mb-8 flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-20 h-20 mx-auto mb-4 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <p className="text-gray-400">動画プレースホルダー</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-2xl font-bold mb-4">
              ここにtestをいれます
            </p>
            <a
              href="#special-detail"
              className="inline-block bg-white text-black px-8 py-3 rounded-md font-bold hover:bg-gray-200 transition-colors"
            >
              特設ページで投票する
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

