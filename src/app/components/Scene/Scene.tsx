"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Notebook3 } from "../models/Notebook3";
import { Notebook4 } from "../models/Notebook4";
import { OrbitControls } from "@react-three/drei";

interface sceneProps {
  video: string;
}

function Scene({ video }: sceneProps) {
  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{ position: [10, 4, 100], fov: 45 }}
        className="w-full h-full flex justify-center items-center"
      >
        {/* <Notebook3 video={video} /> */}
        <Notebook4 video={video} />

        {/* 
        <directionalLight
          position={[0, 10, 20]}
          color={"#ffffff"}
          intensity={1}
          target-position={[2, 5, 15]}
          castShadow={true}
          shadow-bias={-0.001}
        />
        <directionalLight
          position={[0, 20, -20]}
          color={"#ffffff"}
          intensity={1}
          target-position={[2, 5, 15]}
          castShadow={true}
          shadow-bias={-0.001}
        /> */}

        {/* <ambientLight color={"#ffffff"} intensity={54351} /> */}

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default Scene;
