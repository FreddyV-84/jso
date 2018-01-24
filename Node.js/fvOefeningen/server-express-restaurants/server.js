var express = require('express');
var app = express();

var mongoClient = require('mongodb').MongoClient;

// Connection URL (database)
const mongoDbURL = 'mongodb://localhost:27017';

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});


// This responds a GET request for the /restaurants page.
app.get('/restaurants', processRestaurants);

app.get('/restaurants/keukens', processCuisines);
app.get('/restaurants/keukensJSONP', processCuisinesJSONP);

app.get('/restaurants/keukens/:cuisine', processCuisine);

var server = app.listen(8888, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});

function processRestaurants(req, res) {
    console.log("Got a GET request for /restaurants");
    //res.header("Access-Control-Allow-Origin", "*");

    // Use connect method to connect to the server
    mongoClient.connect(mongoDbURL, function (err, client) {
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
        }).limit(10).toArray(function (err, docs) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(docs));
            client.close();
        });
    });
}

function processCuisines(req, res) {
    console.log("Got a GET request for /restaurants/keukens");

    mongoClient.connect(mongoDbURL, function (err, client) {
        var db = client.db('test');

        const collection = db.collection('restaurants');
        collection.distinct('cuisine', function (err, result) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(result));
            client.close();
        });
    });
}

function processCuisinesJSONP(req, res) {
    console.log("Got a GET request for /restaurants/keukensJSONP");

    mongoClient.connect(mongoDbURL, function (err, client) {
        var db = client.db('test');

        const collection = db.collection('restaurants');
        collection.distinct('cuisine', function (err, result) {
            res.setHeader('Content-Type', 'application/json');
            res.jsonp(result);
            client.close();
        });
    });
}

function processCuisine(req, res) {
    console.log("Got a GET request for /restaurants/keukens/" + req.params.cuisine);

    mongoClient.connect(mongoDbURL, function (err, client) {
        var db = client.db('test');

        const collection = db.collection('restaurants');

        collection.find({
            "cuisine": req.params.cuisine
        }).project({
            "_id": 0,
            "name": 1,
            "address": 1,
            "borough": 1,
            "cuisine": 1
        }).limit(10).toArray(function (err, docs) {
            //res.send(JSON.stringify(docs));
            res.setHeader('Content-Type', 'application/json');
            res.jsonp(docs);
            client.close();
        });
    });
}