/*  mongodb driver V3+ */ 

/*
 * vooraf:  npm install mongodb
 */

// zie ook http://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/

'use strict';

var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

mongoClient.connect(url, function (err, client) {
  console.log("Connected successfully to server");
  var db = client.db('test');
  var collection = db.collection('restaurants');
  // insert document
  collection.insertOne({ name: "Het lekkerbekje", cuisine: "Belgian", restaurant_id: "1234567" }, function (err, r) {
    console.log("%s restaurants are inserted", r.insertedCount);
    client.close();
  });
});