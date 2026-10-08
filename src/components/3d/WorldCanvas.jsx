import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import {
  IntroZone,
  OpsMonitorZone,
  MachineLearningZone,
  OcrVisionZone,
  AgriVisionZone,
  BeyondCodeZone,
  AboutZone,
  ContactZone,
} from './WorldZones';
import { isWebGLAvailable } from '../../utils/webglCheck';

// Cinematic Camera Rig across all 8 zones with smooth Hermite interpolation
function CinematicCameraRig({ scrollProgress, mouse, prefersReducedMotion }) {
  const { camera, scene } = useThree();
  const currentPos = useRef(new THREE.Vector3(0, 1.6, 9));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  // Trajectory Waypoints across the 8 World Zones
  const waypoints = [
    { p: 0.00, pos: [0, 1.6, 9], lookAt: [0, 0.4, 0] },          // 01: Intro
    { p: 0.14, pos: [0, 1.2, -12], lookAt: [0, 0.5, -20] },       // 02: OpsMonitor
    { p: 0.28, pos: [2.2, 1.4, -32], lookAt: [1.5, 0.6, -40] },   // 03: Machine Learning
    { p: 0.43, pos: [-2.0, 1.3, -52], lookAt: [-1.8, 0.5, -60] }, // 04: OCR Vision
    { p: 0.57, pos: [0.0, 1.5, -72], lookAt: [0.0, 0.4, -80] },   // 05: AgriVision
    { p: 0.71, pos: [0.0, 1.5, -92], lookAt: [0.0, 0.6, -100] },  // 06: Beyond Code (Design)
    { p: 0.85, pos: [0.0, 1.4, -112], lookAt: [0.0, 0.5, -120] }, // 07: About
    { p: 1.00, pos: [0.0, 1.8, -132], lookAt: [0.0, 1.2, -140] }, // 08: Contact
  ];

  useFrame(() => {
    if (prefersReducedMotion) {
      camera.position.set(0, 1.6, 9);
      camera.lookAt(0, 0.4, 0);
      return;
    }

    const tClamped = Math.max(0, Math.min(scrollProgress, 1));
    let startWp = waypoints[0];
    let endWp = waypoints[waypoints.length - 1];

    for (let i = 0; i < waypoints.length - 1; i++) {
      if (tClamped >= waypoints[i].p && tClamped <= waypoints[i + 1].p) {
        startWp = waypoints[i];
        endWp = waypoints[i + 1];
        break;
      }
    }

    const span = endWp.p - startWp.p;
    const localT = span > 0 ? (tClamped - startWp.p) / span : 0;
    const easedT = 0.5 - 0.5 * Math.cos(localT * Math.PI);

    // Dynamic camera coordinates with responsive mouse parallax
    const targetX =
      THREE.MathUtils.lerp(startWp.pos[0], endWp.pos[0], easedT) + mouse.x * 0.9;
    const targetY =
      THREE.MathUtils.lerp(startWp.pos[1], endWp.pos[1], easedT) - mouse.y * 0.5;
    const targetZ = THREE.MathUtils.lerp(startWp.pos[2], endWp.pos[2], easedT);

    const targetLookX =
      THREE.MathUtils.lerp(startWp.lookAt[0], endWp.lookAt[0], easedT) + mouse.x * 0.3;
    const targetLookY =
      THREE.MathUtils.lerp(startWp.lookAt[1], endWp.lookAt[1], easedT) - mouse.y * 0.2;
    const targetLookZ = THREE.MathUtils.lerp(startWp.lookAt[2], endWp.lookAt[2], easedT);

    currentPos.current.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.06);
    currentLookAt.current.lerp(
      new THREE.Vector3(targetLookX, targetLookY, targetLookZ),
      0.06
    );

    camera.position.copy(currentPos.current);
    camera.lookAt(currentLookAt.current);
  });

  return null;
}

// Environmental Ground Plane with Long Technical Grid
function InfiniteLandscapeGrid() {
  return (
    <group position={[0, -2.4, -70]}>
      <gridHelper args={[80, 80, '#C4C4BC', '#E2E2DC']} position={[0, 0, 0]} />
      <gridHelper args={[80, 80, '#D0D0C8', '#E6E6E0']} position={[0, 0, 70]} />
      <gridHelper args={[80, 80, '#D0D0C8', '#E6E6E0']} position={[0, 0, -70]} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[100, 320]} />
        <meshBasicMaterial color="#F5F5F2" />
      </mesh>
    </group>
  );
}

// Dynamic Evolving World Light Rig
function EvolvingWorldLighting({ scrollProgress }) {
  // Subtly shift ambient tint as the user journeys from monochrome into full color
  const ambientColor = useMemo(() => {
    if (scrollProgress < 0.15) return '#FFFFFF'; // Intro
    if (scrollProgress < 0.30) return '#F0FDF4'; // OpsMonitor (Emerald)
    if (scrollProgress < 0.45) return '#F0F9FF'; // ML (Cyan)
    if (scrollProgress < 0.60) return '#FFFBEB'; // OCR (Amber)
    if (scrollProgress < 0.75) return '#FEFCE8'; // AgriVision (Gold/Green)
    if (scrollProgress < 0.88) return '#FAF5FF'; // Design (Violet/Rose)
    return '#F8FAFC'; // About & Contact
  }, [scrollProgress]);

  return (
    <>
      <ambientLight intensity={0.9} color={ambientColor} />
      <directionalLight position={[10, 20, 10]} intensity={1.2} color="#FFFFFF" />
      <directionalLight position={[-10, 8, -15]} intensity={0.4} color="#EAEAE4" />
      {/* Soft color accent point light that highlights the current zone */}
      {scrollProgress > 0.65 && scrollProgress < 0.82 && (
        <pointLight position={[0, 3, -100]} intensity={1.5} color="#8B5CF6" distance={25} />
      )}
      {scrollProgress > 0.50 && scrollProgress < 0.65 && (
        <pointLight position={[3, 3, -80]} intensity={1.2} color="#EAB308" distance={20} />
      )}
    </>
  );
}

export default function WorldCanvas({
  scrollProgress,
  mouse,
  onSelectProject,
  onOpenEditorialSheet,
}) {
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
    return (
      <div className="fixed inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#D9D9D5_1px,transparent_1px),linear-gradient(to_bottom,#D9D9D5_1px,transparent_1px)] bg-[size:4rem_4rem]" />
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-auto overflow-hidden">
      <Canvas
        camera={{ position: [0, 1.6, 9], fov: 42 }}
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <color attach="background" args={['#F5F5F2']} />
        <fog attach="fog" args={['#F5F5F2', 12, 45]} />

        {/* Dynamic Light Evolution */}
        <EvolvingWorldLighting scrollProgress={scrollProgress} />

        {/* Global Coordinate Base */}
        <InfiniteLandscapeGrid />

        {/* The 8 Progressive Thematic 3D World Zones */}
        <IntroZone prefersReducedMotion={prefersReducedMotion} mouse={mouse} />

        <OpsMonitorZone
          prefersReducedMotion={prefersReducedMotion}
          mouse={mouse}
          onSelectProject={onSelectProject}
        />

        <MachineLearningZone
          prefersReducedMotion={prefersReducedMotion}
          mouse={mouse}
          onSelectProject={onSelectProject}
        />

        <OcrVisionZone
          prefersReducedMotion={prefersReducedMotion}
          mouse={mouse}
          onSelectProject={onSelectProject}
        />

        <AgriVisionZone
          prefersReducedMotion={prefersReducedMotion}
          mouse={mouse}
          onSelectProject={onSelectProject}
        />

        <BeyondCodeZone
          prefersReducedMotion={prefersReducedMotion}
          mouse={mouse}
          onOpenEditorialSheet={onOpenEditorialSheet}
        />

        <AboutZone
          prefersReducedMotion={prefersReducedMotion}
          mouse={mouse}
        />

        <ContactZone
          prefersReducedMotion={prefersReducedMotion}
          mouse={mouse}
        />

        {/* Camera Journey Rig */}
        <CinematicCameraRig
          scrollProgress={scrollProgress}
          mouse={mouse}
          prefersReducedMotion={prefersReducedMotion}
        />
      </Canvas>
    </div>
  );
}
