"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { companyData } from "@/library/GlobalDateConfig";
import SpiralHelix from "./SpiralHelix";
import {
  getMobileAwareDpr,
  getMobileAwareGl,
  isCoarsePointerDevice,
} from "@/lib/webgl/mobileGl";

type SpiralStairCanvasProps = {
  containerClassName?: string;
  rotationSpeed?: number;
};

export default function SpiralStairCanvas({
  containerClassName = "absolute inset-0 w-full h-full",
  rotationSpeed = 0.002,
}: SpiralStairCanvasProps) {
  const images = companyData.heroSlideshow?.images ?? [];
  const mobile = isCoarsePointerDevice();

  if (images.length === 0) return null;

  const panelImages = mobile
    ? Array.from({ length: Math.min(8, Math.max(images.length, 6)) }, (_, i) =>
        images[i % images.length]
      )
    : images.length >= 10
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
        dpr={getMobileAwareDpr()}
        gl={getMobileAwareGl()}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SpiralHelix images={panelImages} rotationSpeed={rotationSpeed} />
        </Suspense>
      </Canvas>
    </div>
  );
}
