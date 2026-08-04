"use client";

import { Canvas } from "@react-three/fiber";
import TruncatedIcosahedronModel from "./TruncatedIcosahedronModel";
import type { TruncatedIcosahedronScrollState } from "@/hooks/useTruncatedIcosahedronScroll";

type TruncatedIcosahedronCanvasProps = {
  scrollState: TruncatedIcosahedronScrollState;
};

export default function TruncatedIcosahedronCanvas({
  scrollState,
}: TruncatedIcosahedronCanvasProps) {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42, near: 0.1, far: 100 }}
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
          premultipliedAlpha: false,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
        onCreated={({ gl }) => {
          // (0,0,0,0) クリアは透明合成で黒点になることがあるため、RGB は白のまま alpha 0
          gl.setClearColor(0xffffff, 0);
        }}
      >
        <TruncatedIcosahedronModel scrollState={scrollState} />
      </Canvas>
    </div>
  );
}
