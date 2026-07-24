import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1f5ff',
          100: '#dbe7ff',
          200: '#bfd2ff',
          300: '#91b0ff',
          400: '#5d87ff',
          500: '#3f6df6',
          600: '#2e55d4',
          700: '#2647aa',
          800: '#243f8a',
          900: '#233a71',
        },
      },
      boxShadow: {
        soft: '0 15px 45px rgba(31, 41, 55, 0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
