"use client";

import Dodecahedron from "./Dodecahedron";

export default function DodecahedronTest() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center py-20">
      <div className="w-full max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          正12面体テスト
        </h2>
        <div className="w-full h-[600px] bg-black/50 rounded-lg flex items-center justify-center">
          <Dodecahedron />
        </div>
        <p className="text-white text-center mt-8 text-lg">
          マウスをホバーすると回転が停止します
        </p>
      </div>
    </section>
  );
}

