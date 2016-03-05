var mongoose = require('mongoose');
var User = require('./models/user.js');

module.exports = function (app) {

    // get all users
    app.get('/users', function (req, res) {
        User.find(function (err, users) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(users); // return all todos in JSON format
        });
    });

    // create user and send back all users after creation
    app.post('/users', function (req, res) {
    });
    
    // get a user
    app.get('/user/:user_id', function (req, res) {        
        res.json(test_json[0]);
    });

    // delete a user
    app.delete('/user/:user_id', function (req, res) {
    });
};