// Create Web Server
// Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:

// Use the createServer method to create a web server:
// Use the createReadStream method to read the requested file:
// If the file is not found, return a 404 error:

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
