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
      transparent: 'transparent',
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
      skeleton: {
        '0%': {
          'background-color': '#BFBFBF',
        },
        '50%': {
          'background-color': '#767676',
        },
        '100%': {
          'background-color': '#BFBFBF',
        },
      },
      navHintMove: {
        '25%': {
          transform: 'translateX(-50%)',
        },
        '75%': {
          transform: 'translateX(-50%)',
        },
      },
      slideImageHintMove: {
        '25%': {
          transform: 'translateX(-25%)',
        },
        '75%': {
          transform: 'translateX(-25%)',
        },
      },
    },
    animation: {
      'init-background': 'initBackground 1s ease',
      'init-fade-in': 'initFadeIn 1.5s ease',
      'init-fade-in-move': 'initFadeInMove 1.5s ease',
      flickering: 'flickering 1s infinite step-start',
      skeleton: 'skeleton 2s infinite ease-out',
      'nav-hint-move': 'navHintMove 1.5s ease 3000ms',
      'slide-image-hint-move': 'slideImageHintMove 1.5s ease 1500ms',
    },
  },
  plugins: [],
};
export default config;
