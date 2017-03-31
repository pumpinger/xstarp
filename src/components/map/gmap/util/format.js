/**
 * Created by Administrator on 2017/3/30.
 */
/**
 * @util
 * @options {Object} options
 * */
function format(options) {
    if (options.Pixel) {
        options.Pixel = options.Pixel._inner;
    }
    if (options.Size) {
        options.Size = options.Size._inner;
    }
    if (options.LngLat) {
        options.LngLat = options.LngLat._inner;
    }
    if (options.Bounds) {
        options.Bounds = options.Bounds._inner;
    }
    return options;
}
module.exports = format;