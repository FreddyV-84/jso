'use strict';

var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/*', function (req, res) {
    // Prepare output in JSON format
    var responseObject = {
        txtName: req.body.txtName,
        rdoGender: req.body.rdoGender,
        selDestination: req.body.selDestination,
        chkIsMember: req.body.chkIsMember
    };

    var genderGreeting = 'meneer';
    var memberMessage = 'Maak jezelf lid om van extra voordelen te profiteren';

    if (responseObject.rdoGender === 'female') {
        genderGreeting = 'mevrouw';
    }

    if (responseObject.chkIsMember) {
        memberMessage = 'Als lid geniet u uiteraard van onze uitzonderlijke voordelen.';
    }
    console.log(responseObject);
    res.write("<html><head><title>Registratie gelukt</title></head><body><h2>Registratie gelukt</h2><p>Dag " + genderGreeting + " " + responseObject.txtName + ". Uw inschrijving voor een reis naar " + responseObject.selDestination + " is geregistreerd. " + memberMessage + "</p></body></html>")
    res.end();
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Vakantiebestemming app listening at http://%s:%s", host, port);
});