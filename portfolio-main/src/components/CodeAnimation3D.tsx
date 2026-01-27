import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Floating code bracket
const FloatingBracket: React.FC<{
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  speed: number;
}> = ({ position, rotation, color, speed }) => {
  const meshRef = useRef<THREE.Group>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed + position[0]) * 0.3;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={meshRef} position={position} rotation={rotation}>
      {/* Left bracket part */}
      <mesh position={[-0.1, 0, 0]}>
        <boxGeometry args={[0.05, 0.4, 0.05]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.175, 0]}>
        <boxGeometry args={[0.15, 0.05, 0.05]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.175, 0]}>
        <boxGeometry args={[0.15, 0.05, 0.05]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
};

// Laptop component
const Laptop: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} rotation={[0.1, 0.3, 0]}>
      {/* Laptop base/keyboard */}
      <mesh position={[0, -0.05, 0.3]}>
        <boxGeometry args={[2.4, 0.1, 1.6]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Keyboard surface */}
      <mesh position={[0, 0.01, 0.3]}>
        <boxGeometry args={[2.2, 0.02, 1.4]} />
        <meshStandardMaterial color="#16213e" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* Keyboard keys (simplified grid) */}
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 10 }).map((_, col) => (
          <mesh
            key={`${row}-${col}`}
            position={[-0.9 + col * 0.2, 0.03, 0.6 - row * 0.25]}
          >
            <boxGeometry args={[0.15, 0.02, 0.18]} />
            <meshStandardMaterial color="#0f3460" metalness={0.3} roughness={0.5} />
          </mesh>
        ))
      )}

      {/* Trackpad */}
      <mesh position={[0, 0.02, 0.85]}>
        <boxGeometry args={[0.8, 0.01, 0.5]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.7} roughness={0.2} />
      </mesh>

      {/* Screen hinge */}
      <mesh position={[0, 0.05, -0.5]} rotation={[-0.3, 0, 0]}>
        <boxGeometry args={[2.4, 0.08, 0.1]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Screen back */}
      <group position={[0, 0.9, -0.75]} rotation={[-0.3, 0, 0]}>
        <mesh>
          <boxGeometry args={[2.4, 1.6, 0.08]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Screen display */}
        <mesh ref={screenRef} position={[0, 0, 0.05]}>
          <boxGeometry args={[2.2, 1.4, 0.01]} />
          <meshStandardMaterial 
            color="#0a0a0a" 
            emissive="#60a5fa" 
            emissiveIntensity={0.1}
            metalness={0.1} 
            roughness={0.1} 
          />
        </mesh>

        {/* Code lines on screen */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh key={i} position={[-0.7 + Math.random() * 0.3, 0.5 - i * 0.15, 0.06]}>
            <boxGeometry args={[0.4 + Math.random() * 0.8, 0.04, 0.01]} />
            <meshStandardMaterial
              color={i % 3 === 0 ? "#60a5fa" : i % 3 === 1 ? "#34d399" : "#f472b6"}
              emissive={i % 3 === 0 ? "#60a5fa" : i % 3 === 1 ? "#34d399" : "#f472b6"}
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}

        {/* Screen glow */}
        <pointLight position={[0, 0, 0.5]} intensity={0.5} color="#60a5fa" distance={3} />
      </group>

      {/* Apple-like logo (just a circle) */}
      <mesh position={[0, 0.9, -0.82]} rotation={[-0.3, 0, 0]}>
        <circleGeometry args={[0.15, 32]} />
        <meshStandardMaterial color="#3b82f6" emissive="#60a5fa" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
};

// Orbiting particles
const OrbitingParticles: React.FC = () => {
  const particlesRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const count = 100;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.5 + Math.random() * 1;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#60a5fa" transparent opacity={0.8} sizeAttenuation />
    </points>
  );
};

// Floating code symbols
const FloatingSymbols: React.FC = () => {
  const symbols = [
    { pos: [2, 1, 0] as [number, number, number], rot: [0, 0, 0] as [number, number, number], color: "#60a5fa", speed: 1.2 },
    { pos: [-2, 0.5, 1] as [number, number, number], rot: [0, Math.PI, 0] as [number, number, number], color: "#34d399", speed: 0.8 },
    { pos: [1.5, -0.5, -1.5] as [number, number, number], rot: [0, 0.5, 0] as [number, number, number], color: "#f472b6", speed: 1.5 },
    { pos: [-1.5, 1.2, -1] as [number, number, number], rot: [0, -0.5, 0] as [number, number, number], color: "#fbbf24", speed: 1 },
    { pos: [2.2, -0.8, 0.5] as [number, number, number], rot: [0, 1, 0] as [number, number, number], color: "#a78bfa", speed: 1.3 },
    { pos: [-2.2, -0.3, -0.5] as [number, number, number], rot: [0, -1, 0] as [number, number, number], color: "#fb7185", speed: 0.9 },
  ];

  return (
    <>
      {symbols.map((sym, i) => (
        <FloatingBracket key={i} position={sym.pos} rotation={sym.rot} color={sym.color} speed={sym.speed} />
      ))}
    </>
  );
};

// Scene component
const Scene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-5, 3, -5]} intensity={0.5} color="#60a5fa" />
      <spotLight position={[0, 5, 2]} angle={0.4} penumbra={1} intensity={0.8} color="#93c5fd" />

      <Laptop />
      <FloatingSymbols />
      <OrbitingParticles />
    </>
  );
};

const CodeAnimation3D: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default CodeAnimation3D;
