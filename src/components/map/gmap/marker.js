/**
 * Created by fizz on 2017/2/13.
 */

var onOff = require('./onOff');
var formatOpts = require('./formatOpt');
/**
 * @constructor
 * @param {Object} opts
 * @return an object, inner is prime google map Marker instance.
 * */
function Marker(opts) {
  var newOpts = formatOpts.marker(opts);
  this._inner = new google.maps.Marker(newOpts);

  this._type = 'Marker';
  return this;
}

var MarkerPrototype = {
  wrap: function(marker) {
    var tempMarker = {};
    tempMarker._inner = marker;
    tempMarker.prototype = MarkerPrototype;
    return tempMarker;
  },
  on: onOff.on,
  off: onOff.off
};

Marker.prototype = {
  wrap: function(marker) {
    var tempMarker = {};
    tempMarker._inner = marker;
    tempMarker.prototype = Marker.prototype;
    return tempMarker;
  },
  on: onOff.on,
  off: onOff.off
};

module.exports = Marker;



