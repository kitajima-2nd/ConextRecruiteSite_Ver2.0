"use client";

import { companyData } from "@/library/GlobalDateConfig";
import { classNameProps } from "@/library/GlobalDateConfig";

export default function CompanyInfoSection({ className = "" } : classNameProps) {
  return (
    <section className={`w-dvw h-dvh py-12 md:py-20 bg-linear-to-b from-gray-200 to-black text-white ${className}`}>
      <div className="container mx-auto px-4">
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">会社概要</h3>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* 左側：テーブル */}
              <div className="flex-1">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <table className="w-full text-left">
                    <tbody className="space-y-4">
                      <tr className="border-b border-white/20 pb-4">
                        <th className="py-4 pr-8 font-bold text-lg w-1/3">会社名</th>
                        <td className="py-4 text-gray-200">{companyData.companyName}</td>
                      </tr>
                      <tr className="border-b border-white/20 pb-4">
                        <th className="py-4 pr-8 font-bold text-lg w-1/3">所在地</th>
                        <td className="py-4 text-gray-200">
                          {companyData.address.postalCode && `${companyData.address.postalCode} `}
                          {companyData.address.prefecture}
                          {companyData.address.city}
                          {companyData.address.street}
                          {companyData.address.building && ` ${companyData.address.building}`}
                        </td>
                      </tr>
                      <tr className="border-b border-white/20 pb-4">
                        <th className="py-4 pr-8 font-bold text-lg w-1/3">設立</th>
                        <td className="py-4 text-gray-200">
                          {companyData.established ? `${companyData.established}年` : "未設定"}
                        </td>
                      </tr>
                      <tr className="border-b border-white/20 pb-4">
                        <th className="py-4 pr-8 font-bold text-lg w-1/3">代表取締役</th>
                        <td className="py-4 text-gray-200">{companyData.representative.name}</td>
                      </tr>
                      <tr>
                        <th className="py-4 pr-8 font-bold text-lg w-1/3">電話番号</th>
                        <td className="py-4 text-gray-200">
                          {companyData.contact.phone || "未設定"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 右側：地図 */}
              <div className="flex-1">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 h-full">
                  <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683727!2d139.70225841525848!3d35.65858098019456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b9ac42336e3%3A0xcdd3a72f5c0e5b2a!2z5pel5pys44CB44CSMTQwLTAwMDIg5p2x5Lqs6YO95riL6LC35Yy656We5a6u5YmN77yS5LiB55uu77yR77yR4oiS77yR77yT!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

