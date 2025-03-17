import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Inter', 'monospace'],
      },
    },
  },
  darkMode: 'media',
  plugins: [],
  safelist: [
    'font-bold',
    'text-5xl',
    'text-4xl',
    'text-3xl',
    'text-base',
    'leading-relaxed',
    'mb-4',
    'mb-6',
    'mb-3',
  ],
};

export default config; 