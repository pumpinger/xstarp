/**
 * Created by fizz on 2017/2/13.
 * @constructor Polyline
 */

// var event = require('./event');
var onOff = require('./onOff');
var formatOpts = require('./formatOpt');

/**
 * @constructor
 * @opts {Object} options
 * @return an object, inner is prime google map Polyline instance.
 * */
function Polyline(opts) {
  var newOpts = formatOpts.polyline(opts);
  this._inner = new google.maps.Polyline(newOpts);
  this._type = 'Polyline';
  return this;
};

Polyline.prototype = {
  setPath: function() {},
  getPath: function() {},
  setOptions: function() {},
  getOptions: function() {},
  getLength: function() {},
  getBounds: function() {},
  hide: function() {},
  show: function() {},

  setMap: function(map) {
    this._inner.setMap(map._inner);
  },

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



