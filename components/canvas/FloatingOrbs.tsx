"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface OrbProps {
  position: [number, number, number];
  color: string;
  distort: number;
  speed: number;
  scale: number;
  floatOffset?: number;
}

function Orb({ position, color, distort, speed, scale, floatOffset = 0 }: OrbProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * speed * 0.15;
    meshRef.current.rotation.y = t * speed * 0.25;
    meshRef.current.position.y =
      position[1] + Math.sin(t * speed * 0.4 + floatOffset) * 0.25;
    meshRef.current.position.x =
      position[0] + Math.cos(t * speed * 0.3 + floatOffset) * 0.1;
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        distort={distort}
        speed={1.5}
        roughness={0.05}
        metalness={0.15}
        transparent
        opacity={0.6}
      />
    </Sphere>
  );
}

export default function FloatingOrbs() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[8, 8, 4]} intensity={2.0} color="#F2B8D4" />
      <pointLight position={[-8, -4, -4]} intensity={1.2} color="#7ECDE8" />
      <pointLight position={[0, -6, 3]} intensity={0.6} color="#FF6EB4" />

      <Orb
        position={[-4.5, 1.5, -2]}
        color="#E8B4CB"
        distort={0.38}
        speed={0.65}
        scale={2.8}
        floatOffset={0}
      />
      <Orb
        position={[4.2, -1.5, -4]}
        color="#7ECDE8"
        distort={0.28}
        speed={0.5}
        scale={2.2}
        floatOffset={1.2}
      />
      <Orb
        position={[1.5, 3.5, -5]}
        color="#F2B8D4"
        distort={0.45}
        speed={0.8}
        scale={1.8}
        floatOffset={2.4}
      />
      <Orb
        position={[-1.5, -3.5, -3]}
        color="#FF6EB4"
        distort={0.32}
        speed={0.6}
        scale={1.4}
        floatOffset={0.8}
      />
    </Canvas>
  );
}



