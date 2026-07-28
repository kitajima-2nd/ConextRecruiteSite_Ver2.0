"use client";

import { Canvas } from "@react-three/fiber";
import TruncatedIcosahedronModel from "./TruncatedIcosahedronModel";
import type { TruncatedIcosahedronScrollState } from "@/hooks/useTruncatedIcosahedronScroll";
import { smoothstep } from "@/hooks/useTruncatedIcosahedronScroll";

type TruncatedIcosahedronCanvasProps = {
  scrollState: TruncatedIcosahedronScrollState;
};

export default function TruncatedIcosahedronCanvas({
  scrollState,
}: TruncatedIcosahedronCanvasProps) {
  const clipProgress = smoothstep(0.55, 0.72, scrollState.globalProgress);
  const clipLeftPct = (1 - clipProgress) * 40;
  // ほぼ 0% の clip-path を残すと WebGL 合成で黒点が出ることがあるため、意味のあるときだけ適用
  const clipApplied = clipProgress > 0.01 && clipLeftPct > 0.5;
  const clipLeft = `${clipLeftPct}%`;

  return (
    <div
      className="h-full w-full"
      style={{
        clipPath: clipApplied ? `inset(0 0 0 ${clipLeft})` : undefined,
        WebkitClipPath: clipApplied ? `inset(0 0 0 ${clipLeft})` : undefined,
        transition: "clip-path 0.05s linear",
      }}
    >
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
