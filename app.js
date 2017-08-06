var express = require('express');
var app = express();
var port = normalizePort(process.env.PORT || '3000');

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

app.get('*', function (req, res) {
  res.sendfile(__dirname + '/dist/index.html');
})

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})

console.log('hello world');
