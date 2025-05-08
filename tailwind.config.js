// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roobert)', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'spin-slow': 'spin 64s linear infinite',
      },
      colors: {
        testcolor: '#ff00ff',
      },
    },
  },
  plugins: [],
};