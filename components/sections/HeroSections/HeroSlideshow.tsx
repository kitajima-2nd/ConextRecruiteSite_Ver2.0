"use client";

import { companyData } from "@/library/GlobalDateConfig";
import ImageSlideshow from "@/components/slideshow/ImageSlideshow";

interface HeroSlideshowProps {
  containerClassName?: string;
}

/**
 * ヒーローセクション用のスライドショーコンポーネント
 * ImageSlideshowをラップして、Hero用の設定を適用
 */
export default function HeroSlideshow({
  containerClassName,
}: HeroSlideshowProps) {
  const images = companyData.heroSlideshow?.images || [];
  const interval = companyData.heroSlideshow?.interval || 3000;

  const defaultContainerClassName = `
    clip-hexagon absolute z-30 overflow-hidden
    /* モバイル（デフォルト） - 78.62vw × 67.63vw */
    bottom-4 right-4
    w-[78.62vw] h-[67.63vw]
    min-w-[353.81px] min-h-[304.28px]
    /* タブレット小（sm: 640px以上） - 68.8vw × 59.17vw */
    sm:w-[68.8vw] sm:h-[59.17vw]
    /* タブレット大（md: 768px以上） - 62.9vw × 54.1vw */
    md:bottom-8 md:right-8
    md:w-[62.9vw] md:h-[54.1vw]
    /* デスクトップ（lg: 1024px以上） - 55.03vw × 47.33vw */
    lg:bottom-12 lg:right-12
    lg:w-[55.03vw] lg:h-[47.33vw]
    /* 大型デスクトップ（xl: 1280px以上） - 49.14vw × 42.26vw */
    xl:w-[49.14vw] xl:h-[42.26vw]
    /* 最大サイズ制限 - 982.8px × 845.21px */
    max-w-[982.8px] max-h-[845.21px]
  `;

  return (
    <ImageSlideshow
      images={images}
      interval={interval}
      firstImageDelay={3000}
      containerClassName={containerClassName || defaultContainerClassName}
      firstImageClassName="object-cover scale-150"
      slideImageClassName="object-cover"
    />
  );
}

