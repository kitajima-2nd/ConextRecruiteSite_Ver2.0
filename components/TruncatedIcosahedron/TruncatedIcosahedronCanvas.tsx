"use client";

import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
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
  const clipLeft = `${(1 - clipProgress) * 40}%`;

  return (
    <div
      className="h-full w-full"
      style={{
        clipPath: clipProgress > 0.01 ? `inset(0 0 0 ${clipLeft})` : undefined,
        WebkitClipPath:
          clipProgress > 0.01 ? `inset(0 0 0 ${clipLeft})` : undefined,
        transition: "clip-path 0.05s linear",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42, near: 0.1, far: 100 }}
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <TruncatedIcosahedronModel scrollState={scrollState} />
        <EffectComposer>
          <Bloom
            intensity={2.0}
            luminanceThreshold={3.0}
            luminanceSmoothing={0.3}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
