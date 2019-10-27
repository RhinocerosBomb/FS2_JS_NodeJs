const http = require('http');
const url = require('url'); // URL handling
const fs = require('fs'); // File serving

const hostname = 'localhost';
const port = 80;
http.createServer(function (req, res) {
 var queryData = url.parse(req.url, true);
 var filename;

 if (queryData.pathname === '/') {
   filename = '../client' + '/index.html';
 } else {
   filename = '../client' + queryData.pathname;
 }

 fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
 });
}).listen(port, hostname, () => {
 console.log(`http://${hostname}:${port}/` + ' ok');
});
