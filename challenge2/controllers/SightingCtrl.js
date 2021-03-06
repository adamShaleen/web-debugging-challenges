var Sighting = require('../models/Sighting');


module.exports = {
  create: function (req, res, next) {
    var newSighting = new Sighting(req.body);
    newSighting.save(function (err, result) {
      if (!err) {
        res.send(result);
      }
      res.status(500).send(err);
    });
  },

  read: function (req, res, next) {
    console.log('req.query: ', req.query);
    Sighting.find(req.query)
      .populate('user', 'username')
      .exec(function (err, result) {
        if (!err) {
          res.send(result);
        }
        res.status(500).send(err);
      });
  },

  update: function (req, res, next) {
    Sighting.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (!err) {
        res.send(result);
      }
      res.status(500).send(err);
    });
  },

  delete: function (req, res, next) {
    Sighting.findByIdAndRemove(req.params.id, function (err, result) {
      if (!err) {
        res.send(result);
      }
      res.status(500).send(err);
    });
  }
};
