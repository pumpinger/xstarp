/**
 * Created by fizz on 2017/2/20.
 */

var LngLat = require('./lnglat');

/**
 * @constructor
 * */
function SMapEvent(e) {
  this._inner = e;
  this._type = 'Event';
  this.lnglat = new LngLat(e.latLng.lng, e.latLng.lng);
  this.lnglat.I = e.latLng.lng;
  this.lnglat.L = e.latLng.lat;

  this.pixel = {
    x: e.pixel.x,
    y: e.pixel.y
  };
  // this.target = e.target;
  // this.type = e.type;
}

SMapEvent.prototype = {

};

module.exports = SMapEvent;
