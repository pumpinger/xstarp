/**
 * Created by fizz on 2017/2/15.
 * @constructor Pixel
 * 在google map里面对应的是Point
 * https://developers.google.com/maps/documentation/javascript/reference#Point
 */

var format = require('./util/format.js');
/**
 * @constructor
 * @param {Number} x
 * @param {Number} y
 * */
function Pixel(x, y, inner) {
    if (inner) {
        this._inner = inner;
    } else {
        this._inner = new google.maps.Point(x, y);
    }
    this._type = 'Pixel';
    return this;
}

Pixel.prototype.getX = function () {
    return this._inner.x;
};
Pixel.prototype.getY = function () {
    return this._inner.y;
};
/**
 * @param {Pixel} pixel
 * */
Pixel.prototype.equals = function (pixel) {
    var point = format({Point: pixel}).Point;
    return this._inner.equals(point);
};
Pixel.prototype.toString = function () {
    return this._inner.toString();
};
module.exports = Pixel;
