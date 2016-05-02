var express = require('express'),
    usersRouter = express.Router(),
    passport = require('../../lib/passportStrategy.js'),
    User = require('../../models/user.js'),
    jwt = require('jsonwebtoken');

// initialize passport
usersRouter.use(passport.initialize());

// Log In and if successful send back the token

// We would need to install express-flash for flash messages to work
// We would also have to add the failureFlash: true option here, exp: { session: false, failureFlash : true }
usersRouter.post('/', passport.authenticate('local', { session: false }), function(req, res, next) {
  var token = jwt.sign(req.user, process.env.JWT_SECRET, {
    expiresInMinutes: 1440 // expires in 24 hours
  });
  res.json({ token: token });
});

module.exports = usersRouter;
