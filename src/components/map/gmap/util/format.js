/**
 * gmap util format
 */
var util = require('./util.js');
/**
 * @util
 * @options {Object} options
 * */
var format ={};
format.format = function (opts) {
    var formated = util.extend({},opts);
    if (opts.Pixel) {
        formated.Pixel = format.pixel(opts.Pixel);
    }
    if (opts.Size) {
        formated.Size = format.size(opts.Size);
    }
    if (opts.LngLat) {
        formated.LngLat = opts.LngLat._inner;
    }
    if (opts.Bounds) {
        formated.Bounds = opts.Bounds._inner;
    }
    if (options.map) {
        formated.map = options.map._inner;
    }
    if (options.position) {
        formated.position = options.position._inner;
    }
    return formated;
}
format.pixel = function (Pixel) {
    return Pixel._inner;
}
format.size = function (Size) {
    return Size._inner;
}
format.lnglat = function (LngLat) {
    return LngLat._inner;
}
format.bounds = function (Bounds) {
    return Bounds._inner;
}
format.position = function (position) {
    return Map._inner;
}
format.map = function (Map) {
    return Map._inner;
}
module.exports = format;