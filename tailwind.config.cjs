/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        mist: '#F8F8F6',
        stone: '#D9D4CC',
        graphite: '#2B2B2B',
        taupe: '#B6A89A',
      },
      fontFamily: {
        display: ['Inter', 'Avenir Next', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        body: ['Inter', 'Avenir Next', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      keyframes: {
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSoft: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -14px, 0)' },
        },
        driftWide: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(12px, -8px, 0)' },
        },
      },
      animation: {
        reveal: 'revealUp 0.9s ease both',
        floatSoft: 'floatSoft 8s ease-in-out infinite',
        driftWide: 'driftWide 10s ease-in-out infinite',
      },
      letterSpacing: {
        widest: '0.32em',
      },
    },
  },
  plugins: [],
};