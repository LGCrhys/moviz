var mongoose = require('mongoose');

var MediaSchema = new mongoose.Schema({
	title : { type : String, validate: /\S+/},
	media_type : {type: String , enums:["Music","Movie","Picture"]},
	path : { type : String, validate: /([a-zA-Z]:)?(\\\\[a-zA-Z0-9_.-]+)+\\\\?/},
	rate : {type: Number, default: 0, enums:[0,1,2,3,4,5]},
	category : { type : String, validate: /\S+/}
});
module.exports = mongoose.model('Media', MediaSchema);