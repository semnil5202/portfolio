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
      'primary-dark': '#2C3533',
      dark: '#191F1E',
      link: '#BFBFBF',
      fff: '#ffffff',
    },
    screens: {
      sm: '768px',
      lg: '1280px',
    },
    scale: {
      135: '1.35',
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
      initFadeIn: {
        from: {
          opacity: '0',
        },
        to: {
          opacity: '1',
        },
      },
      initFadeInMove: {
        from: {
          opacity: '0',
          transform: 'translateY(20px)',
        },
        to: {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
    },
    animation: {
      'init-background': 'initBackground 1s ease',
      'init-fade-in': 'initFadeIn 1.5s ease',
      'init-fade-in-move': 'initFadeInMove 1.5s ease',
      flickering: 'flickering 1s infinite step-start',
    },
  },
  plugins: [],
};
export default config;
