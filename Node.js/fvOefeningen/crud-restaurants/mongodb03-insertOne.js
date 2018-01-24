'use strict';

var MongoClient = require('mongodb').MongoClient;

// connection URL (mongodb)
const mongoDbURL = 'mongodb://localhost:27017';

// connect with MongoClient
MongoClient.connect(mongoDbURL, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var myDocument = {
        "name" : "Viking Paradise 2",
        "cuisine": "Scandinavian",
        "borough" : "Mechelen",
        "address" : {
            "building" : "132",
            "coord" : [ 
                -43.163264, 
                13.646742
            ],
            "street" : "Sint-Katelijnestraat 142",
            "zipcode" : "2800"
        }
    };

    dbo.collection("restaurants").insertOne(myDocument, function (err, res) {
        if (err) throw err;
        console.log("insertedCount: " + res.insertedCount + ", result.n: " + res.result.n + " document inserted");
        db.close();
    });
});
