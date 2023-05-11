const { merge } = require('webpack-merge')
const common = require('./webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 将 js 抽离为单独的 css 文件
          MiniCssExtractPlugin.loader,
          // css -> js 数组
          {
            loader: 'css-loader',
            options: {
              // 当 css 文件引入 css 文件时,被引入文件并不会进行代码兼容化处理,故需往前一步
              importLoaders: 1
            }
          },
          // 设置了 postcss.config.js 的配置
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // 当 css 文件引入 css 文件时,被引入文件并不会进行代码兼容化处理,故需往前一步
              importLoaders: 1
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    })
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ],
    minimize: false,
    // tree-shaking,将没用到的变量和函数移除掉
    usedExports: true
  },
  // 开启 hidden,不关联 sourcemap,但是生成 sourcemap
  devtool: 'hidden-source-map'
})