"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

type SlideImage = { path: string; alt: string };

type SpiralHelixProps = {
  images: SlideImage[];
  /** 1フレームあたりの Y 回転量（小さいほどゆっくり） */
  rotationSpeed?: number;
};

const BASE_HEIGHT = 1.0;

/** 螺旋上に配置。Y 軸回転のみで常に垂直（lookAt による傾きなし） */
function SpiralPanel({
  url,
  index,
  radius,
  heightStep,
  angleStep,
}: {
  url: string;
  index: number;
  radius: number;
  heightStep: number;
  angleStep: number;
}) {
  const texture = useTexture(url);

  const { x, y, z, yaw, planeWidth, planeHeight } = useMemo(() => {
    const angle = -index * angleStep;
    const px = radius * Math.cos(angle);
    const pz = radius * Math.sin(angle);
    const py = index * heightStep;
    // 水平面のみ向きを変え、上下は垂直のまま
    const pyaw = Math.atan2(-px, -pz);

    const img = texture.image as HTMLImageElement;
    const aspect =
      img?.width && img?.height ? img.width / img.height : 4 / 3;

    return {
      x: px,
      y: py,
      z: pz,
      yaw: pyaw,
      planeWidth: BASE_HEIGHT * aspect,
      planeHeight: BASE_HEIGHT,
    };
  }, [index, radius, heightStep, angleStep, texture]);

  return (
    <group position={[x, y, z]} rotation={[0, yaw, 0]}>
      <mesh>
        <planeGeometry args={[planeWidth, planeHeight]} />
        <meshBasicMaterial
          map={texture}
          transparent
          side={THREE.DoubleSide}
          opacity={0.88}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

export default function SpiralHelix({
  images,
  rotationSpeed = 0.002,
}: SpiralHelixProps) {
  const helixRef = useRef<THREE.Group>(null);

  const layout = useMemo(
    () => ({
      radius: 1.85,
      heightStep: 0.34,
      angleStep: Math.PI / 4,
    }),
    []
  );

  const yOffset = -((images.length - 1) * layout.heightStep) / 2;

  useFrame(() => {
    if (helixRef.current) {
      helixRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={helixRef} rotation={[0, 2.9, 0]} position={[0, yOffset, 0]}>
      {images.map((image, index) => (
        <SpiralPanel
          key={`${image.path}-${index}`}
          url={image.path}
          index={index}
          radius={layout.radius}
          heightStep={layout.heightStep}
          angleStep={layout.angleStep}
        />
      ))}
    </group>
  );
}
