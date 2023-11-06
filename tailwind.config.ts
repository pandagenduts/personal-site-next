import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1250px",
      },
    },
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        bluePrimary: 'var(--mainBlue)',
        bluePrimaryHover: 'var(--mainBlueHover)',
        redSecondary: 'var(--secondaryRed)',
        mainGrey: 'var(--textGrey)',
        bgWhite: 'var(--bgWhite)',
      },
      boxShadow: {
        bsRound: '5px 5px 0 3px var(--mainBlue)',
        bsRound2: '16px 16px 8px -5px rgba(0, 0, 0, 0.3)',
        bsCust1: '0px 1px 8px -5px rgba(0, 0, 0, 0.3)',
      },
      fontSize: {
        h1: [
          '1.875rem',
          {
            lineHeight: '2.25rem',
            fontWeight: '600',
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
