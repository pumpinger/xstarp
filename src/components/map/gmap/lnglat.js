/**
 * Created by fizz on 2017/2/13.
 */

var util = require('../util')

/**
 * @constructor
 * @lng {Number} lng
 * @lat {Number} lat
 * */
function LngLat(lng, lat, inner) {

  // 包装GMap的LngLat结构
  if(inner) {
    this._inner = inner;
  }

  // 构造函数模式
  else {
    if(arguments.length < 2) {

      // 数组形式，前者为lng，后者为lat [116.397428, 39.90923] -- position
      if(util.isArray(lng)){

        if( typeof lng[0] === 'string' || typeof lng[1] === 'string' ) {
          this.lng = parseFloat(lng[0]);
          this.lat = parseFloat(lng[1]);
        }

        else {
          this.lng = lng[0];
          this.lat = lng[1];
        }
      }

      // 对象形式，lng对应lng，lat对应lat (lng: 116.397428, lat: 39.90923)
      else {
        this.lng = lng.lng;
        this.lat = lng.lat;
      }
    }

    else {

      // ("116.403322", "39.920255") string
      if(util.isString(lng) || util.isString(lat)) {
        this.lng = parseFloat(lng);
        this.lat = parseFloat(lat);
      }

      // (116.403322, 39.920255) Number
      else {
        this.lng = lng;
        this.lat = lat;
      }
    }

    this._inner = new google.maps.LatLng({lng:this.lng, lat:this.lat});
  }

  this._type = 'LngLat';

  return this;
}

LngLat.prototype = {
  /**
   * @function offset
   * @param {Number} w
   * @param {Number} s
   * */
  offset: function(w, s) {

  },

  distance: function() {

  },

  getLng: function() {
    return this.lng;
  },

  getLat: function() {
    return this.lat;
  },

  equals: function(lngLat) {

  },

  toString: function() {
    return this._inner.toString();
  }
};

module.exports = LngLat;



