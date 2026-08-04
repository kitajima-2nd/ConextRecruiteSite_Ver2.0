"use client";

import { Canvas } from "@react-three/fiber";
import TruncatedIcosahedronModel from "./TruncatedIcosahedronModel";
import {
  getMobileAwareDpr,
  getMobileAwareGl,
} from "@/lib/webgl/mobileGl";

export default function TruncatedIcosahedronCanvas() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42, near: 0.1, far: 100 }}
        dpr={getMobileAwareDpr()}
        gl={getMobileAwareGl({ premultipliedAlpha: true })}
        style={{ background: "transparent" }}
        onCreated={({ gl }) => {
          // (0,0,0,0) クリアは透明合成で黒点になることがあるため、RGB は白のまま alpha 0
          gl.setClearColor(0xffffff, 0);
        }}
      >
        <TruncatedIcosahedronModel />
      </Canvas>
    </div>
  );
}
