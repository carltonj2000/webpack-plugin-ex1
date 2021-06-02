const { resolve } = require("path");
const webpackPluginEx1 = require("./webpack-plugin-ex1");

module.exports = {
  mode: "development",
  entry: resolve(__dirname, "src/index.js"),
  output: { filename: "bundle.js" },
  plugins: [new webpackPluginEx1({ env: "staging" })],
};
