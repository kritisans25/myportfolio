import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onCursorHover, onCursorLeave }) {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-40 border-t border-[#D9D9D5] bg-[#F5F5F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Tag */}
        <div className="text-xs font-mono uppercase tracking-widest text-[#8A8A8A] mb-8 pb-4 border-b border-[#D9D9D5]">
          [ 07 // CONTACT &amp; CONNECT ]
        </div>

        {/* Large Editorial Headline */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#111111] uppercase leading-[0.92]">
            LET&apos;S BUILD<br />
            SOMETHING<br />
            <span className="text-[#666666]">USEFUL.</span>
          </h2>
        </div>

        {/* Direct Email Bar & Action Button */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-16 border-b border-[#D9D9D5]">
          <div className="lg:col-span-7 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A8A]">
              DIRECT COMMUNICATION
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${personal.email}`}
                className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111] hover:text-[#666666] transition-colors border-b-2 border-[#111111] pb-1 font-mono tracking-tight"
                onMouseEnter={() => onCursorHover && onCursorHover('EMAIL')}
                onMouseLeave={() => onCursorLeave && onCursorLeave()}
              >
                {personal.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase bg-white border border-[#D9D9D5] px-3 py-2 text-[#666666] hover:text-[#111111] hover:border-[#111111] transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex lg:justify-end">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center space-x-3 px-8 py-5 bg-[#111111] text-[#F5F5F2] hover:bg-[#333333] transition-all duration-200 font-mono text-sm tracking-wider uppercase font-semibold group shadow-sm hover:translate-x-0.5 hover:-translate-y-0.5"
              onMouseEnter={() => onCursorHover && onCursorHover('WRITE')}
              onMouseLeave={() => onCursorLeave && onCursorLeave()}
            >
              <span>GET IN TOUCH</span>
              <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs uppercase">
          {personal.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-5 border border-[#D9D9D5] flex items-center justify-between hover:border-[#111111] transition-colors"
              onMouseEnter={() => onCursorHover && onCursorHover(social.name)}
              onMouseLeave={() => onCursorLeave && onCursorLeave()}
            >
              <div>
                <span className="text-[#8A8A8A] block text-[10px]">{social.label}</span>
                <span className="text-[#111111] font-semibold text-sm">{social.name}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#8A8A8A] group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
