/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          500: '#00cc00', // Change this to your desired shade of green
          700: '#33B894', // Change this to your desired shade of dark green
        },
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      'xs': '580px',
      'md': '768px',
      'lg': '1024px',
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}