import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function TechnicalIdentity() {
  const { technicalIdentity } = portfolioData;

  return (
    <section id="identity" className="py-24 md:py-36 border-t border-[#D9D9D5] bg-[#F5F5F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 pb-8 border-b border-[#D9D9D5]">
          <div className="text-xs font-mono uppercase tracking-widest text-[#8A8A8A] mb-4">
            [ 03 // TECHNICAL IDENTITY ]
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-[#111111] uppercase max-w-4xl leading-[0.95]">
            I LIKE BUILDING<br />
            FROM THE MODEL<br />
            <span className="text-[#666666]">TO THE SYSTEM.</span>
          </h2>
        </div>

        {/* Elegant Editorial List Layout (NOT generic colorful pills) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {technicalIdentity.categories.map((category, index) => (
            <div key={category.name} className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-[#111111] pb-2">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#111111] font-bold">
                  [{String(index + 1).padStart(2, '0')}] {category.name}
                </h3>
                <span className="font-mono text-[10px] text-[#8A8A8A]">
                  {category.skills.length} ITEMS
                </span>
              </div>

              <ul className="space-y-2 pt-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center justify-between text-sm md:text-base text-[#333333] hover:text-[#111111] transition-colors py-1 border-b border-[#E5E5E0] font-normal"
                  >
                    <span>{skill}</span>
                    <span className="text-[10px] font-mono text-[#A0A0A0]">/</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
