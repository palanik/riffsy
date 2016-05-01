'use strict';

var util = require('util');
var wrapi = require('wrapi');

var endpoints = require('./api/riffsy.json');

function riffsyWrapi(apiVersion, api_key) {

  if (!api_key) {
    api_key = apiVersion;
    apiVersion = 'v1';
  }
  var opts = {
    qs: {
    },
    headers: {
      'User-Agent': 'riffsy-wrapi'
    },
    json: true
  };

  if (api_key) {
    opts.qs.key = api_key;
  }

  riffsyWrapi.super_.call(this,
            'http://api.riffsy.com/' + apiVersion + '/',
            endpoints,
            opts);  
};

util.inherits(riffsyWrapi, wrapi);
module.exports = riffsyWrapi;
