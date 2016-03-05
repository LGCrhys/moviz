// set up ======================================================================
var express = require('express');
var app = express(); 		// create our app w/ express
var path = require('path');				
var mongoose = require('mongoose'); 				// mongoose for mongodb
var port = process.env.PORT || 8080; 				// set the port
var database = require('./config/database'); 			// load the database config
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var db_server  = process.env.DB_ENV || 'primary';

// configuration ===============================================================
mongoose.connect(database.localUrl, function(err) {
  if (err) { throw err; }
}); 	// Connect to local MongoDB instance. A remoteUrl is also available (modulus.io)

app.use(express.static(__dirname)); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

// routes ======================================================================
require('./js/media_routes.js')(app);
require('./js/user_routes.js')(app);

// application -------------------------------------------------------------
app.get('*', function (req, res) {
    res.sendFile(path.resolve('index.html')); // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);


var gracefulExit = function() { 
  mongoose.connection.close(function () {
    console.log('Mongoose default connection with DB :' + db_server + ' is disconnected through app termination');
    process.exit(0);
  });
}

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);