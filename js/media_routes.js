var mongoose = require('mongoose');
var Movie = require('./models/movie.js');
var Music = require('./models/music.js');
var Picture = require('./models/picture.js');

module.exports = function (app) {

    // get all movies
    app.get('/movies', function (req, res) {
        Movie.find(function (err, movies) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(movies); // return all todos in JSON format
        }).limit(6);
    });

    // get all musics
    app.get('/musics', function (req, res) {
        Music.find(function (err, musics) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(musics); // return all todos in JSON format
        }).limit(6);
    });

    // get all pictures
    app.get('/pictures', function (req, res) {
        Picture.find(function (err, pictures) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(pictures); // return all todos in JSON format
        }).limit(6);
    });
    /*
    // create media and send back all medias after creation
    app.post('/medias', function (req, res) {
    });
    
    // get a media
    app.get('/media/:media', function (req, res) { 
    });

    // delete a media
    app.delete('/media/:media_id', function (req, res) {
    });*/
};