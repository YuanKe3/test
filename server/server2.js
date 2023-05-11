const http = require('http')
http.createServer((req, res) => {
  res.writeHead(200, {
    'Access-Control-Allow-Origin': 'http://localhost:8888',
    'Access-Control-Allow-Methods': 'POST,PUT,DELETE',
    'Access-Control-Allow-Headers': 'X-Test-Cors',
    // 'Access-Control-Max-Age': '5'
  })
  res.end('123')
}).listen(8886)

console.log('server ok')