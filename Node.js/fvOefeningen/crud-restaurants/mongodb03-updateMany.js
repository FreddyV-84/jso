'use strict';

var MongoClient = require('mongodb').MongoClient;

// connection URL (mongodb)
const mongoDbURL = 'mongodb://localhost:27017';

// connect with MongoClient
MongoClient.connect(mongoDbURL, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var myquery = {
        "borough": "Missing"
    };
    var newvalues = {
        $set: {
            "borough": "Unknown"
        }
    };
    dbo.collection("restaurants").updateMany(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("result.nModified: " + res.result.nModified + ", modifiedCount: " +  res.modifiedCount + " document(s) updated");
        db.close();
    });
});