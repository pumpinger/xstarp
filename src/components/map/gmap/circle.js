/**
 * Created by fizz on 2017/2/13.
 * @constructor Circle
 */

// var event = require('./event');
var onOff = require('./onOff');
var formatOpts = require('./formatOpt');
var obc = require('./overlayBaseClass');
var LngLat = require('./LngLat');

/**
 * @constructor
 * @opts {Object} opts
 * @return an object, inner is prime google map Circle instance.
 * */
function Circle(opts) {
  this._type = 'Circle';
  obc.addOverlay(opts, this);

  var newOpts = formatOpts.circle(opts);
  this._inner = new google.maps.Circle(newOpts);
}

Circle.prototype = {

  setMap: obc.setMap,

  setCenter: function(center) {
    this._inner.setCenter(center);
  },

  getCenter: function() {
    return new LngLat(' ',' ',this._inner.getCenter());
  },

  getBounds: function() {

  },

  /**
   * @param {Number} radius
   * */
  setRadius: function(radius) {
    this._inner.setRadius(radius);
  },

  getRadius: function() {
    return this._inner.getRadius();
  },

  setOptions: function() {
    this._inner.setOptions( formatOpts.polygon(opts) );
  },

  getOptions: function() {},

  getArea: function() {},

  hide: obc.hide,

  show: obc.show,

  /**
   * @ext {any} extData
   * */
  setExtData: function(ext) {
    this._inner.extDate = ext;
  },

  getExtData: function() {
    return this._inner.extDate;
  },

  /**
   * @function judge whether a point in the polygon inner
   * @point {LngLat}
   * @return {Boolean} true or false
   * */
  contains: function(point) {

  },

  on: onOff.on,
  off: onOff.off
};

var CircleEventMap = {

};

module.exports = Circle;



