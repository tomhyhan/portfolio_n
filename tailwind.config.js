/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        appear: {
          '0%': { transform: 'translateY(2rem)', opacity: 0 },
          // '100%': {  },
        },
        disappear: {
          '100%': { transform: 'translateY(2rem)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
