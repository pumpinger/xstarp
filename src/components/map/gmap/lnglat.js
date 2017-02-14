/**
 * Created by fizz on 2017/2/13.
 */

/**
 * @constructor lngLat
 * @lng {Number} lng
 * @lat {Number} lat
 * */
var LngLat = function(lng, lat) {
  if(arguments.length < 2) {

    if(Object.prototype.toString.call(lng) == '[object Array]'){
      console.log("array lnglat");
      this.lng = lng[0];
      this.lat = lng[1];
    } else {
      this.lng = lng.lng;
      this.lat = lng.lat;
    }

  } else {
    this.lng = lng;
    this.lat = lat;
  }

  this._inner = new google.maps.LatLng({lng:this.lng, lat:this.lat});
};

LngLat.prototype = {
  /**
   * @function offset
   * @w {Number}
   * @s {Number}
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



