"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { getTruncatedIcosahedronData } from "@/lib/geometry/truncatedIcosahedron";
import {
  getTruncatedIcosahedronTransform,
  type TruncatedIcosahedronScrollState,
} from "@/hooks/useTruncatedIcosahedronScroll";

type TruncatedIcosahedronModelProps = {
  scrollState: TruncatedIcosahedronScrollState;
};

export default function TruncatedIcosahedronModel({
  scrollState,
}: TruncatedIcosahedronModelProps) {
  const groupRef = useRef<THREE.Group>(null);

  const { linePositions } = useMemo(() => getTruncatedIcosahedronData(), []);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );
    return geometry;
  }, [linePositions]);

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
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial
          color="#7dd3fc"
          transparent
          opacity={0.85}
          linewidth={1}
        />
      </lineSegments>
    </group>
  );
}
