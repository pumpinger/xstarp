/**
 * Created by fizz on 2017/2/13.
 * @Class Marker
 */
var obc = require('./overlayBaseClass');
var onOff = require('./onOff');
var formatOpts = require('./formatOpt');

/**
 * Represents a Marker
 * @constructor
 * @param {Object} opts
 * @param {Object} inner
 * @return an object, inner is prime google map Marker instance.
 * */
function Marker(opts, inner) {

  this._type = 'Marker';

  if(inner) {
    this._inner = inner;
  } else {
    // 在opts转换之前就要判断添加overlay
    obc.addOverlay(opts, this);
    var newOpts = formatOpts.marker(opts);
    this._inner = new google.maps.Marker(newOpts);
    if(opts.map) {
      this._inner._smap = opts.map;
    }
    this.position = this._inner.position
  }
}

Marker.prototype = {
  setMap: obc.setMap,
  getMap: obc.getMap,
  getPosition : function () {
    return this.position;
  },
  hide: obc.hide,
  show: obc.show,
  on: onOff.on,
  off: onOff.off
};

module.exports = Marker;



