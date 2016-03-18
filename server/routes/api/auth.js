var express = require('express'),
    usersRouter = express.Router(),
    passport = require('../../lib/passportStrategy.js'),
    User = require('../../models/user.js'),
    jwt = require('jsonwebtoken'),
    jwtConfig = require('../../config/jwt.js');

// initialize passport
usersRouter.use(passport.initialize());

// handle all routes
usersRouter.post('/', passport.authenticate('local', { session: false }), function(req, res, next) {
  var token = jwt.sign(req.user, jwtConfig.superSecret, {
    expiresInMinutes: 1440 // expires in 24 hours
  });
  res.json({ token: token });
});

module.exports = usersRouter;
