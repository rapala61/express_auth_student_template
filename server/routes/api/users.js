var express             = require('express'),
    usersRouter         = express.Router(),
    passport            = require('../../lib/passportStrategy.js'),
    User                = require('../../models/user.js');


// Create a new user
usersRouter.post('/', function(req, res, next) {

  User.create(req.body.user, function( err, dbUser ) {
    if (err) { res.status(500).end() }
    res.json( dbUser );
  });
});

usersRouter.use(passport.authenticate('jwt', { session: false}));

// GET all users
usersRouter.get('/', function(req, res, next) {

  User.find(function( err, dbUsers ){
    res.json( dbUsers );
  });
});

module.exports = usersRouter;
