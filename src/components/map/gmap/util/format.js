/**
 * Created by Administrator on 2017/3/30.
 */
/**
 * @util
 * @options {Object} options
 * */
function format(options) {
    // if (options.Point) {
    //     options.Point = new google.maps.Point(options.Point.getX(), options.Point.getY());
    // }
    // if (options.LngLat) {
    //     options.LngLat = new google.maps.LatLng({lat: options.LngLat.getLat(), lng: options.LngLat.getLng()});
    // }

    if (options.Point) {
        options.Point = options.Point._inner;
    }
    if (options.LngLat) {
        options.LngLat = options.LngLat._inner;
    }
    return options;
}
module.exports = format;