/**
 * Created by fizz on 2017/2/9.
 */

var util = {};

/**
 * @function 融合两个对象
 * @obj {object} oldObj
 * @new_obj {object} newObj
 * */
util.extend = function (obj, new_obj) {
  var name;

  if (obj === new_obj) {
    return obj;
  }

  for (name in new_obj) {
    if (new_obj[name] !== undefined) {
      obj[name] = new_obj[name];
    }
  }

  return obj;
};

/**
 * @function convert lngLat to latLng
 * */
util.formatLngLat = function (lngLat) {
  if(typeof lngLat !== 'object') {
    console.log("lngLat format not right,check it.");
  }


};

module.exports = util;
