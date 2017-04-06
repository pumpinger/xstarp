/**
 * gmap util
 * 
 */
var util = {};
util.converter = function(arg) {
  if (options.Pixel) {
    options.Pixel = options.Pixel._inner;
  }
}
util.extend = function(obj1, obj2) {
  for (var property in obj2) {
    obj1[property] = obj2[property];
  }
  return obj1;
};
module.exports = util;