const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.write(data);
    res.end();
  });
}).listen(8080);
