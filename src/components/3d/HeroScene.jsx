import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Edges } from '@react-three/drei';
import * as THREE from 'three';
import { isWebGLAvailable } from '../../utils/webglCheck';

// Stylized Floating Low-Poly Geometric Installation
function MonolithCluster({ prefersReducedMotion }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (prefersReducedMotion || !groupRef.current) return;
    const t = state.clock.getElapsedTime();
    // Subtle breathing / slow rotation
    groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.1;
    groupRef.current.rotation.x = Math.cos(t * 0.12) * 0.05;
  });

  return (
    <group ref={groupRef} position={[2.4, 0.1, -0.6]}>
      {/* Primary Matte Black Monolith */}
      <Float speed={prefersReducedMotion ? 0 : 1.2} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh position={[0.4, 0.1, 0]} rotation={[0.2, 0.4, 0.1]}>
          <boxGeometry args={[1.35, 2.5, 0.95]} />
          <meshStandardMaterial
            color="#141414"
            roughness={0.35}
            metalness={0.1}
            flatShading
          />
          <Edges threshold={15} color="#555555" />
        </mesh>
      </Float>

      {/* Secondary Low-Poly Octahedron */}
      <Float speed={prefersReducedMotion ? 0 : 1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh position={[-1.1, 1.1, -0.8]} rotation={[0.4, 0.2, 0.5]}>
          <octahedronGeometry args={[0.75, 0]} />
          <meshStandardMaterial
            color="#2A2A2A"
            roughness={0.4}
            metalness={0.2}
            flatShading
          />
          <Edges threshold={15} color="#8A8A8A" />
        </mesh>
      </Float>

      {/* Low-Poly Icosahedron Node */}
      <Float speed={prefersReducedMotion ? 0 : 0.9} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh position={[1.4, -1.0, -0.4]} rotation={[0.1, 0.6, 0.3]}>
          <icosahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial
            color="#3E3E3E"
            roughness={0.5}
            metalness={0.1}
            flatShading
          />
          <Edges threshold={15} color="#999999" />
        </mesh>
      </Float>

      {/* Architectural Thin Slab / Datum */}
      <Float speed={prefersReducedMotion ? 0 : 0.8} rotationIntensity={0.1} floatIntensity={0.2}>
        <mesh position={[-0.3, -1.4, 0.4]} rotation={[-0.1, 0.2, -0.05]}>
          <boxGeometry args={[2.4, 0.07, 1.2]} />
          <meshStandardMaterial
            color="#E2E2DC"
            roughness={0.6}
            metalness={0.05}
          />
          <Edges threshold={15} color="#B8B8B2" />
        </mesh>
      </Float>

      {/* Subtle Green Operational Data Beacons */}
      <group position={[0.4, 1.5, 0.5]}>
        <mesh>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshBasicMaterial color="#10B981" />
        </mesh>
      </group>

      <group position={[-1.1, 2.0, -0.8]}>
        <mesh>
          <boxGeometry args={[0.07, 0.07, 0.07]} />
          <meshBasicMaterial color="#10B981" />
        </mesh>
      </group>
    </group>
  );
}

// Technical Data Nodes / Telemetry Markers
function TechnicalDataNodes({ prefersReducedMotion }) {
  const nodes = useMemo(() => {
    return [
      { pos: [-3.2, 1.8, -1.5], size: 0.12, color: '#111111' },
      { pos: [-2.6, -1.2, -0.8], size: 0.1, color: '#666666' },
      { pos: [3.4, 2.2, -2.0], size: 0.14, color: '#333333' },
      { pos: [4.0, -0.8, -1.2], size: 0.09, color: '#10B981' },
      { pos: [-0.8, 2.4, -2.2], size: 0.08, color: '#8A8A8A' },
      { pos: [2.2, 2.6, -1.8], size: 0.1, color: '#555555' },
    ];
  }, []);

  return (
    <group>
      {nodes.map((node, i) => (
        <Float
          key={i}
          speed={prefersReducedMotion ? 0 : 1 + i * 0.2}
          rotationIntensity={0.2}
          floatIntensity={0.3}
        >
          <mesh position={node.pos}>
            <boxGeometry args={[node.size, node.size, node.size]} />
            <meshBasicMaterial color={node.color} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Camera Controller: Mouse Parallax & Scroll Interpolation
function CameraRig({ prefersReducedMotion }) {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 0, 7.5));
  const scrollOffset = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // Normalize scroll within first 1.5 viewport heights
      const maxScroll = window.innerHeight * 1.5;
      scrollOffset.current = Math.min(window.scrollY / maxScroll, 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    if (prefersReducedMotion) {
      camera.position.set(0, 0, 7.5);
      camera.lookAt(0, 0, 0);
      return;
    }

    // Normalized pointer coordinates [-1, 1]
    const mouseX = state.pointer.x * 0.9;
    const mouseY = state.pointer.y * 0.5;
    const scrollFactor = scrollOffset.current;

    // Camera moves gracefully with mouse parallax and pushes forward/tilts on scroll
    targetPos.current.x = mouseX * 1.2;
    targetPos.current.y = mouseY * 0.8 - scrollFactor * 1.8;
    targetPos.current.z = 7.5 - scrollFactor * 2.5;

    camera.position.lerp(targetPos.current, 0.05);
    camera.lookAt(0, -scrollFactor * 0.8, 0);
  });

  return null;
}

// Subtle Ground Grid Plane
function GroundGrid() {
  return (
    <group position={[0, -2.4, 0]}>
      {/* Subtle coordinate grid helper */}
      <gridHelper args={[40, 40, '#C8C8C2', '#E2E2DC']} position={[0, 0, 0]} />
      {/* Light horizontal shadow-catcher plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshBasicMaterial color="#F5F5F2" />
      </mesh>
    </group>
  );
}

// Main Hero Scene Container with WebGL Fallback Handling
export default function HeroScene() {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setHasWebGL(isWebGLAvailable());

    const checkReducedMotion = () => {
      setPrefersReducedMotion(
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      );
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkReducedMotion();
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!hasWebGL) {
    // Graceful 2D Fallback
    return (
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#D9D9D5_1px,transparent_1px),linear-gradient(to_bottom,#D9D9D5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    );
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 42 }}
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        {/* Off-white atmospheric fog matching #F5F5F2 */}
        <color attach="background" args={['#F5F5F2']} />
        <fog attach="fog" args={['#F5F5F2', 6, 17]} />

        {/* Minimal High-Quality Lighting */}
        <ambientLight intensity={0.85} />
        <directionalLight
          position={[6, 9, 6]}
          intensity={1.1}
          color="#FFFFFF"
        />
        <directionalLight
          position={[-5, 4, -3]}
          intensity={0.4}
          color="#ECECE6"
        />

        {/* 3D Elements */}
        <GroundGrid />
        <MonolithCluster prefersReducedMotion={prefersReducedMotion} />
        <TechnicalDataNodes prefersReducedMotion={prefersReducedMotion} />

        {/* Camera Control Rig */}
        <CameraRig prefersReducedMotion={prefersReducedMotion} />
      </Canvas>
    </div>
  );
}
