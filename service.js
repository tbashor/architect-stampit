module.exports = function(options, imports, register) {
  'use strict';
  var log = imports.debug('stonecraft:stampit');
  log('start');

  var stampit = require('stampit');

  var api = {
    'stampit': stampit
  };

  log('register');
  register(null, api);

};
