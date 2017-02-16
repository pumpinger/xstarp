/**
 * Created by fizz on 2017/2/15.
 * @name Bounds 基础类
 * 在Google Map里面对应LatLngBounds Class
 * https://developers.google.com/maps/documentation/javascript/3.exp/reference#LatLngBounds
 */

/**
 * @constructor
 * @sw {LngLat} southWest
 * @ne {LngLat} northEast
 * */
function Bounds(sw, ne, _inner) {

  if(_inner) {
    this._inner = _inner;
  } else {
    this._inner = new google.maps.LatLngBounds(sw, ne);
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
    return LngLat.wrap(this._inner.getCenter());
  },

  getSouthWest: function() {
    return this._inner.getSouthWest();
  },
  getNorthEast: function() {
    return this._inner.getNorthEast();
  },
  toString: function() {
    console.log("toString");
    return this._inner.toString();
  }
};

module.exports = Bounds;
