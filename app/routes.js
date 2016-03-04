var path = require('path');
var mongoose = require('mongoose');
var db = require('./models/Moviz.js');

module.exports = function (app) {

    // get all pictures
    app.get('/pictures', function (req, res) {
        res.json({});
    });

    // create picture and send back all pictures after creation
    app.post('/pictures', function (req, res) {
    });
    
    // get a picture
    app.get('/picture/:picture_id', function (req, res) {        
        res.json(test_json[0]);
    });

    // delete a picture
    app.delete('/picture/:picture_id', function (req, res) {
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(path.resolve('public/index.html')); // load the single view file (angular will handle the page changes on the front-end)
    });
};