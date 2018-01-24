var express = require('express');
var app = express();

var mongoClient = require('mongodb').MongoClient;

// Connection URL (database)
var url = 'mongodb://localhost:27017';

// app.all('/*', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     // res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     // res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     // res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });


// This responds a GET request for the /restaurants page.
app.get('/restaurants', processRestaurants);

var server = app.listen(8888, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);

});

function processRestaurants(res, res) {
    console.log("Got a GET request for /restaurants");
    res.header("Access-Control-Allow-Origin", "*");

    // Use connect method to connect to the server
    mongoClient.connect(url, function (err, client) {
        var db = client.db('test');
        console.log("Connected successfully to server");
        // Get the restaurants collection
        var collection = db.collection('restaurants');
        // Find all documents
        collection.find({
            "cuisine": "Pizza"
        }).project({
            "_id": 0,
            "name": 1,
            "address": 1,
            "borough": 1,
            "cuisine": 1
        }).limit(5).toArray(function (err, docs) {

            res.send(JSON.stringify(docs));
            client.close();
        });
    });
}