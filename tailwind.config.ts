import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#2A392F',
      fff: '#ffffff',
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
      flickering: {
        from: {
          opacity: '0',
        },
        to: {
          opacity: '0',
        },
        '45%': {
          opacity: '1',
        },
        '55%': {
          opacity: '1',
        },
      },
    },
    animation: {
      'init-background': 'initBackground 1s ease',
      flickering: 'flickering 1s infinite step-start',
    },
  },
  plugins: [],
};
export default config;
