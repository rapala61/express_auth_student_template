var jwt = require('jsonwebtoken'),
    jwtConfig = require('../config/jwt.js');

  function tokenAuthMiddleware(req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {

        // verifies that the token is valid by comparing the signature
        // with the secret and expiration
        jwt.verify(token, jwtConfig.superSecret, function(err, decoded) {
          if (err) {
            return res.status(401).send({
              message: 'Failed to authenticate token'
            });
          } else {
            // if everything is good, save the decoded token in the req object
            // to be used in the next route
            req.decoded = decoded;
            next();
          }
        });
    } else {

      // if there is no token
      // return an error
      return res.status(403).send({
          message: 'No token provided'
      });
    }
  }

module.exports = tokenAuthMiddleware;
