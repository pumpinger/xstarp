/**
 * Created by fizz on 2017/2/13.
 * @Class Marker
 */

var onOff = require('./onOff');
var formatOpts = require('./formatOpt');
/**
 * Represents a Marker
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

Marker.prototype = {
  setMap: function(map) {
    this._inner.setMap(map._inner);
  },

  getMap: function() {
    return this._inner.getMap();
  },


  on: onOff.on,
  off: onOff.off
};

module.exports = Marker;



