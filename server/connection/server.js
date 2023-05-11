const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
  if (req.url === '/') {
    const html = fs.readFileSync('index.html', 'utf-8')
    res.writeHead(200, {
      'Content-type': 'text/html',
      'Connection': 'close'
    })
    res.end(html)
  } else {
    const img = fs.readFileSync('./1.png')
    res.writeHead(200, {
      'Content-type': 'image/png',
      'Connection': 'close'
    })
    res.end(img)
  }
}).listen(8888)

console.log('server ok')