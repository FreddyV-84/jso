/*
 * vooraf:  npm install mysql 
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  database : 'deschop',
  port     : 3306
});

connection.connect();

connection.query('SELECT * from planten', function(err, rows, fields) {
  if (!err){
    var result = JSON.stringify(rows);
    console.log(result);
  }
  else{
    console.log('Error while performing query.');
<<<<<<< HEAD
    console.log(err);
	}
});

connection.end();
=======
  }
  connection.end();
});
>>>>>>> 39ad9fe5611d228b6cae9aba17a47aa6e33980f5
