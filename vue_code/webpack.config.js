const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  entry: './src/index.js',
  output: {
    filename: 'static/js/main.js'
  },
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ]
}

module.exports = config
