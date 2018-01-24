'use strict';

var MongoClient = require('mongodb').MongoClient;

// connection URL (mongodb)
const mongoDbURL = 'mongodb://localhost:27017';

// connect with MongoClient
MongoClient.connect(mongoDbURL, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var myquery = {
        "cuisine": "Peruvian"
    };

    dbo.collection("restaurants").deleteMany(myquery, function (err, obj) {
        if (err) throw err;
        console.log("deletedCount: " + obj.deletedCount + ", result.n: " + obj.result.n + " document(s) deleted");
        db.close();
    });
});