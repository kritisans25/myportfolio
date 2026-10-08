import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, ChevronDown } from 'lucide-react';
import HeroScene from './3d/HeroScene';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onCursorHover, onCursorLeave }) {
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-14 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Immersive 3D WebGL Background Scene */}
      <HeroScene />

      {/* Foreground Editorial Layer */}
      <div className="relative z-10 pointer-events-none flex flex-col justify-between h-full flex-grow">
        {/* Top Meta Line */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono uppercase tracking-widest text-[#666666] border-b border-[#D9D9D5]/80 pb-4 mb-10 sm:mb-16 gap-2"
        >
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]"></span>
            <span>{personal.name.toUpperCase()}</span>
          </div>
          <div className="text-[#8A8A8A] flex items-center space-x-2">
            <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{personal.secondaryTitle}</span>
          </div>
        </motion.div>

        {/* Center Main Editorial Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="my-auto py-4"
        >
          <motion.div variants={itemVariants} className="overflow-hidden mb-6">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#111111] uppercase leading-[0.92] select-none">
              SOFTWARE<br />
              ENGINEER<br />
              <span className="text-[#666666] font-light italic font-serif">&amp;</span> BUILDER
            </h1>
          </motion.div>

          {/* Hero Supporting Paragraph */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 md:pt-10 border-t border-[#D9D9D5]/80"
          >
            <div className="md:col-span-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A8A]">
                [ 01 // INTRO ]
              </span>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl sm:text-2xl md:text-3xl text-[#111111] font-normal leading-relaxed tracking-tight max-w-3xl">
                {personal.heroStatement}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Row: Links & Interaction Indicators */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="pt-10 md:pt-14 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
        >
          {/* Social Links (pointer-events-auto for full interactivity) */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono tracking-wider uppercase text-[#666666] pointer-events-auto">
            {personal.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 hover:text-[#111111] transition-colors border-b border-transparent hover:border-[#111111] pb-0.5"
                onMouseEnter={() => onCursorHover && onCursorHover(social.name)}
                onMouseLeave={() => onCursorLeave && onCursorLeave()}
              >
                <span>{social.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ))}
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center space-x-1.5 hover:text-[#111111] transition-colors border-b border-transparent hover:border-[#111111] pb-0.5"
              onMouseEnter={() => onCursorHover && onCursorHover('MAIL')}
              onMouseLeave={() => onCursorLeave && onCursorLeave()}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

          {/* Interactive Scroll Indicator */}
          <a
            href="#work"
            className="flex items-center space-x-3 text-xs font-mono uppercase text-[#666666] hover:text-[#111111] transition-colors pointer-events-auto group py-1"
            onMouseEnter={() => onCursorHover && onCursorHover('EXPLORE')}
            onMouseLeave={() => onCursorLeave && onCursorLeave()}
          >
            <span className="tracking-wider">SCROLL TO EXPLORE</span>
            <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
