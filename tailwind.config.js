import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {


    extend: {
      fontFamily: {
        alfa: '"Alfa Slab One"',
        kanit: '"kanit", sans-serif',
        grokanit: '"kanit-bold"',
        inter: '"inter"',
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [daisyui,],
}

