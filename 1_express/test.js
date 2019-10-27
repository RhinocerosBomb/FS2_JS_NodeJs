const port = 999;
const hostname = 'localhost';
const express = require('express')
const app = express();
app.get('/', (req, res) => {
 res.json({
   hostname,
   port,
   date: new Date(Date.now())
 });
});

app.listen(port, () => {
 console.log("SUCCESS!");
 console.log({
   hostname,
   port,
   date: new Date(Date.now())
 });
});
