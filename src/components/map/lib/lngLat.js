/**
 * Created by fizz on 2017/2/10.
 */

/**
 * @function create & return a latLng obj
 * @lng {Number} lng
 * @lat {Number} lat
 * */

  apm.LatLng = function (lng, lat) {
  var obj = {};
  obj.lng = lng;
  obj.lat = lat;
  return obj;
};
  gpm.LatLng = function (lng, lat) {
  var obj = {};
  obj.lng = lng;
  obj.lat = lat;
  return obj;
};







module.exports = LatLng;
