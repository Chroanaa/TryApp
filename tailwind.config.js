/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      header: "#fff7ed",
      black: "#000000",
      orange: "#FF8C38",
      white: "rgba(255, 255, 255, 0)",
      blue: "blue",
      White: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    textColor: {
      primary: "white",
      secondary: "black",
      red: "#FF8C38",
    },
    height: {
      mainPageSize: "900px",
    },
    fontWeight: {
      bold: 900,
    },
  },
  plugins: [],
};
