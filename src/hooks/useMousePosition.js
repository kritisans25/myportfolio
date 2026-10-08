import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch / mobile
    const checkTouch = () => {
      if (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 768
      ) {
        setIsTouchDevice(true);
      } else {
        setIsTouchDevice(false);
      }
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('resize', checkTouch);
    };
  }, []);

  return {
    ...mousePosition,
    cursorText,
    setCursorText,
    cursorVariant,
    setCursorVariant,
    isTouchDevice,
  };
}
