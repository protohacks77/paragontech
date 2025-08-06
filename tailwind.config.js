/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f3e8ff',
          100: '#e9d5ff',
          500: '#8E44AD',
          600: '#9B59B6',
          700: '#7c3aed',
          900: '#4c1d95',
        },
        cyber: {
          blue: '#00FFFF',
          green: '#00FFB3',
          purple: '#A020F0',
        },
        light: {
          900: '#F5F5F5',
          800: '#E5E5E5',
          700: '#D4D4D4',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-gradient': 'linear-gradient(135deg, #F5F5F5 0%, #E5E5E5 50%, #D4D4D4 100%)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { boxShadow: '0 0 5px #A020F0, 0 0 10px #A020F0, 0 0 15px #A020F0' },
          '100%': { boxShadow: '0 0 10px #A020F0, 0 0 20px #A020F0, 0 0 30px #A020F0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%': { textShadow: '0 0 5px #A020F0' },
          '100%': { textShadow: '0 0 20px #A020F0, 0 0 30px #C471F5' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};