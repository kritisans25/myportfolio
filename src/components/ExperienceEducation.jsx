import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceEducation() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-24 md:py-36 border-t border-[#D9D9D5] bg-[#F5F5F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 pb-6 border-b border-[#D9D9D5] flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#8A8A8A] mb-3">
              [ 06 // BACKGROUND ]
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-[#111111] uppercase">
              EDUCATION &amp; CERTIFICATIONS
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs uppercase text-[#8A8A8A]">
            ACADEMIC RIGOR &amp; PROFESSIONAL VALIDATION
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center space-x-2 pb-3 border-b border-[#111111] text-xs font-mono uppercase tracking-wider text-[#111111] font-bold">
              <GraduationCap className="w-4 h-4 text-[#111111]" />
              <span>EDUCATION</span>
            </div>

            <div className="space-y-6">
              {education.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 border border-[#D9D9D5] space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs font-mono text-[#8A8A8A] gap-1">
                    <span>{item.period}</span>
                    <span className="font-semibold text-[#111111] bg-[#F5F5F2] px-2 py-0.5 border border-[#D9D9D5]">
                      {item.grade}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                    {item.institution}
                  </h3>

                  <p className="text-sm text-[#666666]">
                    {item.degree}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column (Compact per Section 16) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center space-x-2 pb-3 border-b border-[#111111] text-xs font-mono uppercase tracking-wider text-[#111111] font-bold">
              <Award className="w-4 h-4 text-[#111111]" />
              <span>CERTIFICATIONS</span>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 border border-[#D9D9D5] space-y-2"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#8A8A8A]">
                    <span>{cert.issuer}</span>
                    <span>{cert.year}</span>
                  </div>
                  <h4 className="text-base font-semibold text-[#111111] leading-snug">
                    {cert.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
