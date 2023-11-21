/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    colors: {
      white: "#FFFFFF",
      orange: "#F26643",
      blue: "#2898ec",
      blue10: "#33424F",
      blue01: "#c2e7ff",
      blue02: "#F0F2F2",
      navy: "#2F404D",
      navy01: "#33424F",
      navy02: "#E7E9EB",
      navy03: "#0B2132",
      navy04: "#374957",
      pink: "#FDE8E3",
      grey: "rgb(148 163 184)",
      black: "#000000",
    },
    boxShadow: {
      buttonShadow: "0px 4px 16px 0px rgba(51, 66, 79, 0.12156862745)",
      cardShadow: "2px 6px 30px 0px #33424F1F",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
