import { SceneRenderer } from "./renderScene";
import { Canvas } from "@react-three/fiber";
import React from "react";

export default function Background() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "#010208",
      }}
    >
      <SceneRenderer />
    </Canvas>
  );
}
