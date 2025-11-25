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
    
    // ヒーローセクション用スライドショー画像
    heroSlideshow?: {
      images: {
        path: string;
        alt: string;
      }[];
      interval?: number; // スライド切り替え間隔（ミリ秒）
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
      path: "/images/logo1_transparent.png",
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
    
    // ヒーローセクション用スライドショー画像
    heroSlideshow: {
      images: [
        {
          path: "/images/logo_Image.png",
          alt: "Conext Markting ロゴ",
        },
        {
          path: "/images/member_image.jpg",
          alt: "メンバー画像",
        },
        {
          path: "/images/soccerball_image.jpg",
          alt: "サッカーボール",
        },
      ],
      interval: 3000, // 3秒ごとに切り替え
    },
  };