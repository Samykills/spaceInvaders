const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  devtool: "inline-source-map",
  devServer: {
    static: "./public",
    hot: true,
    client: false,
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: "Hot Module Replacement",
    // }),
    // Plugin for hot module replacement
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/dist"),
  },
};
