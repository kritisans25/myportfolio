/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: '#F5F5F2',
          primary: '#111111',
          secondary: '#666666',
          muted: '#8A8A8A',
          border: '#D9D9D5',
          surface: '#FFFFFF',
          accent: '#2A2A2A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.12em',
      },
    },
  },
  plugins: [],
};
