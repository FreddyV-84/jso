'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'deschop',
	port: 3306
});

connection.connect();
var lev_code = '997';
connection.query('DELETE FROM ?? WHERE lev_code = ?', ['leveranciers', lev_code],
	function (err, result) {
		if (err) {
			console.log("Error while performing query.");
			console.log(err.message);
		} else {
			console.log("%d rows affected", result.affectedRows);
		}
		connection.end();
	});