/**
 * Created by fizz on 2017/2/14.
 */
var onOff = require('./onOff');
var formatOpts = require('./formatOpt');

/**
 * @constructor
 * @opts {Object} opts
 * */
function InfoWindow(opts) {
  var fmOpts = formatOpts.infoWindow(opts);
  this._type = 'InfoWindow';
  this._inner = new google.maps.InfoWindow(fmOpts);
};

InfoWindow.prototype = {
  /**
   * @function open a infoWindow in the position
   * @map {Map} map required
   * @pos {LngLat} position lngLat
   * */
  open: function(map, pos) {
    if(pos) {
      this._inner.setPosition(pos);
    }
    this._inner.open(map._inner);
    this._isOpen = true;
  },

  close: function() {
    this._inner.close();
    this._isOpen = false;
  },

  getIsOpen: function() {
    return this._isOpen;
  },

  /**
   * @function setContent
   * @content {String|htmlDOM} content
   * */
  setContent: function(content) {
    this._inner.setContent(content);
  },

  getContent: function() {
    return this._inner.getContent();
  },

  setPosition: function(lngLat) {
    this._inner.setPosition(lngLat);
  },

  getPosition: function() {
    return this._inner.getPosition();
  },

  // todo: google 不支持
  setSize: function(size) {

  },

  // todo: google 不支持
  getSize: function() {

  },

  on: onOff.on,
  off: onOff.off
};



module.exports = InfoWindow;



