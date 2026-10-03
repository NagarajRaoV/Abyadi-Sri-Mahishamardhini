import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        temple: {
          dark: '#1a0a00',
          darker: '#0d0500',
          mid: '#3d1500',
          saffron: '#d97706',
          gold: '#f59e0b',
          deepred: '#8B1A1A',
        },
      },
      fontFamily: {
        kannada: ['var(--font-kannada)', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
