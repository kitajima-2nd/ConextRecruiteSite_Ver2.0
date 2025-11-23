export default function BreakSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conext Marktingで<span className="text-gray-400">破る</span>
          </h2>
          <p className="text-xl text-gray-600">
            さあ、ここからぶっ飛んでみようぜ。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 型破りな社員たち */}
          <div id="member" className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
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
              href="#member-detail"
              className="text-black font-bold hover:underline inline-flex items-center"
            >
              詳しく見る
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* SHOWTIME SHOW */}
          <div id="special" className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                S
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
              href="#special-detail"
              className="text-black font-bold hover:underline inline-flex items-center"
            >
              特設ページで投票する
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

