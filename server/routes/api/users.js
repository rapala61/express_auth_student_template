var express = require('express'),
    usersRouter = express.Router(),
    User = require('../../models/user.js'),
    authRouteMiddleWare = require('../../lib/authorizeRoute.js');


usersRouter.use(authRouteMiddleWare.jwtAuth);

// handle all routes

usersRouter.get('/', function(req, res, next) {
  console.log(req.decoded);
  User.find(function( err, dbUsers ){
    res.json( dbUsers );
  });
});

usersRouter.post('/', function(req, res, next) {
  console.log('posting', req.body.user);
  User.create(req.body.user, function( err, dbUser ) {
    res.json( dbUser );
  });
});

module.exports = usersRouter;
