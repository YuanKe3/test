const router = require('koa-router')()
const KoaBody = require('koa-body')
const path = require('path')
const fs = require('fs/promises')
const { pipeline } = require('stream/promises')
const fsSync = require('fs')

const koaBodySetting = {
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, '..'),
    keepExtensions: true
  }
}

const TARGET_FOLDER = path.join(__dirname, '..', 'uploadFiles')
fs.access(TARGET_FOLDER).catch(() => {
  fs.mkdir(TARGET_FOLDER)
    .then(() => console.log('新建保存图片处成功'))
    .catch(e => console.log(e))
})

const saveFile = async ({ name, type, size, filePath }) => {
  if (size > 1024 * 1024 * 1024) {
    fs.rm(filePath)
      .then(() => { return new ErrorModel('图片过大') })
      .catch(e => console.log(e))
  }
  const fileName = Date.now() + '.' + name
  const targetFilePath = path.join(TARGET_FOLDER, fileName)
  await pipeline(fsSync.createReadStream(filePath), fsSync.createWriteStream(targetFilePath))
  await fs.rm(filePath)
  return {
    errno: 0,
    url: '/' + fileName
  }
}

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    picture: 'https://cn.vuejs.org/images/logo.svg'
  })
})

router.post('/api/utils/upload', KoaBody(koaBodySetting), async (ctx, next) => {
  const file = ctx.request.files['file']
  const { size, filepath, originalFilename, mimetype } = file
  ctx.body = await saveFile({
    name: originalFilename,
    type: mimetype,
    size,
    filePath: filepath
  })
})

router.get('/api/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

// 最刚开始的时候就是/api/json，那时候是成功的
router.get('/api/json',
  async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:5173');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
      ctx.body = 200;
    } else {
      await next();
    }
  }, async (ctx, next) => {
    ctx.body = {
      title: 'koa2 json'
    }
  })

module.exports = router
