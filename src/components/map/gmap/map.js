/**
 * Created by fizz on 2017/2/13.
 * @constructor of Map
 * @return our map object
 */

var config = require('../config');
var Bounds = require('./Bounds');
var onOff = require('./onOff');
var formatOpts = require('./formatOpt');

/**
 * @constructor
 * @elem {Object}
 * @opts {Object}
 * */
function Map(id,opts) {
  var elem, newOpts;

  elem = document.getElementById(id);
  newOpts = formatOpts.map(opts);

  this._inner = new google.maps.Map(elem, newOpts);
  this._inner._smap = this;
  this._overLayers = {
    marker: [],
    infoWindow: [],
    polygon: [],
    polyline: [],
    Circle: []
  };

  return this;
}
var c = new Map();
c.cc = 11;

Map.prototype = {

  plugin : function (name, fn) {
    if(name[0] === 'SMap.MarkerClusterer') {
      $.getScript(config.GMap_MarkerClusterer, function() {
        fn();
      });
    }
  },

  clearMap: clearMap,

  /**
   * @param {LngLat} position
   * */
  panTo: function(position) {
    this._inner.panTo(position._inner);
  },

  destroy: function() {

  },

  /**
   * @param {Number} zoom
   * */
  setZoom: function(zoom) {
    this._inner.setZoom(zoom);
  },

  getBounds: function() {
    return new Bounds('','',this._inner.getBounds());
  },

  on: onOff.on,
  off: onOff.off
};

function clearMap() {
  var overLayers = this._overLayers;

  for(var type in overLayers) {
    overLayers[type].forEach( function(item) {
      item._inner.setMap(null);
      item._inner = null;
      item = null;
    });
    overLayers.lenght = 0;
  }
}

module.exports = Map;
