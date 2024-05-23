/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      main: "#fff7ed",
      black: "#000000",
      orange: "#FF8C38",
      white: "rgba(255, 255, 255, 0)",
      blue: "blue",
      White: "#FFFFFF",
      red: "red",
      green: "green",
      darkgreen: "#115E59",
      gray: "#F3F4F6",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    textColor: {
      primary: "white",
      secondary: "black",
      red: "#FF8C38",
      blue: "blue",
      Gray: "rgb(107 114 128)",
    },
    height: {
      mainPageSize: "900px",
      screen: "85vh",
    },
    fontWeight: {
      bold: 900,
      semiBold: 600,
    },
    fontSize: {
      vs: "0.6rem",
      small: "0.8rem",
      medium: "1.5rem",
      large: "2rem",
      veryLarge: "3rem",
    },
  },
  plugins: [],
};
