var mongoose = require('mongoose');
var multer = require('multer');
var fs = require('node-fs');
var path = require('path'); 
var Movie = require('./models/movie.js');
var Music = require('./models/music.js');
var Picture = require('./models/picture.js');

var FILES_REPOSITORY = '/var/moviz_data/'
var FILES_PARAMS = 'files';
var FILES_NUMBER = 2;

var storage =  multer.diskStorage({
  destination: function (req, file, callback) {
    var mediaType = req.body.mediaType;
    var title = req.body.title;
    var dir = FILES_REPOSITORY+mediaType+'/'+title+'/';
    fs.mkdir(dir, 0777, true, function (err) {
      if (err) {
        console.log(err);
      } else {
        callback(null, dir);
      }
    });
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});

module.exports = function (app) {

    // get all movies
    app.get('/movies', function (req, res) {
        Movie.find(function (err, movies) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }   

        res.json(movies); // return all todos in JSON format
        }).sort({'_id': -1}).limit(6);
    });

    // get all musics
    app.get('/musics', function (req, res) {
        Music.find(function (err, musics) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(musics); // return all todos in JSON format
        }).sort({'_id': -1}).limit(6);
    });

    // get all pictures
    app.get('/pictures', function (req, res) {
        Picture.find(function (err, pictures) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(pictures); // return all todos in JSON format
        }).sort({'_id': -1}).limit(6);
    });

    // add a media
    app.post('/medias',function(req, res){
        var upload = multer({ storage : storage }).array(FILES_PARAMS,FILES_NUMBER);
        upload(req,res,function(err) {
            if(err) {
                return res.end("Error uploading file.");
            }
            res.end("File is uploaded");
            var media = null;
            console.log(req.body.mediaType);
            switch(req.body.mediaType){
                case "movie":
                    media = new Movie();
                    media.title = req.body.title;
                    media.path = req.files[0].path;
                    media.cover_path = req.files[1].path;
                    media.category = req.body.categorie;
                    break;
                case "music":
                    media = new Music();
                    media.title = req.body.title;
                    media.path = req.files[0].path;
                    media.cover_path = req.files[1].path;
                    media.category = req.body.categorie;
                    break;
                case "picture":
                    media = new Picture();
                    media.title = req.body.title;
                    media.path = req.files[0].path;
                    media.cover_path = req.files[1].path;
                    break;
                default:
                    break;
            }
            if(media){
                media.save(function(err, user_Saved){
                    if(err){
                        console.log('Error while save media');
                    }else{
                        console.log(' Media saved!');
                    }
                });
            }
        });
    });
};