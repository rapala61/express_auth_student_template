// Require express
var express = require('express');

// Instantiate Express
var app = express();

// Serve static files
app.use(express.static('client/public'));

// Main route
app.get('/', function(req, res, next) {
  res.sendFile( __dirname + '/client/public/views/index.html' );
});

// Listen on port for connections
var port = process.env.PORT || 3000;
app.listen( port, function() {
  console.log("free tacos at 3000");
});
