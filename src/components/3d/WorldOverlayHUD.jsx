import React from 'react';
import { ArrowUpRight, ChevronDown, Layers, Palette, Github, Linkedin, Code } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function WorldOverlayHUD({
  scrollProgress,
  onSelectProject,
  onNavigateToProgress,
  onOpenEditorialSheet,
}) {
  const { personal, about, leadership } = portfolioData;

  // Map 8 distinct zones based on scroll progress
  let activeZoneIndex = 0;
  if (scrollProgress >= 0.92) activeZoneIndex = 7;      // 08: Contact
  else if (scrollProgress >= 0.78) activeZoneIndex = 6; // 07: About
  else if (scrollProgress >= 0.64) activeZoneIndex = 5; // 06: Beyond Code (Design)
  else if (scrollProgress >= 0.50) activeZoneIndex = 4; // 05: AgriVision
  else if (scrollProgress >= 0.35) activeZoneIndex = 3; // 04: CBSE OCR
  else if (scrollProgress >= 0.21) activeZoneIndex = 2; // 03: ML Stress
  else if (scrollProgress >= 0.08) activeZoneIndex = 1; // 02: OpsMonitor

  const zones = [
    { name: 'Identity', label: '01 // IDENTITY', target: 0.00 },
    { name: 'OpsMonitor', label: '02 // OPSMONITOR', target: 0.14 },
    { name: 'Machine Learning', label: '03 // APPLIED ML', target: 0.28 },
    { name: 'OCR Vision', label: '04 // CBSE OCR', target: 0.43 },
    { name: 'AgriVision', label: '05 // AGRIVISION', target: 0.57 },
    { name: 'Beyond Code', label: '06 // DESIGN HEAD', target: 0.71 },
    { name: 'About', label: '07 // ABOUT', target: 0.85 },
    { name: 'Contact', label: '08 // CONTACT', target: 1.00 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 sm:p-10 md:p-12 overflow-hidden select-none">
      {/* Top Header HUD Bar */}
      <header className="flex items-center justify-between border-b border-[#D9D9D5]/70 pb-3 pointer-events-auto bg-[#F5F5F2]/60 backdrop-blur-xs">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => onNavigateToProgress(0.0)}
            className="font-mono text-xs sm:text-sm tracking-widest font-black uppercase text-[#111111] hover:opacity-75 transition-opacity"
          >
            {personal.firstName.toUpperCase()}
          </button>
          <span className="hidden sm:inline-block font-mono text-[10px] text-[#8A8A8A] border-l border-[#D9D9D5] pl-3">
            INTERACTIVE 3D WORLD
          </span>
        </div>

        {/* Current Zone Coordinates Telemetry */}
        <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono uppercase text-[#111111] bg-white border border-[#D9D9D5] px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{zones[activeZoneIndex].label}</span>
          <span className="text-[#8A8A8A] hidden sm:inline">
            [{Math.round(scrollProgress * 100)}%]
          </span>
        </div>

        {/* Top Right: Verified Personal Links + Navigation */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-3 text-xs font-mono">
            <a
              href="https://github.com/kritisans25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666666] hover:text-[#111111] transition-colors p-1"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sanskriti-singh-2b0bb72b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666666] hover:text-[#111111] transition-colors p-1"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://leetcode.com/u/sans_0225/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666666] hover:text-[#111111] transition-colors p-1"
              title="LeetCode Profile"
            >
              <Code className="w-4 h-4" />
            </a>
            <a
              href="/resume/Sanskriti_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 px-2.5 py-1 bg-white border border-[#D9D9D5] hover:border-[#111111] text-[#111111] transition-colors font-semibold"
            >
              <span>RESUME</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Zone Waypoint Quick Jump Menu */}
          <nav className="hidden xl:flex items-center space-x-3 text-[11px] font-mono uppercase tracking-wider text-[#666666] border-l border-[#D9D9D5] pl-4">
            {zones.map((zone, idx) => (
              <button
                key={zone.name}
                onClick={() => onNavigateToProgress(zone.target)}
                className={`hover:text-[#111111] transition-colors ${
                  activeZoneIndex === idx
                    ? 'text-[#111111] font-bold underline underline-offset-4 decoration-2'
                    : ''
                }`}
              >
                {zone.name}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Center Zone Dynamic Content Display */}
      <div className="my-auto pointer-events-none transition-all duration-500">
        {/* ZONE 01: INTRO (0.00 - 0.07) — MONOCHROME */}
        {activeZoneIndex === 0 && (
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#8A8A8A]">
              [ 01 // IDENTITY &amp; SYSTEMS ]
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#111111] uppercase leading-[0.92]">
              SANSKRITI<br />
              SINGH
            </h1>
            <p className="text-xl sm:text-2xl text-[#333333] font-light max-w-2xl leading-relaxed pt-2">
              {personal.heroStatement}
            </p>
            <div className="pt-4 flex items-center space-x-3 text-xs font-mono uppercase text-[#666666]">
              <span className="w-2 h-2 rounded-full bg-[#111111]"></span>
              <span>{personal.secondaryTitle}</span>
            </div>
            <div className="pt-6 pointer-events-auto">
              <a
                href="/resume/Sanskriti_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#111111] text-[#F5F5F2] hover:bg-[#333333] transition-colors font-mono text-xs uppercase tracking-wider font-semibold shadow-sm"
              >
                <span>VIEW RESUME</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* ZONE 02: OPSMONITOR (0.08 - 0.20) — EMERALD TELEMETRY */}
        {activeZoneIndex === 1 && (
          <div className="max-w-2xl space-y-4 bg-[#F5F5F2]/85 backdrop-blur-xs p-6 sm:p-8 border border-[#D9D9D5]/90 pointer-events-auto">
            <div className="flex items-center justify-between text-xs font-mono uppercase text-[#8A8A8A]">
              <span>[ 02 // SOFTWARE ENGINEERING / DEVOPS ]</span>
              <span className="text-emerald-700 font-semibold flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>TELEMETRY ONLINE</span>
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#111111]">
              OPS MONITOR
            </h2>
            <div className="text-sm font-mono text-[#666666]">
              Server Health &amp; API Uptime Monitor
            </div>
            <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
              Real-time engineering operations dashboard for monitoring server compute health, memory saturation, and API endpoint uptime.
            </p>
            <div className="font-mono text-xs text-[#555555]">
              React · Node.js · Express · MongoDB · Docker · Kubernetes · Terraform
            </div>
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="https://github.com/kritisans25/devops-monitor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#111111] text-[#F5F5F2] hover:bg-[#333333] transition-colors font-mono text-xs uppercase tracking-wider font-semibold shadow-sm"
              >
                <span>VIEW ON GITHUB</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => onSelectProject('opsmonitor')}
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-white text-[#111111] border border-[#D9D9D5] hover:bg-[#EAEAE6] transition-colors font-mono text-xs uppercase tracking-wider font-semibold"
              >
                <span>Inspect Architecture</span>
              </button>
            </div>
          </div>
        )}

        {/* ZONE 03: MACHINE LEARNING (0.21 - 0.34) — ELECTRIC BLUE / CYAN */}
        {activeZoneIndex === 2 && (
          <div className="max-w-2xl space-y-4 bg-[#F5F5F2]/85 backdrop-blur-xs p-6 sm:p-8 border border-[#D9D9D5]/90 pointer-events-auto">
            <div className="flex items-center justify-between text-xs font-mono uppercase text-[#8A8A8A]">
              <span>[ 03 // MACHINE LEARNING / FULL STACK ]</span>
              <span className="text-cyan-700 font-semibold font-mono">
                MODEL ACCURACY ~90%
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#111111]">
              AI-DRIVEN WORKPLACE STRESS MONITORING
            </h2>
            <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
              End-to-end web system classifying occupational stress markers using biometric data streams and Google Fit API synchronization.
            </p>
            <div className="font-mono text-xs text-[#555555]">
              Python · Flask · Scikit-Learn · OpenAI API · Google Fit API · SQLite
            </div>
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="https://github.com/kritisans25/workplace-stress-monitor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#111111] text-[#F5F5F2] hover:bg-[#333333] transition-colors font-mono text-xs uppercase tracking-wider font-semibold shadow-sm"
              >
                <span>VIEW ON GITHUB</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => onSelectProject('stress-monitoring')}
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-white text-[#111111] border border-[#D9D9D5] hover:bg-[#EAEAE6] transition-colors font-mono text-xs uppercase tracking-wider font-semibold"
              >
                <span>Inspect ML Classifier</span>
              </button>
            </div>
          </div>
        )}

        {/* ZONE 04: CBSE OCR EVALUATION (0.35 - 0.49) — WARM AMBER */}
        {activeZoneIndex === 3 && (
          <div className="max-w-2xl space-y-4 bg-[#F5F5F2]/85 backdrop-blur-xs p-6 sm:p-8 border border-[#D9D9D5]/90 pointer-events-auto">
            <div className="flex items-center justify-between text-xs font-mono uppercase text-[#8A8A8A]">
              <span>[ 04 // COMPUTER VISION / OCR ]</span>
              <span className="bg-[#D97706] text-white px-2 py-0.5 text-[10px] font-mono font-semibold">
                SCORE: 8.5 / 10
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#111111]">
              CBSE BOARD ANSWER SHEET EVALUATION
            </h2>
            <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
              Automated document processing pipeline for evaluating handwritten student exam scripts against structured rubrics.
            </p>
            <div className="font-mono text-xs text-[#555555]">
              Python · Flask · OpenCV · OCR · Machine Learning · NLP
            </div>
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="https://github.com/kritisans25/answer-sheet-verifier"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#111111] text-[#F5F5F2] hover:bg-[#333333] transition-colors font-mono text-xs uppercase tracking-wider font-semibold shadow-sm"
              >
                <span>VIEW ON GITHUB</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => onSelectProject('cbse-evaluator')}
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-white text-[#111111] border border-[#D9D9D5] hover:bg-[#EAEAE6] transition-colors font-mono text-xs uppercase tracking-wider font-semibold"
              >
                <span>Inspect Pipeline</span>
              </button>
            </div>
          </div>
        )}

        {/* ZONE 05: AGRIVISION (0.50 - 0.63) — FRESH GREEN / SUN GOLD */}
        {activeZoneIndex === 4 && (
          <div className="max-w-2xl space-y-4 bg-[#F5F5F2]/85 backdrop-blur-xs p-6 sm:p-8 border border-[#D9D9D5]/90 pointer-events-auto">
            <div className="flex items-center justify-between text-xs font-mono uppercase text-[#8A8A8A]">
              <span>[ 05 // MACHINE LEARNING / DATA / APIS ]</span>
              <span className="text-emerald-700 font-mono font-semibold">
                OPENWEATHERMAP LIVE
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#111111]">
              AGRIVISION
            </h2>
            <div className="text-sm font-mono text-[#666666]">
              Smart Crop Recommendation
            </div>
            <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
              Data-driven crop and fertilizer recommendation engine powered by real-time environmental APIs and tree-based learning.
            </p>
            <div className="font-mono text-xs text-[#555555]">
              Python · XGBoost · Flask · OpenWeatherMap
            </div>
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="https://github.com/kritisans25/Agrivision"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#111111] text-[#F5F5F2] hover:bg-[#333333] transition-colors font-mono text-xs uppercase tracking-wider font-semibold shadow-sm"
              >
                <span>VIEW ON GITHUB</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => onSelectProject('agrivision')}
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-white text-[#111111] border border-[#D9D9D5] hover:bg-[#EAEAE6] transition-colors font-mono text-xs uppercase tracking-wider font-semibold"
              >
                <span>Inspect Model Specs</span>
              </button>
            </div>
          </div>
        )}

        {/* ZONE 06: BEYOND CODE (0.64 - 0.77) — VIBRANT COLORFUL DESIGN PEAK */}
        {activeZoneIndex === 5 && (
          <div className="max-w-2xl space-y-4 bg-[#F5F5F2]/90 backdrop-blur-xs p-6 sm:p-8 border border-[#D9D9D5]/90 pointer-events-auto">
            <div className="flex items-center justify-between text-xs font-mono uppercase text-[#8A8A8A]">
              <span>[ 06 // DESIGN HEAD / CREATIVE DIRECTION ]</span>
              <span className="text-purple-700 font-semibold font-mono">
                CREATIVE STUDIO
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#111111]">
              BEYOND CODE
            </h2>
            <div className="text-sm font-mono text-[#111111] font-semibold">
              DESIGN HEAD · DREAM MERCHANTS CLUB · VIT
            </div>
            <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
              I don&apos;t just build systems. I care deeply about how things look, communicate, and feel. Leading creative direction across visual systems, event branding, and design strategy.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono pt-1">
              <span className="bg-white border border-[#D9D9D5] px-2.5 py-1 text-blue-700 font-semibold">
                STOCHASTIC
              </span>
              <span className="bg-white border border-[#D9D9D5] px-2.5 py-1 text-rose-700 font-semibold">
                DREAM TEAM
              </span>
              <span className="bg-white border border-[#D9D9D5] px-2.5 py-1 text-purple-700 font-semibold">
                FIGMA SYSTEMS
              </span>
            </div>
            <div className="pt-4">
              <button
                onClick={onOpenEditorialSheet}
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#111111] text-[#F5F5F2] hover:bg-[#333333] transition-colors font-mono text-xs uppercase tracking-wider font-semibold shadow-sm"
              >
                <Palette className="w-4 h-4" />
                <span>Explore Creative Direction Dossier</span>
              </button>
            </div>
          </div>
        )}

        {/* ZONE 07: ABOUT (0.78 - 0.91) — HARMONIC CALM BLEND */}
        {activeZoneIndex === 6 && (
          <div className="max-w-2xl space-y-4 bg-[#F5F5F2]/85 backdrop-blur-xs p-6 sm:p-8 border border-[#D9D9D5]/90 pointer-events-auto">
            <div className="text-xs font-mono uppercase tracking-widest text-[#8A8A8A]">
              [ 07 // ABOUT THE BUILDER ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#111111]">
              TECHNICAL RIGOR × CREATIVE INTENT
            </h2>
            <div className="space-y-3 pt-1">
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="text-sm sm:text-base text-[#333333] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="pt-2 text-xs font-mono text-[#666666] flex flex-wrap items-center gap-4 border-t border-[#D9D9D5] pt-3">
              <span>B.TECH IT · VIT · GRADUATING 2027</span>
              <span>CGPA: 8.69</span>
              <a
                href="/resume/Sanskriti_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-[#111111] font-semibold underline underline-offset-4 pointer-events-auto"
              >
                <span>VIEW RESUME</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* ZONE 08: CONTACT (0.92 - 1.00) — TRANSMISSION TERMINAL */}
        {activeZoneIndex === 7 && (
          <div className="max-w-3xl space-y-5 bg-[#F5F5F2]/90 backdrop-blur-xs p-6 sm:p-10 border border-[#D9D9D5]/90 pointer-events-auto">
            <div className="text-xs font-mono uppercase text-[#8A8A8A]">
              [ 08 // TRANSMISSION TERMINAL ]
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#111111] leading-[0.92]">
              LET&apos;S BUILD SOMETHING USEFUL.
            </h2>
            <div className="pt-2">
              <a
                href={`mailto:${personal.email}`}
                className="text-2xl sm:text-3xl font-mono text-[#111111] hover:text-[#555555] transition-colors border-b-2 border-[#111111] pb-1"
              >
                {personal.email}
              </a>
            </div>
            <div className="pt-4 flex flex-wrap gap-3 font-mono text-xs uppercase">
              <a
                href="/resume/Sanskriti_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-[#111111] text-[#F5F5F2] hover:bg-[#333333] transition-colors font-semibold"
              >
                <span>RESUME (PDF) ↗</span>
              </a>
              <a
                href="https://github.com/kritisans25"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-white border border-[#D9D9D5] hover:border-[#111111] text-[#111111] transition-colors font-semibold"
              >
                <span>GitHub ↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sanskriti-singh-2b0bb72b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-white border border-[#D9D9D5] hover:border-[#111111] text-[#111111] transition-colors font-semibold"
              >
                <span>LinkedIn ↗</span>
              </a>
              <a
                href="https://leetcode.com/u/sans_0225/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-white border border-[#D9D9D5] hover:border-[#111111] text-[#111111] transition-colors font-semibold"
              >
                <span>LeetCode ↗</span>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Bottom HUD Bar: Scrubber & Editorial Drawer Trigger */}
      <footer className="flex items-end justify-between border-t border-[#D9D9D5]/70 pt-3 pointer-events-auto bg-[#F5F5F2]/60 backdrop-blur-xs">
        <div className="flex items-center space-x-3 text-xs font-mono uppercase text-[#666666]">
          {scrollProgress < 0.95 ? (
            <div className="flex items-center space-x-2">
              <span className="hidden sm:inline">SCROLL TO TRAVEL</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </div>
          ) : (
            <span>JOURNEY COMPLETE</span>
          )}
        </div>

        {/* Global Progress Track */}
        <div className="hidden md:flex items-center space-x-3 font-mono text-[10px] text-[#8A8A8A]">
          <span>01 INTRO</span>
          <div className="w-48 h-1 bg-[#D9D9D5] rounded-full overflow-hidden">
            <div
              className="bg-[#111111] h-full transition-all duration-75"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
          <span>08 TRANSMISSION</span>
        </div>

        {/* Editorial Dossier Modal Trigger */}
        <button
          type="button"
          onClick={onOpenEditorialSheet}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-white border border-[#D9D9D5] text-[#111111] hover:bg-[#111111] hover:text-[#F5F5F2] transition-colors font-mono text-xs uppercase tracking-wider font-semibold"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Full Portfolio Dossier</span>
        </button>
      </footer>
    </div>
  );
}
