const { resolve } = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.config')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = merge(common, {
  devServer: {
    static: {
      directory: resolve(__dirname, 'build')
    },
    compress: true,
    port: 3000,
    open: false,
    hot: true
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ],
    // 在开发环境下启用 CSS 优化
    minimize: true
  },
  // 每个模块单独做映射用 eval;cheap 可以找到源码某一行,提升速度;module 来映射 loader 最初源码
  devtool: 'eval-cheap-module-source-map'
})