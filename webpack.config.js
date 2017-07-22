const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "rxjs"
  },
  output: {
    filename: "[name]-[chunkhash].js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.jpe?g$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: 'src/index-template.html'
  }),
  new webpack.optimize.CommonsChunkPlugin({
    names: ["common", "vendor", "manifest"]
  })
  ]
};
