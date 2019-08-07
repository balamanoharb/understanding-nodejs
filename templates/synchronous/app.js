var http = require('http');
var fs = require('fs')
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  html = fs.readFileSync('../hello.html', 'utf-8')
  html = html.replace('{Message}', "Hello world...")
  res.end(html)
}).listen(1337, '127.0.0.1')