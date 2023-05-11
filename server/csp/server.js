const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
  if (req.url === '/') {
    const html = fs.readFileSync('index.html', 'utf-8')
    res.writeHead(200, {
      'Content-type': 'text/html',
      'Content-Security-Policy': 'default-src \'self\' www.baidu.com'
    })
    res.end(html)
  } else {
    res.writeHead(200, {
      'Content-type': 'text/javascript'
    })
    res.end('console.log("我实在是太帅了吧卧槽")')
  }
}).listen(8888)

console.log('server ok')