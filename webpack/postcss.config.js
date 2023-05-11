module.exports = {
  plugins: [
    // 根据 .browserslistrc 内容来配置兼容浏览器
    require('postcss-preset-env')
  ]
}