const postcssPresetEnv = require("postcss-preset-env");
const autoprefixer = require("autoprefixer");
const easyImport = require("postcss-easy-import");

module.exports = {
  plugins: [postcssPresetEnv({ stage: 0 }), autoprefixer, easyImport]
};
