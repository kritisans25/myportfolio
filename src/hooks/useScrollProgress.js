import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('none');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalScroll > 0) {
        setScrollProgress(currentScroll / totalScroll);
      }

      setIsScrolled(currentScroll > 50);

      if (currentScroll > lastScrollY && currentScroll > 120) {
        setScrollDirection('down');
      } else if (currentScroll < lastScrollY) {
        setScrollDirection('up');
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollProgress, isScrolled, scrollDirection };
}
