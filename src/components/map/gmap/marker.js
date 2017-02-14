/**
 * Created by fizz on 2017/2/13.
 */

var event = require('./event');
var onOff = require('./onOff');

/**
 * @constructor Marker
 * @opts {Object} opts
 * @return an object, inner is prime google map Marker instance.
 * */
var Marker = function(opts) {
  var newOpts = formatOpts(opts);
  this._inner = new google.maps.Marker(newOpts);
  return this;
};

Marker.prototype = {
  on: onOff.on,
  off: onOff.off
};

function formatOpts(opts) {
  // opts.position = new GMap.LngLat(opts.position);
  opts.position = {lat: opts.position[1], lng: opts.position[0]};
  return opts;
}

module.exports = Marker;



