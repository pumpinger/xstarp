/**
 * Created by fizz on 2017/2/15.
 * @name Bounds 基础类
 * 在Google Map里面对应LatLngBounds Class
 * https://developers.google.com/maps/documentation/javascript/3.exp/reference#LatLngBounds
 */

var LngLat = require('./LngLat');

/**
 * @constructor
 * @sw {LngLat} southWest
 * @ne {LngLat} northEast
 * */
function Bounds(sw, ne, inner) {

  if(inner) {
    this._inner = inner;
  } else {
    this._inner = new BMap.Bounds(sw, ne);
  }

  this._type = 'Bounds';

  return this;
}

Bounds.prototype = {
  /**
   * @param {LngLat} point
   * */
  contains: function(point) {
    return this._inner.contains(point._inner);
  },

  getCenter: function() {
    return new LngLat('', '', this._inner.getCenter());
  },

  getSouthWest: function() {
    return new LngLat('', '', this._inner.getSouthWest());
  },
  getNorthEast: function() {
    return new LngLat('', '', this._inner.getNorthEast());
  },
  toString: function() {
    console.log("toString");
    return this._inner.toString();
  }
};

module.exports = Bounds;
