const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js",
    second: "./src/second.js"
  },
  output: {
    filename: "[name]-[hash].js",
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
