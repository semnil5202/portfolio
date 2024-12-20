import { transform } from 'next/dist/build/swc';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        md: { min: '1px', max: '767px' },
        lg: { min: '768px', max: '1139px' },
        xl: { min: '1600px' },
        tall: { raw: '(max-height: 619px)' },
        'limit-width': { raw: '(max-width: 343px)' },
        'limit-height': { raw: '(max-height: 543px)' },
      },
      colors: {
        primary: '#2A392F',
        'primary-dark': '#2C3533',
        dark: '#191F1E',
      },
      height: {
        'swiper-max': 'max-content !important',
        'swiper-min': 'min-content !important',
        'swiper-full': '100% !important',
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
        navHintMove: {
          '25%': {
            transform: 'translateX(50%)',
          },
          '75%': {
            transform: 'translateX(50%)',
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
        newTab: {
          '0%': {
            transform: 'scale(0)',
          },
          '35%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        notifyToggle: {
          '0%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.3',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'init-background': 'initBackground 1s ease',
        'init-fade-in': 'initFadeIn 1.5s ease',
        'init-fade-in-move': 'initFadeInMove 1.5s ease',
        flickering: 'flickering 1s infinite step-start',
        'nav-hint-move': 'navHintMove 1.5s ease 3000ms',
        'slide-image-hint-move': 'slideImageHintMove 1.5s ease 1500ms',
        'new-tab': 'newTab 4s infinite ease',
        'notify-toggle': 'notifyToggle 1s 2 linear 1500ms',
      },
    },
  },
  plugins: [],
};
export default config;
