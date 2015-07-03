var Device = require('zetta-device');
var util = require('util');

var Basestation = module.exports = function(options) {
  Device.call(this);
  this._default = options['default'];
};
util.inherits(Basestation, Device);

Basestation.prototype.init = function(config) {
  config
  .name('Basestation')
  .type('basestation')
  .state('waiting')
  .when('waiting', { allow: ['do']})
  .when('doing', { allow: [] })
  .map('do', this.do, [
    { name: 'message', type: 'text'}
  ]);
};

Basestation.prototype.do = function(message, cb) {
  this.state = 'doing';
  this.log(this._default + ': ' + message);
  this.state = 'waiting';
  cb();
};
