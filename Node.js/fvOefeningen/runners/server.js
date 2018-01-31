var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

var mongoClient = require('mongodb').MongoClient;

// Connection URL (database)
const mongoDbURL = 'mongodb://localhost:27017';

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});


// This responds a GET request for the /restaurants page.
app.get(['/runners/:gender', '/runners/'], processRunners);

app.post('/runners/add', addRunner);

var server = app.listen(8888, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});

function addRunner(req, res) {
    console.log("Got a POST request for " + req.path);

    // Prepare output in JSON format
    var newRunner = {
        lastName: req.body.txtLastName,
        firstName: req.body.txtFirstName,
        gender: req.body.selGender,
        time: {
            hours: parseInt(req.body.nbrHours),
            minutes: parseInt(req.body.nbrMinutes),
            seconds: parseInt(req.body.nbrSeconds)
        }
    };
    console.log(newRunner);

    // Use connect method to connect to the server
    mongoClient.connect(mongoDbURL, function (err, client) {
        // use database 'competitions'
        var db = client.db('competitions');
        console.log("Connected successfully to server");
        // Get the runners collection
        var collection = db.collection('runners');

        collection.insertOne(newRunner, function (err, result) {
            if (err) throw err;
            console.log("insertedCount: " + result.insertedCount + ", result.n: " + result.result.n + " document inserted");
            client.close();
            // --> req redirect to /runners/ page
        });

    });
}

function processRunners(req, res) {
    console.log("Got a GET request for " + req.path);
    //res.header("Access-Control-Allow-Origin", "*");

    // Use connect method to connect to the server
    mongoClient.connect(mongoDbURL, function (err, client) {
        // use database 'competitions'
        var db = client.db('competitions');
        console.log("Connected successfully to server");
        // Get the runners collection
        var collection = db.collection('runners');
        var gender = req.params.gender;
        var sortOrder = req.query.sortOrder;

        if (sortOrder === undefined) {
            sortOrder = 1;
        } else {
            sortOrder = parseInt(sortOrder);
        }


        if (gender !== undefined) {
            // Find all documents with gender filter
            collection.find({
                "gender": gender,
            }).project({
                "_id": 0,
                "lastName": 1,
                "firstName": 1,
                "time": 1
            }).sort({
                "time.hours": sortOrder,
                "time.minutes": sortOrder,
                "time.seconds": sortOrder
            }).toArray(function (err, docs) {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(docs));
                client.close();
            });
        } else {
            // Find all documents
            collection.find({}).project({
                "_id": 0,
                "lastName": 1,
                "firstName": 1,
                "gender": 1,
                "time": 1
            }).sort({
                "time.hours": sortOrder,
                "time.minutes": sortOrder,
                "time.seconds": sortOrder
            }).toArray(function (err, docs) {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(docs));
                client.close();
            });
        }
    });
}