const fs = require('fs/promises')
const path = require('path')

const staticvueFolder = path.resolve(__dirname, 'dist', 'staticvue')

/**
 * 由于服务器端代码必须为固定的名字，而打包后的名字又是随机的，所以需要在打包后运行这个命令，将需要更改名字的文件更名
 */
async function changeFileName() {
  // 更改 css 目录下的内容
  const cssFiles = await fs.readdir(path.resolve(staticvueFolder, 'css'))
  const targetCssName = cssFiles.find(fileName => /^app.(.+).css$/.test(fileName))
  await fs.rename(path.resolve(staticvueFolder, 'css', targetCssName), path.resolve(staticvueFolder, 'css', 'app.522ed0ee5d62d43ab0dae811b3672378.css'))

  // 更改 js 目录下的内容
  const jsFiles = await fs.readdir(path.resolve(staticvueFolder, 'js'))
  const targetVendorName = jsFiles.find(fileName => /^vendor.(.+).js/.test(fileName))
  await fs.rename(path.resolve(staticvueFolder, 'js', targetVendorName), path.resolve(staticvueFolder, 'js', 'vendor.c450a44612c2a903798c.js'))
  const targetManifestName = jsFiles.find(fileName => /^manifest.(.+).js/.test(fileName))
  await fs.rename(path.resolve(staticvueFolder, 'js', targetManifestName), path.resolve(staticvueFolder, 'js', 'manifest.521d741a7473e6130ef5.js'))
  const targetAppName = jsFiles.find(fileName => /^app.(.+).js/.test(fileName))
  await fs.rename(path.resolve(staticvueFolder, 'js', targetAppName), path.resolve(staticvueFolder, 'js', 'app.778c3d7ffb074cb8a134.js'))
}

changeFileName()