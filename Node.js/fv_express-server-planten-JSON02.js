'use strict';

var mysql = require('mysql');
var express = require('express');
var app = express();

var path = require("path");
var url = require("url");


// // enable cross domain calls (CORS = cross origin resource sharing)
// app.all('/*', function (req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });


app.get(['/*.html', '/*js'], function (req, res) {
	console.log('request received');
	console.log("queryString: " + req.query);

	res.sendFile(path.join(__dirname + url.parse(req.url).pathname));
});

var server = app.listen(1338, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port);
});