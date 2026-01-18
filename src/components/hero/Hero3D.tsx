"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      <Canvas className="w-full h-full">
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 2, 1]} />
        <Sphere args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial
            color="#00ffff"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
          />
        </Sphere>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}