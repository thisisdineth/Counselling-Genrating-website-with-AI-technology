const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

const port = 8000;

https.createServer(options, app).listen(port, () => {
  console.log(`Server running at https://localhost:${port}/`);
});
