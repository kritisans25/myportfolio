import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Edges, Line } from '@react-three/drei';
import * as THREE from 'three';

/* ==========================================================================
   ZONE 01: INTRO / IDENTITY (Z = 0) — MINIMAL MONOCHROME
   ========================================================================== */
export function IntroZone({ prefersReducedMotion, mouse }) {
  const monolithRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    if (prefersReducedMotion) return;
    const t = state.clock.getElapsedTime();
    if (monolithRef.current) {
      monolithRef.current.rotation.y = Math.sin(t * 0.2) * 0.08 + mouse.x * 0.15;
      monolithRef.current.rotation.x = Math.cos(t * 0.15) * 0.04 - mouse.y * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.1;
    }
  });

  return (
    <group position={[2.8, 0, 0]}>
      {/* Architectural Platform */}
      <mesh position={[0, -2.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[5.2, 5.8, 0.4, 8]} />
        <meshStandardMaterial color="#EAEAE6" roughness={0.7} flatShading />
        <Edges threshold={20} color="#D0D0C8" />
      </mesh>

      {/* Architectural Monolith */}
      <group ref={monolithRef} position={[0, 0.2, 0]}>
        <mesh>
          <boxGeometry args={[1.9, 4.0, 1.3]} />
          <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.1} flatShading />
          <Edges threshold={15} color="#4A4A4A" />
        </mesh>
      </group>

      {/* Orbital Data Ring */}
      <group ref={ringRef} position={[0, 0.5, 0]} rotation={[0.4, 0.2, 0]}>
        <mesh>
          <torusGeometry args={[2.8, 0.02, 8, 48]} />
          <meshBasicMaterial color="#8A8A8A" />
        </mesh>
      </group>

      {/* Low-Poly Flanking Shapes */}
      <Float speed={prefersReducedMotion ? 0 : 1} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh position={[-2.2, 0.8, -1]} rotation={[0.2, 0.5, 0]}>
          <octahedronGeometry args={[0.95, 0]} />
          <meshStandardMaterial color="#222222" roughness={0.4} flatShading />
          <Edges threshold={15} color="#666666" />
        </mesh>
      </Float>

      <Float speed={prefersReducedMotion ? 0 : 0.8} rotationIntensity={0.15} floatIntensity={0.25}>
        <mesh position={[2.6, -0.2, -0.8]} rotation={[0.3, 0.2, 0.4]}>
          <boxGeometry args={[1.1, 2.2, 0.9]} />
          <meshStandardMaterial color="#333333" roughness={0.4} flatShading />
          <Edges threshold={15} color="#777777" />
        </mesh>
      </Float>
    </group>
  );
}

/* ==========================================================================
   ZONE 02: OPSMONITOR (Z = -20) — MONOCHROME + VIBRANT EMERALD TELEMETRY
   ========================================================================== */
export function OpsMonitorZone({ prefersReducedMotion, mouse, onSelectProject }) {
  const rackRef = useRef();
  const sparklineRef = useRef();

  const sparklinePoints = useMemo(() => {
    const pts = [];
    const count = 30;
    for (let i = 0; i < count; i++) {
      const x = (i / count) * 4 - 2;
      const y = Math.sin(i * 0.6) * 0.25 + (i % 3 === 0 ? 0.2 : -0.1);
      pts.push(new THREE.Vector3(x, y, 0));
    }
    return pts;
  }, []);

  useFrame((state) => {
    if (prefersReducedMotion) return;
    const t = state.clock.getElapsedTime();
    if (rackRef.current) {
      rackRef.current.rotation.y = mouse.x * 0.12;
      rackRef.current.rotation.x = -mouse.y * 0.08;
    }
    if (sparklineRef.current) {
      sparklineRef.current.position.y = -0.6 + Math.sin(t * 2) * 0.04;
    }
  });

  return (
    <group position={[0, 0, -20]}>
      {/* Foundation Server Floor with subtle emerald telemetry grid line */}
      <mesh position={[0, -2.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 10]} />
        <meshStandardMaterial color="#E5E5E0" roughness={0.8} />
        <Edges threshold={15} color="#D0D0C8" />
      </mesh>

      {/* Main Server Tower Cluster */}
      <group ref={rackRef}>
        {/* Central Server Rack */}
        <mesh
          position={[0, 0.4, 0]}
          onClick={() => onSelectProject('opsmonitor')}
          className="cursor-pointer"
        >
          <boxGeometry args={[2.2, 4.6, 1.6]} />
          <meshStandardMaterial color="#111111" roughness={0.35} flatShading />
          <Edges threshold={15} color="#555555" />
        </mesh>

        {/* Server Slot Louvers & Emerald LEDs */}
        {[-1.4, -0.7, 0.0, 0.7, 1.4, 2.0].map((y, idx) => (
          <group key={idx} position={[0, y, 0.81]}>
            <mesh>
              <boxGeometry args={[1.9, 0.2, 0.05]} />
              <meshStandardMaterial color="#1A1A1A" roughness={0.2} />
            </mesh>
            <mesh position={[0.75, 0, 0.04]}>
              <sphereGeometry args={[0.04, 8, 8]} />
              <meshBasicMaterial color="#10B981" />
            </mesh>
          </group>
        ))}

        {/* Left Server Tower */}
        <mesh position={[-2.4, -0.2, -0.6]}>
          <boxGeometry args={[1.6, 3.4, 1.4]} />
          <meshStandardMaterial color="#1A1A1A" roughness={0.4} flatShading />
          <Edges threshold={15} color="#444444" />
        </mesh>

        {/* Right Server Tower */}
        <mesh position={[2.4, -0.1, -0.6]}>
          <boxGeometry args={[1.6, 3.6, 1.4]} />
          <meshStandardMaterial color="#1A1A1A" roughness={0.4} flatShading />
          <Edges threshold={15} color="#444444" />
        </mesh>
      </group>

      {/* Physical 3D Telemetry Vertical Bars with Emerald Accents */}
      <group position={[0, -0.4, 1.8]}>
        {/* CPU Bar (23%) */}
        <group position={[-1.2, 0, 0]}>
          <mesh position={[0, 0.46, 0]}>
            <boxGeometry args={[0.3, 0.92, 0.3]} />
            <meshStandardMaterial color="#10B981" roughness={0.3} metalness={0.1} />
          </mesh>
          <mesh position={[0, -0.05, 0]}>
            <boxGeometry args={[0.38, 0.1, 0.38]} />
            <meshStandardMaterial color="#D9D9D5" />
          </mesh>
        </group>

        {/* RAM Bar (68%) */}
        <group position={[0, 0, 0]}>
          <mesh position={[0, 1.36, 0]}>
            <boxGeometry args={[0.3, 2.72, 0.3]} />
            <meshStandardMaterial color="#059669" roughness={0.3} metalness={0.1} />
          </mesh>
          <mesh position={[0, -0.05, 0]}>
            <boxGeometry args={[0.38, 0.1, 0.38]} />
            <meshStandardMaterial color="#D9D9D5" />
          </mesh>
        </group>

        {/* DISK Bar (54%) */}
        <group position={[1.2, 0, 0]}>
          <mesh position={[0, 1.08, 0]}>
            <boxGeometry args={[0.3, 2.16, 0.3]} />
            <meshStandardMaterial color="#10B981" roughness={0.3} metalness={0.1} />
          </mesh>
          <mesh position={[0, -0.05, 0]}>
            <boxGeometry args={[0.38, 0.1, 0.38]} />
            <meshStandardMaterial color="#D9D9D5" />
          </mesh>
        </group>
      </group>

      {/* Glowing Emerald Sparkline Waveform */}
      <group ref={sparklineRef} position={[0, -0.6, 2.4]}>
        <Line points={sparklinePoints} color="#10B981" lineWidth={2.5} />
      </group>
    </group>
  );
}

/* ==========================================================================
   ZONE 03: MACHINE LEARNING (Z = -40) — ELECTRIC BLUE / CYAN DATA OCEAN
   ========================================================================== */
export function MachineLearningZone({ prefersReducedMotion, mouse, onSelectProject }) {
  const coreRef = useRef();
  const particleGroupRef = useRef();

  // Biometric data stream particles in cyan & electric blue
  const particles = useMemo(() => {
    const coords = [];
    const colors = ['#06B6D4', '#3B82F6', '#0284C7', '#60A5FA', '#38BDF8'];
    for (let i = 0; i < 180; i++) {
      const radius = 2.2 + Math.random() * 3.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      coords.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: (Math.random() - 0.5) * 4.2,
        z: radius * Math.cos(phi),
        size: 0.05 + Math.random() * 0.06,
        color: colors[i % colors.length],
      });
    }
    return coords;
  }, []);

  useFrame((state) => {
    if (prefersReducedMotion) return;
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.3 + mouse.x * 0.2;
      coreRef.current.rotation.x = t * 0.18 - mouse.y * 0.1;
    }
    if (particleGroupRef.current) {
      particleGroupRef.current.rotation.y = -t * 0.1;
    }
  });

  return (
    <group position={[1.5, 0, -40]}>
      {/* Central Cyan-Infused Computational Neural Core */}
      <group
        ref={coreRef}
        position={[0, 0.5, 0]}
        onClick={() => onSelectProject('stress-monitoring')}
        className="cursor-pointer"
      >
        <mesh>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial color="#0C4A6E" roughness={0.3} metalness={0.4} flatShading />
          <Edges threshold={10} color="#38BDF8" />
        </mesh>

        <mesh>
          <dodecahedronGeometry args={[1.0, 0]} />
          <meshStandardMaterial color="#1E3A8A" roughness={0.3} metalness={0.5} flatShading />
          <Edges threshold={10} color="#60A5FA" />
        </mesh>

        {/* Glowing Cyan ~90% Accuracy Crystal */}
        <mesh position={[0, 1.8, 0]}>
          <octahedronGeometry args={[0.24, 0]} />
          <meshBasicMaterial color="#06B6D4" />
        </mesh>
      </group>

      {/* Orbital Blue / Cyan Biometric Data Streams */}
      <group ref={particleGroupRef}>
        {particles.map((p, idx) => (
          <mesh key={idx} position={[p.x, p.y, p.z]}>
            <boxGeometry args={[p.size, p.size, p.size]} />
            <meshBasicMaterial color={p.color} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

/* ==========================================================================
   ZONE 04: CBSE OCR EVALUATION (Z = -60) — WARM ORANGE / AMBER SCANNING
   ========================================================================== */
export function OcrVisionZone({ prefersReducedMotion, mouse, onSelectProject }) {
  const paperRef = useRef();
  const scanLineRef = useRef();

  useFrame((state) => {
    if (prefersReducedMotion) return;
    const t = state.clock.getElapsedTime();
    if (paperRef.current) {
      paperRef.current.rotation.y = -0.2 + mouse.x * 0.12;
      paperRef.current.rotation.x = 0.15 - mouse.y * 0.08;
    }
    if (scanLineRef.current) {
      scanLineRef.current.position.y = Math.sin(t * 1.8) * 1.6;
    }
  });

  return (
    <group position={[-1.8, 0, -60]}>
      {/* Floating Exam Paper Slab */}
      <group
        ref={paperRef}
        position={[0, 0.4, 0]}
        onClick={() => onSelectProject('cbse-evaluator')}
        className="cursor-pointer"
      >
        <mesh>
          <boxGeometry args={[3.2, 4.4, 0.08]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.7} />
          <Edges threshold={20} color="#F59E0B" />
        </mesh>

        {/* Handwritten Script Strokes in Charcoal */}
        {[-1.5, -1.1, -0.7, -0.3, 0.1, 0.5, 0.9, 1.3].map((y, idx) => (
          <mesh key={idx} position={[(idx % 2 === 0 ? 0.2 : -0.2), y, 0.05]}>
            <boxGeometry args={[2.2 + (idx % 3) * 0.3, 0.06, 0.01]} />
            <meshBasicMaterial color="#262626" />
          </mesh>
        ))}

        {/* Warm Amber Bounding Box */}
        <mesh position={[0.4, -0.3, 0.06]}>
          <planeGeometry args={[1.2, 0.5]} />
          <meshBasicMaterial color="#F59E0B" wireframe />
        </mesh>

        {/* Luminous Warm Orange / Amber Laser Beam */}
        <group ref={scanLineRef}>
          <mesh position={[0, 0, 0.08]}>
            <boxGeometry args={[3.4, 0.05, 0.05]} />
            <meshBasicMaterial color="#EA580C" />
          </mesh>
        </group>
      </group>

      {/* Floating Warm Amber Score Badge (8.5 / 10) */}
      <Float speed={prefersReducedMotion ? 0 : 1.2} floatIntensity={0.3}>
        <mesh position={[2.4, 1.4, 0.6]}>
          <boxGeometry args={[1.5, 0.75, 0.3]} />
          <meshStandardMaterial color="#D97706" roughness={0.3} metalness={0.2} flatShading />
          <Edges threshold={15} color="#FEF3C7" />
        </mesh>
      </Float>
    </group>
  );
}

/* ==========================================================================
   ZONE 05: AGRIVISION (Z = -80) — GREEN / SUN YELLOW / TERRACOTTA LANDSCAPE
   ========================================================================== */
export function AgriVisionZone({ prefersReducedMotion, mouse, onSelectProject }) {
  const terrainRef = useRef();
  const sunRef = useRef();

  useFrame((state) => {
    if (prefersReducedMotion) return;
    const t = state.clock.getElapsedTime();
    if (terrainRef.current) {
      terrainRef.current.rotation.y = mouse.x * 0.15;
    }
    if (sunRef.current) {
      sunRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <group position={[0, 0, -80]}>
      {/* Golden Warm Weather Orb / Sun Data Node */}
      <group ref={sunRef} position={[3.2, 2.6, -1]}>
        <mesh>
          <icosahedronGeometry args={[0.7, 1]} />
          <meshStandardMaterial color="#EAB308" roughness={0.2} metalness={0.4} flatShading />
          <Edges threshold={10} color="#FEF08A" />
        </mesh>
      </group>

      {/* Stepped Low-Poly Agricultural Terraces */}
      <group
        ref={terrainRef}
        position={[0, -0.6, 0]}
        onClick={() => onSelectProject('agrivision')}
        className="cursor-pointer"
      >
        {/* Tier 1: Terracotta Earth Base */}
        <mesh position={[0, -1.0, 0]}>
          <boxGeometry args={[6.2, 0.5, 5.2]} />
          <meshStandardMaterial color="#78350F" roughness={0.8} flatShading />
          <Edges threshold={15} color="#92400E" />
        </mesh>

        {/* Tier 2: Rich Soil / Mineral Layer */}
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[4.8, 0.5, 4.0]} />
          <meshStandardMaterial color="#A16207" roughness={0.8} flatShading />
          <Edges threshold={15} color="#CA8A04" />
        </mesh>

        {/* Tier 3: Vibrant Green Crop Rows Terrace */}
        <mesh position={[0, 0.0, 0]}>
          <boxGeometry args={[3.4, 0.5, 3.0]} />
          <meshStandardMaterial color="#16A34A" roughness={0.7} flatShading />
          <Edges threshold={15} color="#4ADE80" />
        </mesh>

        {/* Stylized Low-Poly Crop Sprouts in Fresh Lime/Green */}
        {[-1.0, 0, 1.0].map((x, xi) =>
          [-0.8, 0.8].map((z, zi) => (
            <group key={`${xi}-${zi}`} position={[x, 0.45, z]}>
              <mesh position={[0, 0.15, 0]} rotation={[0, (xi + zi) * 0.4, 0]}>
                <coneGeometry args={[0.15, 0.4, 4]} />
                <meshStandardMaterial color="#84CC16" flatShading />
              </mesh>
            </group>
          ))
        )}

        {/* NPK Sensor Pins (Nitrogen: Green, Phosphorus: Amber, Potassium: Yellow) */}
        <group position={[-1.2, 0.6, 1.2]}>
          <mesh>
            <cylinderGeometry args={[0.02, 0.02, 0.7, 8]} />
            <meshBasicMaterial color="#475569" />
          </mesh>
          <mesh position={[0, 0.4, 0]}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshBasicMaterial color="#22C55E" />
          </mesh>
        </group>

        <group position={[0, 0.6, 1.2]}>
          <mesh>
            <cylinderGeometry args={[0.02, 0.02, 0.7, 8]} />
            <meshBasicMaterial color="#475569" />
          </mesh>
          <mesh position={[0, 0.4, 0]}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshBasicMaterial color="#F59E0B" />
          </mesh>
        </group>

        <group position={[1.2, 0.6, 1.2]}>
          <mesh>
            <cylinderGeometry args={[0.02, 0.02, 0.7, 8]} />
            <meshBasicMaterial color="#475569" />
          </mesh>
          <mesh position={[0, 0.4, 0]}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshBasicMaterial color="#EAB308" />
          </mesh>
        </group>
      </group>
    </group>
  );
}

/* ==========================================================================
   ZONE 06: BEYOND CODE (Z = -100) — VIBRANT, EXPRESSIVE MULTI-COLOR DESIGN STUDIO
   ========================================================================== */
export function BeyondCodeZone({ prefersReducedMotion, mouse, onOpenEditorialSheet }) {
  const studioRef = useRef();

  useFrame((state) => {
    if (prefersReducedMotion) return;
    const t = state.clock.getElapsedTime();
    if (studioRef.current) {
      studioRef.current.rotation.y = mouse.x * 0.18 + Math.sin(t * 0.15) * 0.05;
      studioRef.current.rotation.x = -mouse.y * 0.12;
    }
  });

  return (
    <group position={[0, 0, -100]}>
      <group
        ref={studioRef}
        onClick={onOpenEditorialSheet}
        className="cursor-pointer"
      >
        {/* Poster 1: Deep Cobalt Blue Artboard (Stochastic branding) */}
        <Float speed={prefersReducedMotion ? 0 : 1.2} floatIntensity={0.3}>
          <mesh position={[-2.4, 1.2, -0.6]} rotation={[0.05, 0.25, -0.05]}>
            <boxGeometry args={[2.4, 3.4, 0.06]} />
            <meshStandardMaterial color="#2563EB" roughness={0.3} metalness={0.1} flatShading />
            <Edges threshold={15} color="#93C5FD" />
          </mesh>
        </Float>

        {/* Poster 2: Radiant Coral Red Artboard (Dream Team creative direction) */}
        <Float speed={prefersReducedMotion ? 0 : 1.5} floatIntensity={0.4}>
          <mesh position={[2.2, 1.0, -0.4]} rotation={[-0.08, -0.22, 0.06]}>
            <boxGeometry args={[2.2, 3.2, 0.06]} />
            <meshStandardMaterial color="#F43F5E" roughness={0.3} metalness={0.1} flatShading />
            <Edges threshold={15} color="#FDA4AF" />
          </mesh>
        </Float>

        {/* Central Pure White Editorial Typography Sheet */}
        <Float speed={prefersReducedMotion ? 0 : 0.9} floatIntensity={0.25}>
          <mesh position={[0, 0.1, 0.6]} rotation={[0.02, 0.05, 0]}>
            <boxGeometry args={[2.6, 3.6, 0.06]} />
            <meshStandardMaterial color="#FFFFFF" roughness={0.8} />
            <Edges threshold={15} color="#111111" />
          </mesh>
        </Float>

        {/* Floating Abstract Creative Solids: Violet Octahedron, Sunshine Torus, Mint Prism */}
        <Float speed={prefersReducedMotion ? 0 : 1.8} floatIntensity={0.5}>
          <mesh position={[-1.2, 2.8, 0.4]} rotation={[0.4, 0.2, 0.5]}>
            <octahedronGeometry args={[0.55, 0]} />
            <meshStandardMaterial color="#8B5CF6" roughness={0.3} metalness={0.2} flatShading />
            <Edges threshold={10} color="#DDD6FE" />
          </mesh>
        </Float>

        <Float speed={prefersReducedMotion ? 0 : 1.4} floatIntensity={0.35}>
          <mesh position={[1.4, -1.2, 0.8]} rotation={[0.6, 0.3, 0]}>
            <torusGeometry args={[0.5, 0.12, 12, 32]} />
            <meshStandardMaterial color="#FBBF24" roughness={0.3} metalness={0.1} />
          </mesh>
        </Float>

        <Float speed={prefersReducedMotion ? 0 : 1.6} floatIntensity={0.4}>
          <mesh position={[-2.8, -1.0, 0.2]} rotation={[0.1, 0.5, 0.3]}>
            <boxGeometry args={[0.7, 0.7, 0.7]} />
            <meshStandardMaterial color="#10B981" roughness={0.3} flatShading />
            <Edges threshold={10} color="#A7F3D0" />
          </mesh>
        </Float>
      </group>
    </group>
  );
}

/* ==========================================================================
   ZONE 07: ABOUT (Z = -120) — CALM HARMONIC TECHNICAL + CREATIVE FUSION
   ========================================================================== */
export function AboutZone({ prefersReducedMotion, mouse }) {
  const fusionRef = useRef();

  useFrame((state) => {
    if (prefersReducedMotion) return;
    const t = state.clock.getElapsedTime();
    if (fusionRef.current) {
      fusionRef.current.rotation.y = Math.sin(t * 0.15) * 0.08 + mouse.x * 0.1;
    }
  });

  return (
    <group position={[0, 0, -120]}>
      <group ref={fusionRef}>
        {/* Structured Engineering Pillar (Charcoal/Titanium) */}
        <mesh position={[-1.0, 0.4, 0]}>
          <boxGeometry args={[1.4, 3.8, 1.2]} />
          <meshStandardMaterial color="#1E293B" roughness={0.4} metalness={0.3} flatShading />
          <Edges threshold={15} color="#64748B" />
        </mesh>

        {/* Expressive Creative Prism (Cobalt & Violet accents) */}
        <mesh position={[1.0, 0.6, 0.2]} rotation={[0.2, 0.4, 0.1]}>
          <octahedronGeometry args={[1.3, 0]} />
          <meshStandardMaterial color="#4F46E5" roughness={0.3} metalness={0.2} flatShading />
          <Edges threshold={15} color="#C7D2FE" />
        </mesh>

        {/* Central Luminous Synthesis Core */}
        <mesh position={[0, 0.5, 0.8]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshBasicMaterial color="#38BDF8" />
        </mesh>
      </group>
    </group>
  );
}

/* ==========================================================================
   ZONE 08: CONTACT / TRANSMISSION (Z = -140) — MONUMENTAL PORTAL & BEACON
   ========================================================================== */
export function ContactZone({ prefersReducedMotion, mouse }) {
  const beaconRef = useRef();

  useFrame((state) => {
    if (prefersReducedMotion) return;
    const t = state.clock.getElapsedTime();
    if (beaconRef.current) {
      beaconRef.current.rotation.y = t * 0.2 + mouse.x * 0.1;
    }
  });

  return (
    <group position={[0, 0, -140]}>
      {/* Colossal Monolithic Portal Columns */}
      <mesh position={[-2.4, 1.2, 0]}>
        <boxGeometry args={[1.0, 6.4, 1.0]} />
        <meshStandardMaterial color="#0F172A" roughness={0.3} metalness={0.2} flatShading />
        <Edges threshold={15} color="#38BDF8" />
      </mesh>

      <mesh position={[2.4, 1.2, 0]}>
        <boxGeometry args={[1.0, 6.4, 1.0]} />
        <meshStandardMaterial color="#0F172A" roughness={0.3} metalness={0.2} flatShading />
        <Edges threshold={15} color="#38BDF8" />
      </mesh>

      {/* Lintelled Gateway Beam */}
      <mesh position={[0, 4.2, 0]}>
        <boxGeometry args={[6.0, 0.8, 1.2]} />
        <meshStandardMaterial color="#1E293B" roughness={0.3} flatShading />
        <Edges threshold={15} color="#64748B" />
      </mesh>

      {/* Radiant Multi-Spectral Transmission Beacon */}
      <group ref={beaconRef} position={[0, 1.5, 0]}>
        <mesh>
          <octahedronGeometry args={[1.1, 0]} />
          <meshStandardMaterial color="#312E81" roughness={0.3} metalness={0.4} flatShading />
          <Edges threshold={15} color="#818CF8" />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshBasicMaterial color="#10B981" />
        </mesh>
      </group>
    </group>
  );
}
