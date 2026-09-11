/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FFFDF8',
          100: '#FBF5EA',
          200: '#F5EAD3',
          300: '#EDD9B0',
          400: '#E0C388',
          500: '#D0A95F',
          600: '#B88E3E',
          700: '#8F6A2A',
          800: '#6B4F1F',
          900: '#4A3614',
        },
        maroon: {
          50: '#FDF4F4',
          100: '#FAE5E5',
          200: '#F5CCCC',
          300: '#ECA3A3',
          400: '#DC7070',
          500: '#C44A4A',
          600: '#A32E2E',
          700: '#7A1F1F',
          800: '#5C1717',
          900: '#3D0F0F',
          950: '#260808',
        },
        gold: {
          50: '#FDFBF0',
          100: '#FAF3D8',
          200: '#F3E7B0',
          300: '#E9D27E',
          400: '#DCB94D',
          500: '#C9A030',
          600: '#A87F22',
          700: '#85621B',
          800: '#634A17',
          900: '#423112',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Marcellus"', 'Georgia', 'serif'],
        tamil: ['"Noto Serif Tamil"', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-out forwards',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
