const CracoEsbuildPlugin = require("craco-esbuild");

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  plugins: [{ plugin: CracoEsbuildPlugin }],
};
