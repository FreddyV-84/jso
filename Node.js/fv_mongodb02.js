/**  voor MongoDb 3+ */
/*
 * vooraf:  npm install mongodb
 */

'use strict';

var input = require('readline-sync');
var mongoClient = require('mongodb').MongoClient;

// zie ook  http://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/

// Connection URL
var url = 'mongodb://localhost:27017';

var cuisine = input.question('geef een keuken in: ');

// Use connect method to connect to the server
mongoClient.connect(url, function (err, client) {
    var db = client.db('test');
    console.log("Connected successfully to server");
    // Get the restaurants collection
    var collection = db.collection('restaurants');
    // Find all documents
    collection.find({"cuisine":cuisine}).toArray(function (err, docs) {
        console.log("Restaurant document(s) found:");
        var x = 0;
        docs.forEach(function (element) {
            console.log('%s. %s (%s), %s',x++, element.name, element.cuisine, element.address ? element.address.street : "");
        });
        client.close();
    });
});