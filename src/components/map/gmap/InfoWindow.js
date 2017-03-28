/**
 * Created by fizz on 2017/2/14.
 */
var onOff = require('./util/onOff');
var formatOpts = require('./util/formatOpt');
var obc = require('./util/overlayBaseClass');

/**
 * @constructor
 * @opts {Object} opts
 * */
function InfoWindow(opts) {
  this._type = 'InfoWindow';
  obc.addOverlay(opts, this);

  var fmOpts = formatOpts.infoWindow(opts);
  this._inner = new google.maps.InfoWindow(fmOpts);
}

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
    this._inner._smap = map;
    map._overLayers.InfoWindow.push(this);
    this._isOpen = true;
  },

  close: function() {
    this._inner.close();
    this._isOpen = false;
    var infoWindows = this._inner._smap._overLayers.InfoWindow;
    infoWindows.filter( function(item, index) {
      if(item == this) {
        infoWindows.splice(index, 1);
      }
    });
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



