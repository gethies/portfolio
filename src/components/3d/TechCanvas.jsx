import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleStarfield(props) {
  const ref = useRef();
  
  // Custom 3D particle sphere
  const sphere = useMemo(() => {
    const count = 6000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 2.8;
      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Smooth mouse parallax movement
      const pointerX = state.pointer.x * 0.15;
      const pointerY = state.pointer.y * 0.15;
      
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -pointerY - delta / 15, 0.05);
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, pointerX - delta / 20, 0.05);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#38bdf8"
          size={0.0035}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

function FloatingTechOrb() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={[2.5, 0.5, -1.2]}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#818cf8"
          attach="material"
          distort={0.4}
          speed={2.2}
          roughness={0.15}
          metalness={0.85}
          wireframe={true}
        />
      </mesh>
    </Float>
  );
}

function SecondaryOrb() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
      <mesh ref={meshRef} position={[-2.6, -1, -1.8]}>
        <torusKnotGeometry args={[0.6, 0.18, 128, 32]} />
        <meshStandardMaterial
          color="#34d399"
          wireframe
          roughness={0.1}
          metalness={0.9}
          emissive="#059669"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

function FloatingCube() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.8} floatIntensity={1}>
      <mesh ref={meshRef} position={[-2.2, 1.4, -2]}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color="#c084fc"
          wireframe
          roughness={0.1}
          metalness={0.9}
          emissive="#9333ea"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

export default function TechCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 1.2], fov: 60 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color="#38bdf8" intensity={2} />
        <pointLight position={[10, -5, 5]} color="#c084fc" intensity={1.5} />
        <ParticleStarfield />
        <FloatingTechOrb />
        <SecondaryOrb />
        <FloatingCube />
      </Canvas>
    </div>
  );
}
