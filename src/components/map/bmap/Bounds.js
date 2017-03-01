/**
 * Created by fizz on 2017/2/15.
 * @name Bounds 基础类
 * 在Google Map里面对应LatLngBounds Class
 * https://developers.google.com/maps/documentation/javascript/3.exp/reference#LatLngBounds
 */

var LngLat = require('./LngLat');
var util = require('../../../common/js/util');

/**
 * @constructor
 * @sw {LngLat} southWest
 * @ne {LngLat} northEast
 * */
function Bounds(sw, ne, inner) {

  console.log('BMap.Bounds------>', sw, ne);

  if(util.isArray(sw)) {
    sw = new LngLat(sw);
    ne = new LngLat(ne);
  }

  if(inner) {
    this._inner = inner;
  } else {
    if(sw._type){
      this._inner = new BMap.Bounds(sw._inner, ne._inner);
    }
    else {
      this._inner = new BMap.Bounds(sw, ne);
    }
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
