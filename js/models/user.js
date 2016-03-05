var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	 username : { type : String, validate: /\S+/, index : { unique : true } },
	email : {type : String, validate : /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, index : { unique : true }}
});
module.exports = mongoose.model('Users', UserSchema);