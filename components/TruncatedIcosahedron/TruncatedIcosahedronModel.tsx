"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { getTruncatedIcosahedronData } from "@/lib/geometry/truncatedIcosahedron";
import {
  getTruncatedIcosahedronTransform,
  truncatedIcosahedronScrollRef,
} from "@/hooks/useTruncatedIcosahedronScroll";

/** トリコロール外の例外色（コバルトブルー固定） */
const WIRE_COLOR = "#0047AB";

export default function TruncatedIcosahedronModel() {
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

    const scrollState = truncatedIcosahedronScrollRef.current;
    const time = state.clock.elapsedTime;
    const { scale, positionX, positionY, locked } =
      getTruncatedIcosahedronTransform(
        scrollState.globalProgress,
        scrollState.stageProgress,
        time,
        scrollState.stageIndex,
        state.viewport.width
      );

    group.scale.setScalar(scale);
    group.position.set(positionX, positionY, 0);

    const speed = locked ? 0.55 : 1;
    group.rotation.x += (0.28 + Math.sin(time * 0.7) * 0.12) * delta * speed;
    group.rotation.y += (0.42 + Math.cos(time * 0.55) * 0.18) * delta * speed;
    group.rotation.z += (0.16 + Math.sin(time * 1.1) * 0.08) * delta * speed;
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial
          color={WIRE_COLOR}
          toneMapped={false}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}
