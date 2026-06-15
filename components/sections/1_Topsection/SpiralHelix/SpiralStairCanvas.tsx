"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { companyData } from "@/library/GlobalDateConfig";
import SpiralHelix from "./SpiralHelix";

type SpiralStairCanvasProps = {
  containerClassName?: string;
  rotationSpeed?: number;
};

export default function SpiralStairCanvas({
  containerClassName = "absolute inset-0 w-full h-full",
  rotationSpeed = 0.002,
}: SpiralStairCanvasProps) {
  const images = companyData.heroSlideshow?.images ?? [];

  if (images.length === 0) return null;

  // 螺旋の密度を確保（参考サイトは13枚前後）
  const panelImages =
    images.length >= 10
      ? images
      : Array.from({ length: 12 }, (_, i) => images[i % images.length]);

  return (
    <div className={containerClassName}>
      <Canvas
        camera={{
          position: [-2.35, 0.55, 5.4],
          fov: 55,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SpiralHelix images={panelImages} rotationSpeed={rotationSpeed} />
        </Suspense>
      </Canvas>
    </div>
  );
}
