/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        heading: ["Archivo", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        cream: '#faf9f5',
        bronze: {
          DEFAULT: '#b28050',
          dark: '#96683d',
        },
        sand: {
          DEFAULT: '#e6bf94',
          dark: '#dcae7a',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
