/**
 * Created by fizz on 2017/2/20.
 * @constructor for google map event Object.
 * Wrap event and return our new event object just like gaode AMap event.
 */

var LngLat = require('./lnglat');

/**
 * 包装Google的事件触发时的event对象
 *
 * @constructor
 * @param {Object} event object
 * */
function SMapEvent(e) {
  this._inner = e;
  this._type = 'Event';

  this.lnglat = new LngLat(e.latLng.lng(), e.latLng.lat());
  this.lnglat.I = e.latLng.lng();
  this.lnglat.L = e.latLng.lat();

  this.pixel = {
    x: e.pixel.x,
    y: e.pixel.y
  };
}

module.exports = SMapEvent;
