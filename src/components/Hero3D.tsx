import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, Float, MeshTransmissionMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group, Mesh } from "three";
import * as THREE from "three";

/**
 * Stylized 3D pressure cooker built from primitives — a stainless-steel body,
 * domed lid, pressure regulator, and two handles. Rotates slowly on its axis.
 */
function Cooker() {
  const group = useRef<Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.25;
  });

  const steel = {
    color: new THREE.Color("#e6ebf2"),
    metalness: 1,
    roughness: 0.18,
    envMapIntensity: 1.3,
  };

  return (
    <group ref={group} position={[0, -0.3, 0]}>
      {/* Body */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[1.05, 1.0, 1.35, 96, 1, false]} />
        <meshStandardMaterial {...steel} />
      </mesh>
      {/* Bottom disc */}
      <mesh position={[0, -0.68, 0]} castShadow>
        <cylinderGeometry args={[1.02, 1.02, 0.06, 96]} />
        <meshStandardMaterial color="#9aa3b0" metalness={1} roughness={0.35} />
      </mesh>
      {/* Rim */}
      <mesh position={[0, 0.68, 0]} castShadow>
        <torusGeometry args={[1.05, 0.05, 24, 96]} />
        <meshStandardMaterial color="#c9d0da" metalness={1} roughness={0.22} />
      </mesh>
      {/* Lid dome */}
      <mesh position={[0, 0.78, 0]} castShadow>
        <sphereGeometry args={[1.06, 96, 96, 0, Math.PI * 2, 0, Math.PI / 2.6]} />
        <meshStandardMaterial {...steel} roughness={0.12} />
      </mesh>
      {/* Regulator stem */}
      <mesh position={[0, 1.12, 0]} castShadow>
        <cylinderGeometry args={[0.09, 0.09, 0.18, 32]} />
        <meshStandardMaterial color="#7d8593" metalness={1} roughness={0.35} />
      </mesh>
      {/* Regulator weight */}
      <mesh position={[0, 1.28, 0]} castShadow>
        <cylinderGeometry args={[0.16, 0.16, 0.14, 32]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.6} metalness={0.3} />
      </mesh>
      {/* Handles (bakelite) */}
      <Handle position={[1.28, 0.55, 0]} rotation={[0, 0, 0]} />
      <Handle position={[-1.28, 0.55, 0]} rotation={[0, Math.PI, 0]} />
    </group>
  );
}

function Handle({
  position,
  rotation,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
}) {
  const mesh = useRef<Mesh>(null);
  return (
    <group position={position} rotation={rotation}>
      <mesh ref={mesh} castShadow>
        <boxGeometry args={[0.5, 0.14, 0.28]} />
        <meshStandardMaterial color="#141821" roughness={0.55} metalness={0.15} />
      </mesh>
      <mesh position={[-0.28, 0, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.3, 24]} />
        <meshStandardMaterial color="#8a94a3" metalness={1} roughness={0.3} />
      </mesh>
    </group>
  );
}

/** A slow floating glass sphere for depth. */
function GlassBauble({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[0.35, 48, 48]} />
        <MeshTransmissionMaterial
          thickness={0.5}
          roughness={0.05}
          transmission={1}
          ior={1.35}
          chromaticAberration={0.04}
          backside
          color="#ffffff"
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.6, 5.2], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <spotLight
          position={[3, 6, 4]}
          angle={0.35}
          penumbra={0.8}
          intensity={2.4}
          castShadow
          shadow-mapSize={1024}
        />
        <spotLight position={[-4, 3, 2]} angle={0.5} penumbra={1} intensity={0.8} color="#E31E24" />
        <Environment preset="studio" />
        <Float speed={0.9} rotationIntensity={0.1} floatIntensity={0.35}>
          <Cooker />
        </Float>
        <GlassBauble position={[-2.1, 0.4, -0.6]} scale={0.7} />
        <GlassBauble position={[2.2, -0.2, -0.4]} scale={0.55} />
        <GlassBauble position={[1.6, 1.1, -1]} scale={0.35} />
        <ContactShadows
          position={[0, -1.35, 0]}
          opacity={0.35}
          blur={2.8}
          scale={9}
          far={3}
          color="#0B1D51"
        />
      </Suspense>
    </Canvas>
  );
}
