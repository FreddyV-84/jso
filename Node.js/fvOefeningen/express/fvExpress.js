'use strict';

var express = require('express');
var server = express();


// volgorde is belangrijk

// get: request method = GET
// path: /hello.html
server.get('/hello', function (req, res) {
    res.sendFile(__dirname + "/hello.html");
});

// get: request method GET
// path: eindigd op .html
server.get('/*.html', function (req, res) {
    console.log("GET request for html file received");
    res.send("GET Request for HTML page processed");
});

// get: request method GET
// path: is eender maar mag niet eindigen op .html
server.get('/*', function (req, res) {
    console.log("GET Request all without .html extension received");
    res.send("GET Request all without .html extension");
})


server.post('/*', function (req, res) {
    console.log("POST Request received");
    res.send("POST Request processed");
});


// all: eender welke http-method
// path: eender wat
server.all('/*', function (req, res) {
    console.log("request received");
    res.send("Server express zegt: Hallo");
});

server.listen(8083,'127.0.0.1');
