var ip   = "127.0.0.1";
var port = 1337;
var http = require('http');

var os = require("os");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');	
  console.log("it coming");
}).listen(port, os.hostname());

console.log("Server running at http://" + ip + ":" + port);
