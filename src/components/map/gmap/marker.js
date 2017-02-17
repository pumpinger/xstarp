/**
 * Created by fizz on 2017/2/13.
 * @Class Marker
 */
var obc = require('./overlayBaseClass');
var onOff = require('./onOff');
var formatOpts = require('./formatOpt');
var Map = require('./map');

/**
 * Represents a Marker
 * @constructor
 * @param {Object} opts
 * @param {Object} inner
 * @return an object, inner is prime google map Marker instance.
 * */
function Marker(opts, inner) {

  if(inner) {
    this._inner = inner;
  } else {
    var newOpts = formatOpts.marker(opts);
    this._inner = new google.maps.Marker(newOpts);
  }



  this._type = 'Marker';
}

Marker.prototype = {
  setMap: obc.setMap,
  getMap: obc.getMap,
  hide: obc.hide,
  show: obc.show,
  on: onOff.on,
  off: onOff.off
};

module.exports = Marker;



