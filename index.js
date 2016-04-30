var express         = require('express'),
    morgan          = require('morgan'),
    mongoose        = require('mongoose'),
    bodyParser      = require('body-parser'),
    app             = express(),
    indexRouter     = require('./server/routes/index.js'),
    apiAuthRouter   = require('./server/routes/api/auth.js'),
    apiUsersRouter  = require('./server/routes/api/users.js');

// connect to db
mongoose.connect( process.env.MONGOLAB_URI || "mongodb://localhost/passport101" );

// log requests to STDOUT
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// flash messages, NEEDS express-flash
// app.use(flash())

// Set static file root folder
app.use(express.static('client/public'));

app.use('/', indexRouter);
app.use('/api/auth', apiAuthRouter);
app.use('/api/users', apiUsersRouter);

// Listen on port for connections
var port = process.env.PORT || 3000;
app.listen( port, function() {
  console.log("free tacos at 3000");
});
