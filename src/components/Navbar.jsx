import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ isScrolled, scrollDirection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Identity', href: '#identity' },
    { name: 'Beyond Code', href: '#beyond-code' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5F5F2]/90 backdrop-blur-md border-b border-[#D9D9D5] py-4'
            : 'bg-transparent py-6 md:py-8'
        } ${scrollDirection === 'down' && isScrolled && !mobileMenuOpen ? '-translate-y-full md:translate-y-0' : 'translate-y-0'}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#"
            className="group flex items-center space-x-3 text-[#111111] focus:outline-none"
            aria-label="Sanskriti Singh Portfolio Home"
          >
            <span className="font-mono text-sm tracking-widest font-semibold uppercase group-hover:opacity-70 transition-opacity">
              {portfolioData.personal.firstName.toUpperCase()}
            </span>
            <span className="hidden sm:inline-block font-mono text-[11px] text-[#8A8A8A] border-l border-[#D9D9D5] pl-3">
              PORTFOLIO 2026
            </span>
          </a>

          {/* Availability Status Badge (Desktop) */}
          <div className="hidden lg:flex items-center space-x-2 text-[11px] font-mono uppercase tracking-wider text-[#666666] bg-white border border-[#D9D9D5] px-3 py-1 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{portfolioData.personal.status}</span>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-wider uppercase text-[#666666]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#111111] transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col items-end justify-center w-8 h-8 space-y-1.5 focus:outline-none text-[#111111]"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`h-0.5 bg-[#111111] transition-all duration-300 ${
                mobileMenuOpen ? 'w-6 translate-y-2 rotate-45' : 'w-6'
              }`}
            />
            <span
              className={`h-0.5 bg-[#111111] transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : 'w-4'
              }`}
            />
            <span
              className={`h-0.5 bg-[#111111] transition-all duration-300 ${
                mobileMenuOpen ? 'w-6 -translate-y-2 -rotate-45' : 'w-5'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-30 bg-[#F5F5F2] flex flex-col justify-between p-8 pt-28 transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase text-[#666666] mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span>{portfolioData.personal.status}</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-light tracking-tight text-[#111111] hover:text-[#666666] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-[#D9D9D5] text-xs font-mono text-[#8A8A8A] flex flex-col space-y-2">
          <span>{portfolioData.personal.email}</span>
          <span>SANSKRITI SINGH © 2026</span>
        </div>
      </div>
    </>
  );
}
