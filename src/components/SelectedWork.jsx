import React, { useState } from 'react';
import ProjectRow from './ProjectRow';
import { portfolioData } from '../data/portfolioData';

export default function SelectedWork({ onSelectProject, onCursorHover, onCursorLeave }) {
  const { projects } = portfolioData;
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  return (
    <section id="work" className="py-24 md:py-36 border-t border-[#D9D9D5] bg-[#F5F5F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-6 border-b border-[#D9D9D5]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#8A8A8A] mb-3">
              [ 02 // SELECTED WORK ]
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-[#111111] uppercase">
              SELECTED WORK
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-base sm:text-lg text-[#666666] max-w-md font-normal leading-relaxed">
            A selection of systems, products, and experiments I&apos;ve built across software, machine learning, and DevOps.
          </p>
        </div>

        {/* Project Editorial Rows */}
        <div className="divide-y divide-[#D9D9D5] border-t border-[#D9D9D5]">
          {projects.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
              isHovered={hoveredProjectId === project.id}
              onMouseEnter={() => {
                setHoveredProjectId(project.id);
                onCursorHover && onCursorHover('VIEW');
              }}
              onMouseLeave={() => {
                setHoveredProjectId(null);
                onCursorLeave && onCursorLeave();
              }}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
