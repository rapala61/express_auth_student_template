var User = require('../models/user.js'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

passport.use( new LocalStrategy(
  function( username, password, done ) {
    User.findOne({ username: username }, function( err, dbUser ) {
      if (err) { return done(err); }
      if (!dbUser) {
        // If we want to send back flash messages with a description of the error
        // We would need to install express-flash for this to work

        // return done(null, false, { message: 'Incorrect username.' });
        return done(null, false);
      }

      if (!dbUser.authenticate(password)) {
        // return done(null, false, { message: 'Incorrect password.' });
        return done(null, false);
      }

      return done(null, dbUser);
    });
  })
);

module.exports = passport;
