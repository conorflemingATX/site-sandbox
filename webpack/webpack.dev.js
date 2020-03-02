const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pages = require("./pageConfig");

const rules = [
  {
    test: /\.pug$/,
    use: "pug-loader"
  },
  {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      }
    ]
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    loader: "file-loader",
    options: {
      name: "[name].[ext]"
    }
  },
  {
    test: /\.(mov|mp4)$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      }
    ]
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
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  ...pages.map(page => new HtmlWebpackPlugin(page))
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
    disableHostCheck: true,
    hot: true
  },
  plugins,
  module: { rules }
};
