/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'aquamarine': '#1c4357',
        'lightblue': '#bfcfff',
        'darkblue': '#28617e',
        'darkerblue': '#102530',
        'whiteclear': '#f2f5ff',
        'skyblue': '#8ca9ff',
      },
      fontFamily: {
        'libre': ["var(--font-libre)"],
        'poppins': ["var(--font-poppins)"],
      },
     
    }
  },
  plugins: [],
}

