const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
  if (req.url === '/') {
    const html = fs.readFileSync('index.html', 'utf-8')
    res.writeHead(200, {
      'Content-type': 'text/html'
    })
    res.end(html)
  }
  if (req.url === '/hello.js') {
    const etag = req.headers['if-none-match']
    if (etag === '456') {
      res.writeHead(304, {
        'Content-type': 'text/javascript',
        'Cache-Control': 'max-age=3000,no-cache',
        'last-Modified': '123',
        'Etag': '456'
      })
      res.end('122223')
    } else {
      res.writeHead(200, {
        'Content-type': 'text/javascript',
        'Cache-Control': 'max-age=3000,no-cache',
        'last-Modified': '123',
        'Etag': '456'
      })
      res.end('console.log("我特别帅啊3")')
    }
  }
}).listen(8888)

console.log('server ok')