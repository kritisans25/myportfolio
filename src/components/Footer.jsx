import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#D9D9D5] bg-[#F5F5F2] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs font-mono text-[#666666]">
        {/* Copyright */}
        <div className="space-y-1">
          <p className="text-[#111111] font-semibold">
            © 2026 {portfolioData.personal.name}
          </p>
          <p className="text-[#8A8A8A]">
            Built with React · Designed &amp; engineered by Sanskriti
          </p>
        </div>

        {/* Back to Top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="group inline-flex items-center space-x-2 text-[#111111] hover:text-[#666666] transition-colors uppercase tracking-wider py-1 border-b border-transparent hover:border-[#111111]"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}
