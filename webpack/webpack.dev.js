const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const rules = [
  {
    test: /\.pug$/,
    use: "pug-loader"
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    use: "file-loader"
  },
  {
    test: /\.css$/,
    use: [
      { loader: MiniCssExtractPlugin.loader, options: { hmr: true } },
      // "style-loader",
      { loader: "css-loader", options: { importLoaders: 1 } },
      "postcss-loader"
    ]
  }
];

const plugins = [
  new HtmlWebpackPlugin({
    inject: false,
    template: "src/view/index.pug",
    filename: "index.html",
    title: "My Title",
    templateParameters: (compilation, assets, options) => ({
      config: compilation.options,
      assets,
      options
    })
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin()
];

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "[name].js",
    publicPath: "/"
  },
  target: "web",
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "..", "dist"),
    host: "0.0.0.0",
    allowedHosts: ["wsl"],
    hot: true
  },
  plugins,
  module: { rules }
};
