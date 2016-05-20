var User          = require('../models/user.js'),
    passport      = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    JwtStrategy   = require('passport-jwt').Strategy,
    ExtractJwt    = require('passport-jwt').ExtractJwt,
    JwtOpts       = {};


JwtOpts.jwtFromRequest = function(req) {
  var token = null;
  if (req && req.cookies) {
      token = req.cookies['jwt_token'];
  }
  return token;
};

JwtOpts.secretOrKey = process.env.JWT_SECRET;

// TODO: Not needed?
// JwtOpts.issuer = "accounts.examplesoft.com";
// JwtOpts.audience = "yoursite.net";

passport.use(new JwtStrategy(JwtOpts, function(jwt_payload, done) {
    console.log(jwt_payload);

    // #3 issue:  Passport-JWT Needs to target users based on payload
    User.findOne({username: jwt_payload._doc.username}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
            // or you could create a new account
        }
    });
}));

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
