var mongoose = require('mongoose');

var MusicSchema = new mongoose.Schema({
	title : { type : String, validate: /\S+/},
	path : { type : String},
	cover_path : { type : String},
	format : { type : String},
	rate : {type: Number, default: 0, enums:[0,1,2,3,4,5]},
	category : { type : String, validate: /\S+/}
});
module.exports = mongoose.model('MusciAlbum', MusicSchema,'musicalbum');