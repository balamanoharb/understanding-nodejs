var http = require('http');
var fs = require('fs')
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  fs.createReadStream('../hello.html', 'utf-8').pipe(res)
}).listen(1337, '127.0.0.1')