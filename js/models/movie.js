var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
	title : { type : String, validate: /\S+/},
	path : { type : String, validate: /([a-zA-Z]:)?(\\\\[a-zA-Z0-9_.-]+)+\\\\?/},
	cover_path : { type : String, validate: /([a-zA-Z]:)?(\\\\[a-zA-Z0-9_.-]+)+\\\\?/},
	rate : {type: Number, default: 0, enums:[0,1,2,3,4,5]},
	category : { type : String, validate: /\S+/}
});
module.exports = mongoose.model('Movie', MovieSchema,'movie');