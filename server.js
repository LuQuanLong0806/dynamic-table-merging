var http = require('http');
var fs = require('fs');
var path = require('path');
var dir = __dirname;
http.createServer(function(req, res) {
  var p = path.join(dir, req.url.split('?')[0]);
  fs.readFile(p, function(e, d) {
    if (e) { res.writeHead(404); res.end('not found'); return; }
    var ext = path.extname(p).slice(1);
    var ct = {html:'text/html',js:'application/javascript',css:'text/css',json:'application/json'}[ext]||'text/plain';
    res.writeHead(200, {'Content-Type': ct + ';charset=utf-8'});
    res.end(d);
  });
}).listen(8080, function() { console.log('http://localhost:8080/动态合并表格.html'); });
