import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import tailwindcssColors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      // data/colors
      gray: tailwindcssColors.gray,
      red: tailwindcssColors.rose,
      orange: tailwindcssColors.orange,
      yellow: tailwindcssColors.yellow,
      amber: tailwindcssColors.amber,
      lime: tailwindcssColors.lime,
      green: tailwindcssColors.green,
      emerald: tailwindcssColors.emerald,
      teal: tailwindcssColors.teal,
      cyan: tailwindcssColors.cyan,
      sky: tailwindcssColors.sky,
      blue: tailwindcssColors.blue,
      indigo: tailwindcssColors.indigo,
      violet: tailwindcssColors.violet,
      purple: tailwindcssColors.purple,
      pink: tailwindcssColors.pink,
    },
    screens: {
      sm: '360px',
      md: '768px',
      lg: '1280px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, theme }) {
      addUtilities({
        '.flex-center': {
          '@apply flex items-center justify-center': {},
        },
        '.flex-row-center': {
          '@apply flex items-center': {},
        },
        '.flex-col-center': {
          '@apply flex flex-col items-center': {},
        },
      });
      // addComponents({
      //   '.card': {
      //     backgroundColor: theme('colors.white'),
      //     borderRadius: theme('borderRadius.lg'),
      //     padding: theme('spacing.6'),
      //     boxShadow: theme('boxShadow.xl'),
      //   },
      // });
    }),
  ],
};
export default config;
