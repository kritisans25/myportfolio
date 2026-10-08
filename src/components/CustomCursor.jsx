import React from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor({ x, y, cursorText, cursorVariant, isTouchDevice }) {
  if (isTouchDevice || typeof window === 'undefined') {
    return null;
  }

  // Check prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return null;
  }

  const isExpanded = cursorVariant === 'hover' || Boolean(cursorText);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center text-center font-mono font-medium"
        animate={{
          x: x - (isExpanded ? 36 : 6),
          y: y - (isExpanded ? 36 : 6),
          width: isExpanded ? 72 : 12,
          height: isExpanded ? 72 : 12,
          backgroundColor: isExpanded ? '#111111' : '#111111',
          color: '#F5F5F2',
          scale: 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.4,
        }}
        style={{
          opacity: x > 0 && y > 0 ? 1 : 0,
        }}
      >
        {cursorText && (
          <span className="text-[10px] tracking-wider uppercase font-mono px-1">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
}
