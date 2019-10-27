const http = require('http');
const url = require('url'); // URL handling
const fs = require('fs'); // File serving
const hostname = 'localhost';
const port = 80;
const data = {
  firstName: 'Jason',
  lastName: 'Xu',
  email: 'Fake@email.com',
  address: '10 Fake st',
  phone: "416-000-0000",
  verified: true
};

//Test with http://localhost/?firstName&lastName&email&address&phone&verified

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const queryData = url.parse(req.url, true).query;
  const returnData = {};
  Object.keys(queryData).map(key => {
    returnData[key] = data[key] || 'does not exist'
  });
  const date = new Date(Date.now());
  res.end(JSON.stringify(returnData));
});

server.listen(port, hostname, () => {
 console.log(`http://${hostname}:${port}/` + " ok");
});
