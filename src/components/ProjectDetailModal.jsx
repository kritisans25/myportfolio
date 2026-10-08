import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#111111]/70 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#F5F5F2] border border-[#D9D9D5] text-[#111111] shadow-2xl p-6 sm:p-10 md:p-12 my-auto max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between border-b border-[#D9D9D5] pb-6 mb-8">
          <div>
            <div className="text-xs font-mono text-[#8A8A8A] uppercase tracking-wider mb-2">
              [{project.number} // {project.category}]
            </div>
            <h2
              id="modal-project-title"
              className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#111111]"
            >
              {project.title}
            </h2>
            <p className="text-lg text-[#666666] mt-2 font-normal">
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 border border-[#D9D9D5] bg-white text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tech Stack Bar */}
        <div className="mb-8">
          <div className="text-xs font-mono text-[#8A8A8A] uppercase tracking-wider mb-3">
            TECHNOLOGY STACK
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-[#111111] bg-white border border-[#D9D9D5] px-3 py-1 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-[#D9D9D5]">
          <div className="bg-white p-6 border border-[#D9D9D5]">
            <div className="text-xs font-mono uppercase text-[#8A8A8A] tracking-wider mb-2">
              [ 01 // THE PROBLEM ]
            </div>
            <h4 className="text-base font-semibold text-[#111111] mb-2">Operational Bottleneck</h4>
            <p className="text-sm text-[#666666] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="bg-white p-6 border border-[#D9D9D5]">
            <div className="text-xs font-mono uppercase text-[#8A8A8A] tracking-wider mb-2">
              [ 02 // WHAT I BUILT ]
            </div>
            <h4 className="text-base font-semibold text-[#111111] mb-2">Engineered Solution</h4>
            <p className="text-sm text-[#666666] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* System Architecture */}
        <div className="mb-8 p-6 bg-[#FFFFFF] border border-[#D9D9D5]">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase text-[#8A8A8A] tracking-wider mb-3">
            <Layers className="w-4 h-4 text-[#111111]" />
            <span>SYSTEM ARCHITECTURE &amp; DATAFLOW</span>
          </div>
          <div className="font-mono text-xs sm:text-sm text-[#111111] bg-[#F5F5F2] p-4 border border-[#D9D9D5] overflow-x-auto">
            {project.architecture}
          </div>
        </div>

        {/* Key Capabilities */}
        <div className="mb-8">
          <div className="text-xs font-mono text-[#8A8A8A] uppercase tracking-wider mb-4">
            KEY CAPABILITIES &amp; IMPLEMENTATION DETAILS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-2.5 text-xs text-[#444444] font-mono bg-white p-3 border border-[#D9D9D5]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#111111] flex-shrink-0 mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Verification & Metrics */}
        {project.metrics && (
          <div className="mb-8 p-4 bg-white border border-[#D9D9D5] flex flex-wrap gap-6 items-center justify-between text-xs font-mono">
            <div className="flex items-center space-x-2 text-[#666666]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>SYSTEM VERIFICATION:</span>
            </div>
            {Object.entries(project.metrics).map(([key, val]) => (
              <div key={key} className="flex items-center space-x-2">
                <span className="text-[#8A8A8A] uppercase">{key}:</span>
                <span className="font-semibold text-[#111111]">{val}</span>
              </div>
            ))}
          </div>
        )}

        {/* Links / Footer Actions */}
        <div className="flex flex-wrap items-center justify-between pt-6 border-t border-[#D9D9D5] gap-4">
          <div className="flex items-center space-x-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 border border-[#111111] bg-[#111111] text-[#F5F5F2] hover:bg-[#333333] transition-colors text-xs font-mono uppercase tracking-wider font-semibold"
            >
              <span>VIEW ON GITHUB</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono uppercase text-[#8A8A8A] hover:text-[#111111] transition-colors"
          >
            Close Project Overlay [ESC]
          </button>
        </div>
      </div>
    </div>
  );
}
