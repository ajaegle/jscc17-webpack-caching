const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle-[hash].js",
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
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index-template.html'
  })]
};
