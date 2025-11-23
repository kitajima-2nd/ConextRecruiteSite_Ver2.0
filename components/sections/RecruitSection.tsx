import { companyData } from "@/library/GlobalDateConfig";

export default function RecruitSection() {
  return (
    <section id="recruit" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            RECRUIT
            <br />
            <span className="text-gray-400">採用情報</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            一緒にサッカーで
            <br />
            「日本一」を目指しませんか？
          </p>
          <p className="text-lg text-gray-300 mb-6">
            株式会社Conext Marktingは事業拡大に向けて採用強化予定です。
            <br />
            「サッカーで日本一のカンパニー」
            <br />
            この目標は決して簡単ではなく、楽しいことばかりではありません。
          </p>
          <p className="text-lg text-gray-300 mb-6">
            時には、乗り越えなきゃいけない壁も自分との勝負の場面ももちろんあります。
            <br />
            その為個々の力を強化し、いずれマネジメント職や新規事業を先導するメンバーを育てていく予定です。
            <br />
            そして、その最強メンバーでサッカー業界の「日本一楽しい」リーディングカンパニーを目指します。
          </p>
          <p className="text-lg text-white font-bold mb-12">
            本気で一緒に戦ってくれる人、本気で「日本一」を一緒に目指してくれる人、サッカーへの熱意は誰にも負けない方、そんなメンバーと一緒に働きたいと思っています。
            <br />
            経験などは一切気にしてません。是非ご応募お待ちしております。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              id="entry"
              href={companyData.recruitment?.email ? `mailto:${companyData.recruitment.email}` : "#"}
              className="bg-white text-black px-12 py-4 rounded-md font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              ENTRY
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-12 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Wantedly
            </a>
          </div>
        </div>

        {/* 採用情報詳細 */}
        <div className="max-w-4xl mx-auto mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">採用情報を見る</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">正社員</h4>
              <p className="text-gray-300 mb-4">
                株式会社Conext Marktingは事業拡大に向けて採用強化予定です。「サッカーで日本一のカンパニー」この目標は決して簡単ではなく、楽しいことばかりではありません。
              </p>
              <a href="#" className="text-white font-bold hover:underline">
                詳しく見る →
              </a>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">アルバイト・インターン</h4>
              <p className="text-gray-300 mb-4">
                時には、乗り越えなきゃいけない壁も自分との勝負の場面ももちろんあります。その為個々の力を強化し、いずれマネジメント職や新規事業を先導するメンバーを育てていく予定です。
              </p>
              <a href="#" className="text-white font-bold hover:underline">
                詳しく見る →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

