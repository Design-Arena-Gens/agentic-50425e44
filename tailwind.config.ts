import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#6C5CE7',
          600: '#5A49DE',
          700: '#4A3FD1',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(108,92,231,0.35)',
      },
    },
  },
  plugins: [],
};
export default config;
