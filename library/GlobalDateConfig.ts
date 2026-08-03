// lib/companyData.ts または config/companyData.ts

export interface CompanyData {
    // 基本情報
    companyName: string;
    companyNameEn?: string; // 英語名（オプション）
    
    // 代表者情報
    representative: {
      name: string;
      title: string; // 役職（例: "代表取締役"）
      image?: string; // 代表者画像のパス
    };
    
    // 会社情報
    established?: number; // 設立年
    address: {
      postalCode?: string;
      prefecture: string;
      city: string;
      street: string;
      building?: string;
    };
    
    // 連絡先
    contact: {
      email?: string;
      phone?: string;
      fax?: string;
    };
    
    // 事業内容
    businessDescription?: string;
    
    // ロゴ・画像
    logo: {
      path: string; // public/images/logo.png など
      alt: string;
    };
    
    // SNS・リンク
    social?: {
      website?: string;
      twitter?: string;
      facebook?: string;
      linkedin?: string;
      instagram?: string;
    };
    
    // 採用関連
    recruitment?: {
      email?: string;
      phone?: string;
    };

    // スポンサー・パートナーシップ（配列追加で拡張可）
    partnerships?: {
      label: string;
      name: string;
      note?: string;
      supportMessage?: string;
      logo?: {
        path: string;
        alt: string;
      };
    }[];
    
    // ヒーローセクション用スライドショー画像（TopBackgroundSlideshow）
    heroSlideshow?: {
      images: {
        path: string;
        alt: string;
      }[];
    };
  }
  
  export const companyData: CompanyData = {
    companyName: "株式会社Conext Markting",
    companyNameEn: "Conext Markting Inc.",
    
    representative: {
      name: "ここにtestをいれます",
      title: "代表取締役",
      image: "/images/Representative_director.jpg",
    },
    
    established: undefined, // ここにtestをいれます
    address: {
      postalCode: "ここにtestをいれます",
      prefecture: "東京都",
      city: "品川区",
      street: "五反田",
      building: "ここにtestをいれます",
    },
    
    contact: {
      email: "ここにtestをいれます",
      phone: "ここにtestをいれます",
    },
    
    businessDescription: "サッカーイベントの企画・運営、営業（人材育成）",
    
    logo: {
      path: "/images/logo_Image_main_skeleton.png",
      alt: "Conext Markting ロゴ",
    },
    
    social: {
      website: "https://conextmarkting.com",
      twitter: "ここにtestをいれます",
      facebook: "ここにtestをいれます",
      instagram: "ここにtestをいれます",
    },
    
    recruitment: {
      email: "ここにtestをいれます",
      phone: "ここにtestをいれます",
    },

    partnerships: [
      {
        label: "スポンサー",
        name: "浦和レッズ",
        note: "Jリーグ オフィシャルパートナー",
        supportMessage: "当社はJリーグ浦和レッズのオフィシャルパートナーです。",
        logo: {
          path: "/images/partners/urawa-reds.png",
          alt: "浦和レッズ",
        },
      },
    ],
    
    // ヒーローセクション用スライドショー画像
    heroSlideshow: {
      images: [
        {
          path: "/images/callsenter_image.jpg",
          alt: "営業風景",
        },
        {
          path: "/images/member_image.jpg",
          alt: "メンバー画像",
        },
        {
          path: "/images/slide_image2.jpg",
          alt: "入社式社員集合写真",
        },
        {
          path: "/images/slide_image.jpg",
          alt: "入社式風景",
        },
        {
          path: "/images/Recruitment_image.jpg",
          alt: "フットサル",
        },
        {
          path: "/images/background_image_top.jpg",
          alt: "大会風景",
        },
      ],
    },
  };

// クラス名を受け取るためのインターフェース
export interface classNameProps {
  className?: string;
}