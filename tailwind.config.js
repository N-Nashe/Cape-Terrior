/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50:  '#fdf2f4',
          100: '#fbe8eb',
          200: '#f5cdd4',
          300: '#eda3b0',
          400: '#e27085',
          500: '#d14460',
          600: '#b82643',
          700: '#9a1d37',
          800: '#821b33',
          900: '#6B2737',
          950: '#3d0d18',
        },
        gold: {
          50:  '#fdfbeb',
          100: '#fbf3c8',
          200: '#f7e492',
          300: '#f2cf55',
          400: '#ecba2b',
          500: '#d9a01a',
          600: '#B8962E',
          700: '#9a6e13',
          800: '#7e5716',
          900: '#6b4817',
          950: '#3e270a',
        },
        cream: '#FAF5EE',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
