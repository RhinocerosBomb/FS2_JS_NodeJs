const http = require("http");
const hostname = 'localhost';
const port = 999;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const date = new Date(Date.now());
  res.end(JSON.stringify({
    hostname,
    port,
    date
  }));
});

server.listen(port, hostname, () => {
 console.log(`http://${hostname}:${port}/` + " ok");
});
