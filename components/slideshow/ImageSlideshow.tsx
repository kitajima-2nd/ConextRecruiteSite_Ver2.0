"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export interface ImageItem {
  path: string;
  alt: string;
}

interface ImageSlideshowProps {
  images: ImageItem[];
  interval?: number; // スライド切り替え間隔（ミリ秒、デフォルト: 3000）
  firstImageDelay?: number; // 最初の画像の表示時間（ミリ秒、デフォルト: 3000）
  containerClassName?: string;
  firstImageClassName?: string; // 最初の画像のスタイル
  slideImageClassName?: string; // スライド画像のスタイル
  onSlideChange?: (index: number) => void; // スライド変更時のコールバック
}

/**
 * 汎用的な画像スライドショーコンポーネント
 * 最初の画像を指定時間表示後、フェードアウトしてスライドショーを開始
 */
export default function ImageSlideshow({
  images,
  interval = 3000,
  firstImageDelay = 3000,
  containerClassName = "",
  firstImageClassName = "object-cover scale-150",
  slideImageClassName = "object-cover",
  onSlideChange,
}: ImageSlideshowProps) {
  // スライドショー用の状態管理
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstImageVisible, setIsFirstImageVisible] = useState(true);
  const slideImages = images.slice(1); // 2番目以降の画像
  const firstImage = images[0]; // 最初の画像

  // 最初の画像を指定時間表示後、フェードアウトしてスライドショーを開始
  useEffect(() => {
    if (images.length === 0) return;

    // 最初の画像を指定時間表示後、フェードアウト
    const firstTimer = setTimeout(() => {
      setIsFirstImageVisible(false);
      // フェードアウト完了後にスライドショー開始
      setTimeout(() => {
        setCurrentIndex(0);
        if (onSlideChange) {
          onSlideChange(0);
        }
      }, 600); // フェードアウトのdurationに合わせる
    }, firstImageDelay);

    return () => {
      clearTimeout(firstTimer);
    };
  }, [images.length, firstImageDelay, onSlideChange]);

  // スライドショーの自動切り替え（2番目以降のみ）
  useEffect(() => {
    if (images.length === 0 || isFirstImageVisible || slideImages.length === 0) return;

    const slideTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % slideImages.length;
        if (onSlideChange) {
          onSlideChange(nextIndex);
        }
        return nextIndex;
      });
    }, interval);

    return () => {
      clearInterval(slideTimer);
    };
  }, [images.length, interval, isFirstImageVisible, slideImages.length, onSlideChange]);

  if (images.length === 0) return null;

  return (
    <div className={containerClassName}>
      {/* 最初の画像 - 独立して表示、右からスライドイン、指定時間後にフェードアウト */}
      {firstImage && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{
            x: 0,
            opacity: isFirstImageVisible ? 1 : 0,
          }}
          transition={{
            x: { duration: 0.4, ease: "easeInOut" },
            opacity: { duration: 0.3, delay: isFirstImageVisible ? 0 : 0, ease: "easeOut" },
          }}
          className="absolute inset-0 z-40"
        >
          <Image
            src={firstImage.path}
            alt={firstImage.alt}
            fill
            className={firstImageClassName}
            priority
          />
        </motion.div>
      )}

      {/* スライドショー - 2番目以降の画像をループ表示 */}
      {!isFirstImageVisible && slideImages.length > 0 && (
        <AnimatePresence>
          <motion.div
            key={`slide-${currentIndex}`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 z-30"
          >
            <Image
              src={slideImages[currentIndex].path}
              alt={slideImages[currentIndex].alt}
              fill
              className={slideImageClassName}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

