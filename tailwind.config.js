/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "screen-minus-navbar": "calc(100vh - 64px)",
      },
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
          20: "#CCD1D2",
          10: "#EBEEEF",
        },
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
