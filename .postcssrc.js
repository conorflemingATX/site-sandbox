const postcssPresetEnv = require("postcss-preset-env");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [postcssPresetEnv({ stage: 0 }), autoprefixer]
};
