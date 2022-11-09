var http = require('httP');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!:)');
}).listen(8080);
//
res.end('hello aseel!');
