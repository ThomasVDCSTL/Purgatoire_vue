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
      colors: {
        primary: {
          100: "#D1E7DD",
          200: "#A3CFBB",
          300: "#75B79A",
          400: "#479078",
          500: "#1A7856",
          600: "#145F45",
          700: "#0F4634",
          800: "#092D23",
          900: "#041412",
        },
        secondary: {
          100: "#F0E2D8",
          200: "#E1C5B1",
          300: "#D2A88A",
          400: "#C38B63",
          500: "#B46E3C",
          600: "#8F5530",
          700: "#6A3C24",
          800: "#452318",
          900: "#200A0C",
        },
        accent: {
          100: "#F2E5D9",
          200: "#E5CBB3",
          300: "#D9B18D",
          400: "#CC9767",
          500: "#BF7D41",
          600: "#996737",
          700: "#734D2D",
          800: "#4D3322",
          900: "#271918",
        },
        gray: {
          100: "#F8F9FA",
          200: "#F1F3F5",
          300: "#EAEDF0",
          400: "#E3E7EB",
          500: "#DCDFE4",
          600: "#C7CCD1",
          700: "#B2B9BF",
          800: "#9DA5AD",
          900: "#88929A",
        },
        white: "#FFFCF9",
        white2: "#FFF5EB",
        white3: "#F5F5F5",
        black: "#2A3D45",
        black2: "#364E59",
        black3: "#27383F",
        red : "#EB5E55",
        blue : "#5FA8D3",

      },
    },
  },
  plugins: [daisyui,],
}

