/**
 * Created by fizz on 2017/2/13.
 * @constructor Polygon
 */

// var event = require('./event');
var onOff = require('./util/onOff');
var formatOpts = require('./util/formatOpt');
var obc = require('./util/overlayBaseClass');

/**
 * @constructor
 * @param {Object} opts
 * @return an object, inner is prime google map Polygon instance.
 * */
function Polygon(opts) {
  this._type = 'Polygon';
  obc.addOverlay(opts, this);

  var newOpts = formatOpts.polygon(opts);
  this._inner = new google.maps.Polygon(newOpts);

}

Polygon.prototype.setMap = obc.setMap;

/**
 * @param {path:Array LngLat | Array lngLat} path
 * */
Polygon.prototype.setPath = function (path) {
  this._inner.setPath(path);
};
Polygon.prototype.getPath = function () {};

Polygon.prototype.setOptions = function () {
  this._inner.setOptions(formatOpts.polygon(opts));
};

Polygon.prototype.getOptions = function () {};

Polygon.prototype.getBounds = function () {};

Polygon.prototype.getArea = function () {};

Polygon.prototype.hide = obc.hide;

Polygon.prototype.show = obc.show;



/**
 * @param {any} ext extData
 * */
Polygon.prototype.setExtData = function (ext) {
  this._inner.extDate = ext;
};

Polygon.prototype.getExtData = function () {
  return this._inner.extDate;
};

/**
 * @function judge whether a point in the polygon inner
 * @param {LngLat} point
 * */
Polygon.prototype.contains = function (point) {
  //TODO 多边形没实现contains
  // return this._inner.getBounds().contains(point);
};

Polygon.prototype.on = onOff.on;
Polygon.prototype.off = onOff.off;

module.exports = Polygon;
