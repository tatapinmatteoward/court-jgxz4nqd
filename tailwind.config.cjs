/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        accent: '#22c55e',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
