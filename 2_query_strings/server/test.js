const http = require("http");
const url = require("url");
const hostname = 'localhost';
const port = 80;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead(200, {'Content-Type': "text/html"});
  const queryData = url.parse(req.url, true).query;
  const date = new Date(Date.now());
  res.end(JSON.stringify({
    hostname,
    port,
    queryData,
    date
  }));
});

server.listen(port, hostname, () => {
 console.log(`http://${hostname}:${port}/` + " ok");
});
