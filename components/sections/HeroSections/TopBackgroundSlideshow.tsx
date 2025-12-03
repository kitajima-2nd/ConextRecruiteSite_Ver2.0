"use client";

import Image from "next/image";
import { companyData } from "@/library/GlobalDateConfig";

interface TopBackgroundSlideshowProps {
  containerClassName?: string;
  speed?: number; // アニメーション速度（秒）
}

/**
 * Topページ背景用のフィルム風スライドショーコンポーネント
 * 映画のフィルムのように画像が3段に並び、各段が異なる方向にリニアに動く
 * 1段目：左→右、2段目：右→左、3段目：左→右
 */
export default function TopBackgroundSlideshow({
  containerClassName = "absolute inset-0 w-full h-full",
  speed = 20, // デフォルト20秒で1周
}: TopBackgroundSlideshowProps) {
  const images = companyData.heroSlideshow?.images || [];

  if (images.length === 0) return null;

  // 画像を複数回繰り返して無限スクロールを実現（3セット繰り返す）
  const duplicatedImages = [...images, ...images, ...images];

  // フィルム行コンポーネント
  const FilmRow = ({ 
    images, 
    direction, 
    speed, 
    rowIndex 
  }: { 
    images: typeof duplicatedImages; 
    direction: 'left' | 'right'; 
    speed: number;
    rowIndex: number;
  }) => {
    const animationName = direction === 'left' ? 'slideLeftToRight' : 'slideRightToLeft';
    // 元の画像数（1セット分）
    const originalImageCount = images.length / 3;
    
    return (
      <div 
        className="flex h-full will-change-transform"
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={`row${rowIndex}-${index}`}
            className="shrink-0 px-2 py-2 h-[33.333vh] min-w-[200px] sm:min-w-[250px] md:min-w-[300px] lg:min-w-[350px]"
            style={{ 
              width: `${100 / originalImageCount}%`,
            }}
          >
            <div className="h-full w-full rounded-lg overflow-hidden">
              <Image
                src={image.path}
                alt={image.alt}
                width={1200}
                height={400}
                className="h-full w-full object-cover"
                priority={index < 3 && rowIndex === 1}
                sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, (max-width: 1024px) 300px, 350px"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={containerClassName}>
      {/* 1段目：左から右へ */}
      <div className="absolute top-0 left-0 w-full h-[33.333vh] overflow-hidden">
        <FilmRow 
          images={duplicatedImages} 
          direction="left" 
          speed={speed}
          rowIndex={1}
        />
      </div>

      {/* 2段目：右から左へ */}
      <div className="absolute top-[33.333vh] left-0 w-full h-[33.333vh] overflow-hidden">
        <FilmRow 
          images={duplicatedImages} 
          direction="right" 
          speed={speed}
          rowIndex={2}
        />
      </div>

      {/* 3段目：左から右へ */}
      <div className="absolute top-[66.666vh] left-0 w-full h-[33.333vh] overflow-hidden">
        <FilmRow 
          images={duplicatedImages} 
          direction="left" 
          speed={speed * 1.2}
          rowIndex={3}
        />
      </div>
    </div>
  );
}

