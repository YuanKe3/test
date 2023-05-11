const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

/**
 * @type {import('webpack').Configuration}
 */
 module.exports = {
  mode: isProd ? 'production' : 'development',
  // 入口
  entry: './src/index.ts',
  // 出口
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
    // 这样要访问 localhost:3000/main/index.html 才能进行访问了
    // publicPath: '/main/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 将 css 内容置于 style 标签上
          'style-loader',
          // 将 css 解析为 js(是个数组 arr[0][1] 就是 css 内容)
          'css-loader'
        ],
        sideEffects: true
      },
      {
        // sass 也要下载
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        sideEffects: true
      },
      {
        test: /\.(jpg|png|gif|svg|jpe?g)/i,
        type: 'asset',
        generator: {
          // name 原名 hash 哈西值 ext 后缀名
          filename: 'img/[name].[hash:5][ext]'
        }
      },
      {
        test: /\.html$/,
        // 解析 html 中的图片
        loader: 'html-loader'
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:3][ext]'
        }
      },
      {
        test: /\.txt$/,
        type: 'asset/source'
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'ts-loader'
        ]
      }
    ]
  },
  plugins: [
    // 打包 html 资源到 build 中
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // npm run dev/build 后自动清除 build 目录
    new CleanWebpackPlugin(),
    // 将 public 目录下的文件放入 build 里去(如网站图标)
    // <link rel="icon" href="../public/favicon.ico" />
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3010',
        // 请求 /api/users -> /users
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  resolve: {
    // 省略后缀名
    extensions: ['.js', '.json', '.jsx', '.ts'],
    alias: {
      // 对路径起别名
      '@': resolve(__dirname, 'src')
    }
  }
}