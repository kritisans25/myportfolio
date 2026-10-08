import React from 'react';
import { Sparkles, Palette, Users, Compass, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function BeyondCode() {
  const { leadership } = portfolioData;

  return (
    <section id="beyond-code" className="py-24 md:py-36 border-t border-[#D9D9D5] bg-[#F5F5F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 pb-8 border-b border-[#D9D9D5] flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#8A8A8A] mb-3">
              [ 04 // LEADERSHIP &amp; DESIGN ]
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-[#111111] uppercase">
              {leadership.sectionTitle}
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs uppercase tracking-wider text-[#666666] bg-white border border-[#D9D9D5] px-4 py-2">
            DESIGN HEAD // DREAM MERCHANTS CLUB, VIT
          </div>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 pb-16 border-b border-[#D9D9D5]">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
              Bridging engineering rigor with intentional design direction.
            </h3>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              {leadership.description}
            </p>
            <div className="pt-4 flex items-center space-x-3 text-xs font-mono text-[#8A8A8A]">
              <span>ROLE:</span>
              <span className="text-[#111111] font-semibold">{leadership.role}</span>
              <span>—</span>
              <span>{leadership.organization} ({leadership.institution})</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {leadership.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white p-5 border border-[#D9D9D5] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#8A8A8A] mb-3">
                  <span>AREA 0{idx + 1}</span>
                  <Palette className="w-3.5 h-3.5 text-[#111111]" />
                </div>
                <div className="text-sm font-semibold text-[#111111]">
                  {area}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Event / Initiative Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadership.initiatives.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#D9D9D5] p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono uppercase text-[#8A8A8A] mb-4">
                  <span>INITIATIVE // 0{idx + 1}</span>
                  <span className="bg-[#F5F5F2] px-2 py-0.5 border border-[#D9D9D5] text-[#111111]">
                    {item.category}
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-[#111111] uppercase tracking-tight mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Minimal Editorial Visual Thumbnail Container */}
              <div className="mt-8 pt-6 border-t border-[#D9D9D5] flex items-center justify-between text-xs font-mono text-[#8A8A8A]">
                <span>BRAND IDENTITY &amp; FIGMA SYSTEMS</span>
                <span>VIT CHAPTER</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
