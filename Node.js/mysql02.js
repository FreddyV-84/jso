/*
 * vooraf:  npm install mysql 
 */

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'deschop',
  port: 3306
});

connection.connect();
var identifiers = ['plantennaam', 'kleur','planten'];
connection.query('SELECT ??, ?? from ??', identifiers, function (err, rows, fields) {
  if (!err) {
    var result = JSON.stringify(rows);
    console.log(result);
  }
  else {
    console.log('Error while performing query.');
  }
  connection.end();
<<<<<<< HEAD
});
=======
});
>>>>>>> 39ad9fe5611d228b6cae9aba17a47aa6e33980f5
