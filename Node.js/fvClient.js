'use strict';

var http = require('http');

// options to be used by request
var options = {
    host: '127.0.0.1',
    port: '8081',
    path: '/bestanden/input.txt'
}

// callback function is used to deal with response
var callback = function (response) {
    // continuously update stream with data
    var body = '';
    response.on('data', function (data) {
        body += data;
    })

    response.on('end', function () {
        // Data received completly
        console.log(body);
    })
}

// Make a request to the server
var req = http.request(options, callback);
req.end();