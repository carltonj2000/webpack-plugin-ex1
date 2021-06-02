class WebpackPluginEx1 {
  constructor(options) {
    this.options = options || { env: "dev" };
  }
  apply(compiler) {
    console.log("webpack plugin example 1 in", this.options.env);
    compiler.hooks.done.tap("wpex1", (stats) =>
      console.log(stats.compilation.options.mode)
    );
  }
}

module.exports = WebpackPluginEx1;
