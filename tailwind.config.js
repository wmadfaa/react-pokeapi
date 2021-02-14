const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { colors },
  },
  variants: {
    extend: {
      padding: ["odd", "even"],
      backgroundColor: ["odd", "even"],
      width: ["first"],
    },
  },
  plugins: [
    require("@jinsung.lim/tailwindcss-filters"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
