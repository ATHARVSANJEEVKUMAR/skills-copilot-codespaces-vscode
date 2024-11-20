var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
  var filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  fs.access(filePath, fs.constants.F_OK, function(err) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404 Not Found');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      var readStream = fs.createReadStream(filePath);
      readStream.pipe(res);
    }
  });
}).listen(8080);