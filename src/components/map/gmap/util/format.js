/**
 * Created by Administrator on 2017/3/30.
 */
function format(options) {
    if (options.Point) {
        options.Point = new google.maps.Point(options.Point.getX(), options.Point.getY());
    }
    return options;
}

module.exports = format;