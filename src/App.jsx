import React, { useState, useEffect } from 'react';
import WorldCanvas from './components/3d/WorldCanvas';
import WorldOverlayHUD from './components/3d/WorldOverlayHUD';
import ProjectDetailModal from './components/ProjectDetailModal';
import FullPortfolioDossier from './components/FullPortfolioDossier';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [dossierOpen, setDossierOpen] = useState(false);

  // Monitor Window Scroll to drive Continuous 3D World Journey
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalScroll > 0) {
        setScrollProgress(Math.min(Math.max(currentScroll / totalScroll, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor Window Mouse Movement for Interactive Parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize to [-1, 1]
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      setMouse({ x: nx, y: ny });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth Travel Navigation between 3D Waypoints
  const handleNavigateToProgress = (targetProgress) => {
    const totalScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = targetProgress * totalScroll;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  // Open Project Details from 3D object click or HUD action
  const handleSelectProject = (projectId) => {
    const proj = portfolioData.projects.find((p) => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  return (
    <div className="relative bg-[#F5F5F2] text-[#111111] selection:bg-[#111111] selection:text-[#F5F5F2]">
      {/* 1. Fullscreen Persistent 3D WebGL World Canvas */}
      <WorldCanvas
        scrollProgress={scrollProgress}
        mouse={mouse}
        onSelectProject={handleSelectProject}
        onOpenEditorialSheet={() => setDossierOpen(true)}
      />

      {/* 2. Real-Time Editorial HUD Overlay */}
      <WorldOverlayHUD
        scrollProgress={scrollProgress}
        onSelectProject={handleSelectProject}
        onNavigateToProgress={handleNavigateToProgress}
        onOpenEditorialSheet={() => setDossierOpen(true)}
      />

      {/* 3. Scroll Journey Height Track (800vh for silky smooth pacing across 8 zones) */}
      <div className="relative w-full h-[800vh] pointer-events-none" />

      {/* 4. Project Detail Modal (Opens from 3D interactions) */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* 5. Comprehensive Editorial Resume Dossier Drawer */}
      <FullPortfolioDossier
        isOpen={dossierOpen}
        onClose={() => setDossierOpen(false)}
        onSelectProject={handleSelectProject}
      />
    </div>
  );
}
