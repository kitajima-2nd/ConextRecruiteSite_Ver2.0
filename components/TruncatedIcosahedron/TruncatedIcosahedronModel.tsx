"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { Segments, Segment } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { getTruncatedIcosahedronData } from "@/lib/geometry/truncatedIcosahedron";
import {
  getTruncatedIcosahedronTransform,
  type TruncatedIcosahedronScrollState,
} from "@/hooks/useTruncatedIcosahedronScroll";

/** 線の太さ（ピクセル単位。drei Segments / Line2 用） */
const LINE_WIDTH = 3;

type TruncatedIcosahedronModelProps = {
  scrollState: TruncatedIcosahedronScrollState;
};

export default function TruncatedIcosahedronModel({
  scrollState,
}: TruncatedIcosahedronModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { size } = useThree();
  const resolution = useMemo(
    () => new THREE.Vector2(size.width, size.height),
    [size.width, size.height]
  );

  const { vertices, edges } = useMemo(() => getTruncatedIcosahedronData(), []);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    const time = state.clock.elapsedTime;
    const { scale, positionX, positionY } = getTruncatedIcosahedronTransform(
      scrollState.globalProgress,
      scrollState.stageProgress,
      time
    );

    group.scale.setScalar(scale);
    group.position.set(positionX, positionY, 0);

    group.rotation.x += (0.28 + Math.sin(time * 0.7) * 0.12) * delta;
    group.rotation.y += (0.42 + Math.cos(time * 0.55) * 0.18) * delta;
    group.rotation.z += (0.16 + Math.sin(time * 1.1) * 0.08) * delta;
  });

  return (
    <group ref={groupRef}>
      <Segments
        lineWidth={LINE_WIDTH}
        resolution={resolution}
        transparent
        opacity={1}
      >
        {edges.map(([a, b], index) => (
          <Segment
            key={index}
            start={vertices[a]}
            end={vertices[b]}
            color="#8fd3ff"
          />
        ))}
      </Segments>
    </group>
  );
}
