/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#666ca3',
          900: '#13183F'
        },
        pink: {
          300: '#ffa7c3',
          600: '#f74780'
        },
        gray: {
          400: '#83869a'
        },
        white: '#ffffff'
      },
      spacing: {
        100: '8px',
        150: '12px',
        200: '16px',
        250: '20px',
        300: '24px',
        400: '32px',
        500: '40px',
        550: '44px',
        600: '48px',
        700: '56px',
        800: '64px',
        1000: '80px',
        1600: '128px',
        1800: '144px'
      }
    }
  },
  plugins: []
};
