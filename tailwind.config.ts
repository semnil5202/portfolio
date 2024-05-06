import { transform } from 'next/dist/build/swc';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#2A392F',
    },
    screens: {
      sm: '768px',
      lg: '1280px',
    },
    keyframes: {
      initBackground: {
        '0%': {
          transform: 'translateX(-100%)',
        },
        '100%': {
          transform: 'translateX(0)',
        },
      },
    },
    animation: {
      'init-background': 'initBackground 1s ease',
    },
  },
  plugins: [],
};
export default config;
