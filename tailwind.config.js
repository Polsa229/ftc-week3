/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FCEED5",
          80: "#F7DBA7",
          100: "#FFE7BA",
        },
        secondary: {
          DEFAULT: "#003459",
          80: "#002A48",
          100: "#00171F",
          60: "#667479",
          40: "#99A2A5",
        },
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
