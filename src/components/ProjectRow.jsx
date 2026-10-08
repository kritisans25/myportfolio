import React, { useState } from 'react';
import { ArrowUpRight, Activity, Cpu, FileText, Sprout } from 'lucide-react';

export default function ProjectRow({
  project,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onSelectProject,
}) {
  const [internalHover, setInternalHover] = useState(false);
  const active = isHovered || internalHover;

  // Render bespoke editorial preview based on project ID
  const renderInteractivePreview = () => {
    switch (project.id) {
      case 'opsmonitor':
        return (
          <div className="bg-[#111111] text-[#F5F5F2] p-5 rounded-none border border-[#111111] font-mono text-xs w-full max-w-md shadow-sm transition-all duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-[#2A2A2A] text-[10px] text-[#8A8A8A]">
              <div className="flex items-center space-x-2">
                <Cpu className="w-3.5 h-3.5 text-white" />
                <span>OPSMONITOR // TELEMETRY PROBE</span>
              </div>
              <div className="flex items-center space-x-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>OPERATIONAL</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 py-3 border-b border-[#2A2A2A] text-center">
              <div>
                <div className="text-[10px] text-[#8A8A8A]">CPU LOAD</div>
                <div className="text-base font-bold text-white mt-0.5">23%</div>
              </div>
              <div>
                <div className="text-[10px] text-[#8A8A8A]">RAM USAGE</div>
                <div className="text-base font-bold text-white mt-0.5">68%</div>
              </div>
              <div>
                <div className="text-[10px] text-[#8A8A8A]">DISK I/O</div>
                <div className="text-base font-bold text-white mt-0.5">54%</div>
              </div>
            </div>

            {/* Sparkline chart */}
            <div className="pt-3">
              <div className="flex justify-between text-[10px] text-[#8A8A8A] mb-1">
                <span>LATENCY HISTORY (42ms)</span>
                <span>UPTIME 99.94%</span>
              </div>
              <svg className="w-full h-10 stroke-emerald-400 fill-none" viewBox="0 0 200 40">
                <path
                  d="M0,25 Q20,20 40,28 T80,12 T120,22 T160,8 T200,18"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        );

      case 'stress-monitoring':
        return (
          <div className="bg-white text-[#111111] p-5 rounded-none border border-[#D9D9D5] font-mono text-xs w-full max-w-md shadow-sm transition-all duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-[#D9D9D5] text-[10px] text-[#666666]">
              <div className="flex items-center space-x-2">
                <Activity className="w-3.5 h-3.5 text-[#111111]" />
                <span>PHYSIOLOGICAL STRESS CLASSIFIER</span>
              </div>
              <span className="text-[#111111] font-semibold">MODEL ACCURACY ~90%</span>
            </div>

            <div className="py-3 border-b border-[#D9D9D5] space-y-2">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#666666]">Google Fit Biometric Sync</span>
                <span className="text-emerald-700 font-semibold">Connected (72 bpm)</span>
              </div>
              <div className="w-full bg-[#E5E5E0] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#111111] h-full w-[38%]"></div>
              </div>
              <div className="flex justify-between text-[10px] text-[#8A8A8A]">
                <span>Stress Index: Low / Baseline</span>
                <span>RandomForest Pipeline</span>
              </div>
            </div>

            <div className="pt-3 flex items-center justify-between text-[10px] text-[#666666]">
              <span>OPENAI CONVERSATIONAL AID</span>
              <span className="font-semibold text-[#111111]">ANOMALY ALERT: OK</span>
            </div>
          </div>
        );

      case 'cbse-evaluator':
        return (
          <div className="bg-[#FFFFFF] text-[#111111] p-5 rounded-none border border-[#D9D9D5] font-mono text-xs w-full max-w-md shadow-sm transition-all duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-[#D9D9D5] text-[10px] text-[#666666]">
              <div className="flex items-center space-x-2">
                <FileText className="w-3.5 h-3.5 text-[#111111]" />
                <span>OCR EVALUATION PIPELINE</span>
              </div>
              <span className="bg-[#F5F5F2] px-2 py-0.5 border border-[#D9D9D5] font-semibold">
                SCORE: 8.5 / 10
              </span>
            </div>

            <div className="py-3 border-b border-[#D9D9D5] space-y-2 text-[11px]">
              <div className="flex items-center justify-between text-[#666666]">
                <span>1. Handwritten Script Scan</span>
                <span className="text-[#111111] font-mono">OpenCV Filtered</span>
              </div>
              <div className="flex items-center justify-between text-[#666666]">
                <span>2. Binarization &amp; OCR Extraction</span>
                <span className="text-[#111111] font-mono">100% Parsed</span>
              </div>
              <div className="flex items-center justify-between text-[#666666]">
                <span>3. Key Point Semantic Matching</span>
                <span className="text-emerald-700 font-semibold">Rubric Match: 85%</span>
              </div>
            </div>

            <div className="pt-3 text-[10px] text-[#8A8A8A] flex justify-between">
              <span>EXPLAINABLE DISCREPANCY CHECK</span>
              <span>NLP VALIDATED</span>
            </div>
          </div>
        );

      case 'agrivision':
        return (
          <div className="bg-white text-[#111111] p-5 rounded-none border border-[#D9D9D5] font-mono text-xs w-full max-w-md shadow-sm transition-all duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-[#D9D9D5] text-[10px] text-[#666666]">
              <div className="flex items-center space-x-2">
                <Sprout className="w-3.5 h-3.5 text-[#111111]" />
                <span>AGRIVISION // CROP RECOMMENDATION</span>
              </div>
              <span className="text-emerald-700 font-semibold">API: OPENWEATHER</span>
            </div>

            <div className="grid grid-cols-3 gap-2 py-3 border-b border-[#D9D9D5] text-center">
              <div className="p-1.5 bg-[#F5F5F2] border border-[#D9D9D5]">
                <div className="text-[9px] text-[#8A8A8A]">NITROGEN</div>
                <div className="font-bold text-[#111111]">78 mg/kg</div>
              </div>
              <div className="p-1.5 bg-[#F5F5F2] border border-[#D9D9D5]">
                <div className="text-[9px] text-[#8A8A8A]">PHOSPHORUS</div>
                <div className="font-bold text-[#111111]">42 mg/kg</div>
              </div>
              <div className="p-1.5 bg-[#F5F5F2] border border-[#D9D9D5]">
                <div className="text-[9px] text-[#8A8A8A]">POTASSIUM</div>
                <div className="font-bold text-[#111111]">50 mg/kg</div>
              </div>
            </div>

            <div className="pt-3 flex items-center justify-between text-[11px]">
              <span className="text-[#666666]">Predicted Optimal Crop:</span>
              <span className="text-[#111111] font-bold uppercase tracking-wider">
                RICE / MAIZE
              </span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="group relative border-b border-[#D9D9D5] transition-colors duration-200"
      onMouseEnter={() => {
        setInternalHover(true);
        onMouseEnter && onMouseEnter(project.title);
      }}
      onMouseLeave={() => {
        setInternalHover(false);
        onMouseLeave && onMouseLeave();
      }}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={() => onSelectProject(project)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelectProject(project);
          }
        }}
        className="w-full text-left py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start cursor-pointer focus:outline-none focus:bg-[#EAEAE6]/30 px-2 sm:px-4"
      >
        {/* Project Number */}
        <div className="lg:col-span-1 text-sm font-mono text-[#8A8A8A]">
          <span>[{project.number}]</span>
        </div>

        {/* Project Title & Category */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-baseline space-x-3">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111] uppercase group-hover:text-[#444444] transition-colors">
              {project.title}
            </h3>
          </div>
          <p className="text-base sm:text-lg text-[#666666] font-normal leading-snug">
            {project.subtitle}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono text-[#666666] bg-white border border-[#D9D9D5] px-2 py-0.5 rounded-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Preview Widget */}
        <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end">
          {renderInteractivePreview()}
        </div>

        {/* Action Indicator */}
        <div className="lg:col-span-1 flex lg:justify-end items-center">
          <div className="w-10 h-10 border border-[#D9D9D5] bg-white flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-all duration-200">
            <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
