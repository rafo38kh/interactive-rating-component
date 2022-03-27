module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { overpass: ["Overpass", "sans-serif"] },
      colors: {
        tertiary: "hsl(25, 97%, 53%)",
        primaryLight: "hsl(217, 12%, 63%)",
        primary: "hsl(216, 12%, 54%)",
        primaryDark: "hsl(213, 19%, 18%)",
        secondary: "hsl(216, 12%, 8%)",
        starBg: "hsl(215, 20%, 22%)",
      },
      boxShadow: {
        customShadow: "hsla(213, 19%, 18%, 25%) 0px 7px 32px 0px",
      },
    },
  },
  plugins: [],
};
