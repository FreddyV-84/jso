/*
 * vooraf:  npm install mysql 
 */
var input = require('readline-sync');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'deschop',
  port: 3306
});

connection.connect();

var kleur = input.question('Geef een kleur in: ');


connection.query("SELECT * FROM planten WHERE kleur='" + kleur + "'", function (err, rows, fields) {
  if (!err) {
    var result = JSON.stringify(rows);
    console.log(result);
  } else {
    console.log('Error while performing query.');
    console.log(err.message);
  }
});

setTimeout(function () {
  connection.end();
}, 1000);