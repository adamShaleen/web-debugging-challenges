var User = require('../models/User');

module.exports = {

  create: function(req, res, next) {
    var newUserDocument = new User(req.body);
    newUserDocument.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  read: function(req, res, next) {
    User.find(req.query)
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  update: function(req, res, next) {
    User.findByIdAndUpdate(
      req.params.id,
      req.body,
      function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
      }
    );
  },

  delete: function(req, res, next) {
    User.findByIdAndRemove(
      req.params.id,
      function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
      }
    );
  }

};
