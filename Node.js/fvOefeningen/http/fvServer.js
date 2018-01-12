'use strict';

var http = require('http');

http.createServer(function (req, res) {
    console.log(req);
    res.writeHead(200, {
        'Content-Type': 'text/xml'
    });
    res.write("<users><fred><name>Frederik</name></fred><kat><name>Katrien</name></kat></users>");
    res.end();
}).listen(8081)
console.log("server listening on port 8081");