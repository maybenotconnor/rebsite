/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        heading: ["Fraunces", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        sage: {
          50: '#f4f7ee',
          100: '#e6eed6',
          200: '#cfddb0',
          300: '#b1c684',
          400: '#7fa05c',
          500: '#678846',
          600: '#4f6b35',
          700: '#3e542b',
          800: '#334324',
          900: '#2a381f',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
