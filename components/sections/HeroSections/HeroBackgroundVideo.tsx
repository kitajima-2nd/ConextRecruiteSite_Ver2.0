"use client";

import { useRef, useEffect } from "react";
import { companyData } from "@/library/GlobalDateConfig";

interface HeroBackgroundVideoProps {
  overlayClassName?: string;
}

/**
 * ヒーローセクション用の背景動画コンポーネント
 * PC用とスマホ用の動画を自動で切り替え、再生速度を設定
 */
export default function HeroBackgroundVideo({ 
  overlayClassName = "bg-white/50" 
}: HeroBackgroundVideoProps) {
  const videoPCRef = useRef<HTMLVideoElement>(null);
  const videoSPRef = useRef<HTMLVideoElement>(null);
  const videoConfig = companyData.heroBackgroundVideo;

  // 動画の再生速度を設定
  useEffect(() => {
    if (!videoConfig) return;
    
    const playbackRate = videoConfig.playbackRate ?? 1.0;
    
    const setPlaybackRate = (video: HTMLVideoElement | null) => {
      if (video) {
        video.playbackRate = playbackRate;
      }
    };

    // PC用動画の再生速度を設定
    if (videoPCRef.current) {
      setPlaybackRate(videoPCRef.current);
    }
    
    // スマホ用動画の再生速度を設定
    if (videoSPRef.current) {
      setPlaybackRate(videoSPRef.current);
    }
  }, [videoConfig]);

  if (!videoConfig) return null;

  const handlePlaybackRate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const playbackRate = videoConfig.playbackRate ?? 1.0;
    e.currentTarget.playbackRate = playbackRate;
  };

  return (
    <div className="absolute inset-0 z-[5]">
      {/* PC用動画 */}
      <video
        ref={videoPCRef}
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block w-full h-[200dvh] object-cover relative z-0 opacity-30"
        poster={videoConfig.poster}
        onLoadedMetadata={handlePlaybackRate}
        onCanPlay={handlePlaybackRate}
        onPlaying={handlePlaybackRate}
      >
        <source src={videoConfig.pathPC} type="video/mp4" />
      </video>
      
      {/* スマホ用動画 */}
      <video
        ref={videoSPRef}
        autoPlay
        loop
        muted
        playsInline
        className="block md:hidden w-full h-full object-cover relative z-0 opacity-30"
        poster={videoConfig.poster}
        onLoadedMetadata={handlePlaybackRate}
        onCanPlay={handlePlaybackRate}
        onPlaying={handlePlaybackRate}
      >
        <source src={videoConfig.pathSP} type="video/mp4" />
      </video>
      
      {/* オーバーレイ */}
      {/* <div className={`absolute inset-0 ${overlayClassName} z-10`} /> */}
    </div>
  );
}

