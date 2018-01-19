'use strict';

var mysql = require('mysql');
var express = require('express');
var app = express();

// enable cross domain calls (CORS = cross origin resource sharing)
app.all('/*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/planten', function (req, res) {
	console.log('request received');
	console.log("queryString: " + req.query);

	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'deschop',
		port: 3306
	});

	connection.connect();

	var identifiers = 'planten';
	var result;

	connection.query('SELECT * FROM ??', identifiers, function (err, rows, fields) {
		if (!err) {
			result = JSON.stringify(rows);
			console.log(result);
		} else {
			result = 'Error: ' + err.message;
			console.log('Error while performing query.');
		}
		connection.end();
		res.end(result);
	});

});

var server = app.listen(1337, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port);
});