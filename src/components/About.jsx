import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 md:py-36 border-t border-[#D9D9D5] bg-[#F5F5F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 pb-6 border-b border-[#D9D9D5]">
          <div className="text-xs font-mono uppercase tracking-widest text-[#8A8A8A] mb-3">
            [ 05 // ABOUT ]
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-[#111111] uppercase">
            ABOUT
          </h2>
        </div>

        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#8A8A8A]">
              PHILOSOPHY &amp; PERSPECTIVE
            </span>
            <div className="text-sm font-mono text-[#111111] border-l-2 border-[#111111] pl-4 py-1">
              {about.editorialTagline}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            {about.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-xl sm:text-2xl md:text-3xl text-[#222222] font-light leading-relaxed tracking-tight"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-8 border-t border-[#D9D9D5] grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-[#666666]">
              <div>
                <span className="text-[#8A8A8A] block mb-1">DEGREE</span>
                <span className="text-[#111111] font-semibold">B.Tech IT</span>
              </div>
              <div>
                <span className="text-[#8A8A8A] block mb-1">LOCATION</span>
                <span className="text-[#111111] font-semibold">Vellore, India</span>
              </div>
              <div>
                <span className="text-[#8A8A8A] block mb-1">STATUS</span>
                <span className="text-[#111111] font-semibold">Graduating 2027</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
