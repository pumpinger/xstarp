/**
 * Created by fizz on 2017/2/14.
 * @constructor InfoWindow
 *
 * 高德有 change 事件，百度没有
 */
var onOff = require('./onOff');
var formatOpts = require('./formatOpt');
var obc = require('./overlayBaseClass');
var LngLat = require('./LngLat');

/**
 * @constructor
 * @opts {Object} opts
 * */
function InfoWindow(opts) {
  this._type = 'InfoWindow';
  obc.addOverlay(opts, this);

  var newOpts = formatOpts.infoWindow(opts);
  this._inner = new BMap.InfoWindow(newOpts.content, newOpts);
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

  // TODO: 百度没有setPosition
  // setPosition: function(lngLat) {
  //   this._inner.setPosition(lngLat);
  // },

  getPosition: function() {
    return new LngLat('', '', this._inner.getPosition());
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



