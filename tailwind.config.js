/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        draw: {
          '0%': { strokeDashoffset: 300 },
          '100%': { strokeDashoffset: 0 },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        sparkle: {
          '0%': { opacity: 0.2, transform: 'translateY(0) scale(1)' },
          '50%': { opacity: 1, transform: 'translateY(-10px) scale(1.2)' },
          '100%': { opacity: 0.2, transform: 'translateY(0) scale(1)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'draw-line': 'draw 1.2s ease-out forwards',
        'orbit': 'orbit 20s linear infinite',
        'sparkle': 'sparkle 4s ease-in-out infinite',
        'spinSlow': 'spinSlow 20s linear infinite',
        'float': 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
