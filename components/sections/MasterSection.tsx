"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function MasterSection() {
  return (
    <AnimatedSection className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conext Marktingを<span className="text-gray-400">極める</span>
          </h2>
          <p className="text-xl text-gray-600">
            面白い仕事は、熱中の先にある。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 仕入れの極意 */}
          <div id="mind" className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                M
              </div>
              <h3 className="text-2xl font-bold mb-4">
                ここにtestをいれます
                <br />
                ここにtestをいれます
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              ここにtestをいれます
            </p>
            <a
              href="#mind-detail"
              className="text-black font-bold hover:underline inline-flex items-center"
            >
              詳しく見る
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* 戦略 */}
          <div id="item" className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                I
              </div>
              <h3 className="text-2xl font-bold mb-4">
                ここにtestをいれます
                <br />
                ここにtestをいれます
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              ここにtestをいれます
            </p>
            <a
              href="#item-detail"
              className="text-black font-bold hover:underline inline-flex items-center"
            >
              詳しく見る
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* 軌跡 */}
          <div id="history" className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                H
              </div>
              <h3 className="text-2xl font-bold mb-4">
                ここにtestをいれます
                <br />
                ここにtestをいれます
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              ここにtestをいれます
            </p>
            <a
              href="#history-detail"
              className="text-black font-bold hover:underline inline-flex items-center"
            >
              詳しく見る
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

