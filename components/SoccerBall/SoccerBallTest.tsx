"use client";

import SoccerBall from "./SoccerBall";

export default function SoccerBallTest() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center py-20">
      <div className="w-full max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          サッカーボール型（切頂二十面体）テスト
        </h2>
        <div className="w-full h-[700px] bg-black/50 rounded-lg flex items-center justify-center">
          <SoccerBall />
        </div>
        <p className="text-white text-center mt-8 text-lg">
          マウスをホバーすると回転が停止します
        </p>
        <p className="text-white text-center mt-4 text-sm text-gray-400">
          黒い面: 正五角形（12個） / 白い面: 正六角形（20個）
        </p>
      </div>
    </section>
  );
}

