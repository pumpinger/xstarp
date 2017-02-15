/**
 * Created by fizz on 2017/2/13.
 */

/**
 * @constructor
 * @lng {Number} lng
 * @lat {Number} lat
 * */
function LngLat(lng, lat) {
  if(arguments.length < 2) {

    // 数组形式，前者为lng，后者为lat [116.397428, 39.90923] -- position
    if(Object.prototype.toString.call(lng) == '[object Array]'){

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
    if(typeof lng === 'string' || typeof lat === 'string') {
      console.log("String");
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
  },

  wrap: function(lngLat) {
    var tempMarker = {};
    tempMarker._inner = lngLat;
    tempMarker.prototype = Marker.prototype;
    return tempMarker;
  },
};


module.exports = LngLat;



