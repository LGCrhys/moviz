var mongoose = require('mongoose');
var Media = require('./models/media.js');

module.exports = function (app) {

    // get all medias
    app.get('/medias', function (req, res) {
        Media.find(function (err, medias) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(medias); // return all todos in JSON format
        }).limit(6);
    });

    // create media and send back all medias after creation
    app.post('/medias', function (req, res) {
    });
    
    // get a media
    app.get('/media/:media', function (req, res) {        
        res.json(test_json[0]);
    });

    // delete a media
    app.delete('/media/:media_id', function (req, res) {
    });
};