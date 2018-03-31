var http = require("http");
var url = require('url');


http.createServer( function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var u =url.parse(req.url, true)
  var q = u.query;
  var txt = u.pathname + " " + q.year + " " + q.month;

  res.end(txt);
}).listen(3001);
