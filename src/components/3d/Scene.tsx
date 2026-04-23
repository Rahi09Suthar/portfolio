import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, color, speed = 1, size = 1 }: { position: [number, number, number], color: string, speed?: number, size?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.01 * speed;
    meshRef.current.rotation.y += 0.01 * speed;
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y += Math.sin(time * speed) * 0.005;
  });

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[size, 0]} />
        <meshStandardMaterial color={color} wireframe />
      </mesh>
    </Float>
  );
};

const AnimatedSphere = () => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
        />
      </Sphere>
    </Float>
  );
};

export const Scene = () => {
  return (
    <div className="absolute inset-0 -z-10 bg-dark overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <AnimatedSphere />
        
        <FloatingShape position={[-4, 2, -2]} color="#8b5cf6" speed={0.5} size={0.5} />
        <FloatingShape position={[4, -2, -1]} color="#0ea5e9" speed={0.7} size={0.7} />
        <FloatingShape position={[-3, -3, -3]} color="#8b5cf6" speed={0.4} size={0.3} />
        <FloatingShape position={[5, 3, -4]} color="#0ea5e9" speed={0.6} size={0.4} />
      </Canvas>
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(139,92,246,0.15),transparent_50%)]" />
    </div>
  );
};
