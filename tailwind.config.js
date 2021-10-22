// const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // primary: "#0202225",
      // secondary: "#5865F2",
      // gray: colors.trueGray,

      gray: {
        900: "#202225",
        800: "#2F3136",
        700: "#36393F",
        600: "#4F545C",
        400: "#D4D7DC",
        300: "#E3E5E8",
        200: "#EBEDEF",
        100: "#F2F3F5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
