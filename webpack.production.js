const { merge } = require("webpack-merge");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  output: {
    auxiliaryComment: "webpacked typescript output",
    clean: {
      keep: /ingnored\/dir\//,
    },
  },
  plugins: [new CompressionWebpackPlugin()],
});
