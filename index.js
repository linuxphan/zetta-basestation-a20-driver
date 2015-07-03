var Scout = require('zetta-scout');
var util = require('util');
var Basestation = require('./basestation');

var BasestationScout = module.exports = function() {
  Scout.call(this);
};
util.inherits(BasestationScout, Scout);

BasestationScout.prototype.init = function(next) {

  var self = this;

  var query = this.server.where({type: 'basestation'});
  var options = {default: 'DEFAULT'};

  this.server.find(query, function(err, results) {
    if (results[0]) {
      self.provision(results[0], Basestation, options);
    } else {
      self.discover(Basestation, options);
    }
  });

  next();

};
