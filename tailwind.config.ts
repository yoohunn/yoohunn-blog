import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '360px',
        md: '768px',
        lg: '1280px',
        xl: '1440px',
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
