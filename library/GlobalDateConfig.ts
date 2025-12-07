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
    
    // ヒーローセクション用背景動画
    heroBackgroundVideo?: {
      pathPC: string; // PC用動画ファイルのパス（public/videos/に配置）
      pathSP: string; // スマホ用動画ファイルのパス（public/videos/に配置）
      poster?: string; // 動画のポスター画像（オプション）
      playbackRate?: number; // 再生速度（デフォルト: 1.0、0.5 = 半分の速度、2.0 = 2倍速）
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
      interval: 3000, // 3秒ごとに切り替え
    },
    
    // ヒーローセクション用背景動画
    heroBackgroundVideo: {
      pathPC: "/videos/toppageVideo2_forPC.mp4", // PC用動画ファイルのパス
      pathSP: "/videos/toppageVideo2_forSP.mp4", // スマホ用動画ファイルのパス
      poster: "/images/logo_Image.png", // 動画のポスター画像（オプション）
      playbackRate: 0.7, // 再生速度（1.0 = 通常速度、0.5 = スローモーション、2.0 = 2倍速）
    },
  };

// クラス名を受け取るためのインターフェース
export interface classNameProps {
  className?: string;
}