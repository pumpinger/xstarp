/**
 * Created by fizz on 2017/2/13.
 * @constructor Polygon
 */

// var event = require('./event');
var onOff = require('./onOff');
var formatOpts = require('./formatOpt');

/**
 * @constructor
 * @param {Object} opts
 * @return an object, inner is prime google map Polygon instance.
 * */
function Polygon(opts) {
  var newOpts = formatOpts.polygon(opts);
  this._inner = new google.maps.Polygon(newOpts);
  return this;
};

Polygon.prototype = {

  /**
   * @param {path:Array LngLat | Array lngLat} path
   * */
  setPath: function(path) {
    this._inner.setPath( path );
  },
  getPath: function() {},

  setOptions: function() {
    this._inner.setOptions( formatOpts.polygon(opts) );
  },

  getOptions: function() {},

  getBounds: function() {},

  getArea: function() {},

  hide: function() {
    this._inner.setVisible(false);
  },
  show: function() {
    this._inner.setVisible(true);
  },
  setMap: function(map) {
    this._inner.setMap(map._inner);
  },

  /**
   * @param {any} ext extData
   * */
  setExtData: function(ext) {
    this._inner.extDate = ext;
  },

  getExtData: function() {
    return this._inner.extDate;
  },

  /**
   * @function judge whether a point in the polygon inner
   * @param {LngLat} point
   * */
  contains: function(point) {

  },

  on: onOff.on,
  off: onOff.off
};

var PolygonEventMap = {

};

module.exports = Polygon;



