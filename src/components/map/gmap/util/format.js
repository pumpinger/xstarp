/**
 * gmap util format
 */
/**
 * @util
 * @options {Object} options
 * */
var format = {};
format.format = function (options) {
    if (options.Pixel) {
        formated.Pixel = options.Pixel._inner;
    }
    if (options.Size) {
        formated.Size = options.Size._inner;
    }
    if (options.LngLat) {
        formated.LngLat = options.LngLat._inner;
    }
    if (options.Bounds) {
        formated.Bounds = options.Bounds._inner;
    }
}
format.marker = function(options) {
    var formated = {};
    if (options.map) {
        formated.map = options.map._inner;
    }
    if (options.position) {
        formated.position = options.position._inner;
    }
    return formated;
}
module.exports = format;