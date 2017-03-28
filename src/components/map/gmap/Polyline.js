/**
 * Created by fizz on 2017/2/13.
 * @constructor Polyline
 */

var obc = require('./util/overlayBaseClass');
var onOff = require('./util/onOff');
var formatOpts = require('./util/formatOpt');

/**
 * @constructor
 * @opts {Object} options
 * @return an object, inner is prime google map Polyline instance.
 * */
function Polyline(opts) {
  this._type = 'Polyline';
  obc.addOverlay(opts, this);

  var newOpts = formatOpts.polyline(opts);
  this._inner = new google.maps.Polyline(newOpts);
  // this._inner._self = this;
}

Polyline.prototype = {
  setPath: function() {},
  getPath: function() {},
  setOptions: function() {},
  getOptions: function() {},
  getLength: function() {},

  getBounds: function() {},

  hide: obc.hide,
  show: obc.show,
  setMap: obc.setMap,

  /**
   * @ext {any} extData
   * */
  setExtData: function(ext) {
    this._inner.extDate = ext;
  },

  getExtData: function() {
    return this._inner.extDate;
  },

  on: onOff.on,
  off: onOff.off
};

var PolylineEventMap = {

};

module.exports = Polyline;



