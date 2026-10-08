import React, { useEffect } from 'react';
import { X, ArrowUpRight, GraduationCap, Award, Palette, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function FullPortfolioDossier({ isOpen, onClose, onSelectProject }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { personal, about, technicalIdentity, leadership, education, certifications, projects } =
    portfolioData;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#111111]/70 backdrop-blur-sm overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-heading"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-[#F5F5F2] h-full overflow-y-auto p-6 sm:p-10 md:p-12 border-l border-[#D9D9D5] shadow-2xl text-[#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-[#D9D9D5] pb-6 mb-10">
          <div>
            <div className="text-xs font-mono text-[#8A8A8A] uppercase tracking-wider mb-1">
              [ EDITORIAL DOSSIER ]
            </div>
            <h2 id="dossier-heading" className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
              {personal.name}
            </h2>
            <p className="text-xs font-mono text-[#666666] mt-0.5">
              {personal.secondaryTitle}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="/resume/Sanskriti_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#111111] text-[#F5F5F2] hover:bg-[#333333] transition-colors font-mono text-xs uppercase font-semibold"
            >
              <span>VIEW RESUME</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 border border-[#D9D9D5] bg-white text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
              aria-label="Close dossier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Section 1: About */}
        <section className="mb-12 pb-10 border-b border-[#D9D9D5]">
          <div className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-4">
            [ 01 // ABOUT ]
          </div>
          <div className="space-y-4">
            {about.paragraphs.map((p, idx) => (
              <p key={idx} className="text-base text-[#333333] leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Section 2: Projects Overview */}
        <section className="mb-12 pb-10 border-b border-[#D9D9D5]">
          <div className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-4">
            [ 02 // FEATURED PROJECTS ]
          </div>
          <div className="space-y-6">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="bg-white p-5 border border-[#D9D9D5] hover:border-[#111111] transition-colors cursor-pointer"
                onClick={() => {
                  onClose();
                  onSelectProject(proj.id);
                }}
              >
                <div className="flex items-baseline justify-between text-xs font-mono text-[#8A8A8A] mb-1">
                  <span>[{proj.number}] {proj.category}</span>
                  <span className="text-[#111111] font-semibold flex items-center space-x-1">
                    <span>VIEW</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
                <h3 className="text-lg font-bold uppercase text-[#111111]">{proj.title}</h3>
                <p className="text-xs text-[#666666] mt-1">{proj.subtitle}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {proj.technologies.map((t) => (
                    <span key={t} className="text-[10px] font-mono bg-[#F5F5F2] border border-[#D9D9D5] px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Technical Stack */}
        <section className="mb-12 pb-10 border-b border-[#D9D9D5]">
          <div className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-4">
            [ 03 // TECHNICAL STACK ]
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {technicalIdentity.categories.map((cat, idx) => (
              <div key={idx} className="bg-white p-4 border border-[#D9D9D5]">
                <div className="font-mono text-xs uppercase font-bold text-[#111111] border-b border-[#D9D9D5] pb-2 mb-2">
                  {cat.name}
                </div>
                <div className="space-y-1 text-xs text-[#555555]">
                  {cat.skills.map((s) => (
                    <div key={s} className="flex justify-between">
                      <span>{s}</span>
                      <span className="text-[#A0A0A0]">·</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Leadership (Beyond Code) */}
        <section className="mb-12 pb-10 border-b border-[#D9D9D5]">
          <div className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-4">
            [ 04 // LEADERSHIP &amp; DESIGN ]
          </div>
          <div className="bg-white p-6 border border-[#D9D9D5] space-y-3">
            <div className="flex justify-between items-baseline text-xs font-mono text-[#8A8A8A]">
              <span>ROLE: {leadership.role}</span>
              <span>{leadership.organization} ({leadership.institution})</span>
            </div>
            <p className="text-sm text-[#444444] leading-relaxed">
              {leadership.description}
            </p>
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#666666]">
              {leadership.focusAreas.map((f, i) => (
                <div key={i} className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#111111]" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Education & Certifications */}
        <section className="mb-8">
          <div className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-4">
            [ 05 // EDUCATION &amp; CERTIFICATIONS ]
          </div>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-white p-4 border border-[#D9D9D5] flex justify-between items-baseline text-xs">
                <div>
                  <div className="font-bold text-[#111111]">{edu.institution}</div>
                  <div className="text-[#666666]">{edu.degree}</div>
                </div>
                <span className="font-mono font-semibold bg-[#F5F5F2] px-2 py-0.5 border border-[#D9D9D5]">
                  {edu.grade}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-2">
            {certifications.map((c, idx) => (
              <div key={idx} className="p-3 bg-white border border-[#D9D9D5] flex justify-between text-xs font-mono">
                <span className="text-[#111111]">{c.title}</span>
                <span className="text-[#8A8A8A]">{c.issuer}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Direct Connect & Links */}
        <section className="pt-4 border-t border-[#D9D9D5]">
          <div className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-3">
            [ 06 // CONNECT ]
          </div>
          <div className="flex flex-wrap gap-3 font-mono text-xs">
            {personal.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-[#D9D9D5] hover:border-[#111111] text-[#111111] transition-colors"
              >
                <span>{s.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ))}
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#111111] text-[#F5F5F2] hover:bg-[#333333] transition-colors"
            >
              <span>{personal.email}</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
