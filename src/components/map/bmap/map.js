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
  var elem, newOpts = {};

  this._type = 'Map';

  if(opts) {
    newOpts = formatOpts.map(opts);
  }

  this._inner = new BMap.Map(id, newOpts);

  this._init(newOpts);

  this._inner._smap = this;

  this._overLayers = {
    MarkerClusterer: [],
    Marker: [],
    InfoWindow: [],
    Polygon: [],
    Polyline: [],
    Circle: []
  };
}

Map.prototype = {
  /**
   * 百度Map方法调用之后需要
   * 调用centerAndZoom来进行初始化
   * @param {object} opts
   */
  _init: function(opts) {
    if(opts.center) {
      if(opts.zoom) {
        this._inner.centerAndZoom(opts.center, opts.zoom);
      }
    }
  },

  plugin : mapPlugin,

  clearMap: clearMap,

  /**
   * @param {LngLat} position
   * */
  panTo: function(position) {
    this._inner.panTo(position._inner);
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

function mapPlugin(plugins, fn) {
  if(plugins.length < 1) return;

  plugins.forEach( function(plugin) {

    console.log(plugin);
    if(plugin === 'GMap.MarkerClusterer') {
      $.getScript(config.GMap_MarkerClusterer, function() {
        fn();
      });
    }

  })
}

function clearMap() {
  var overLayers = this._overLayers;

  for(var type in overLayers) {

    switch (type) {
      case 'Marker':
      case 'Circle':
      case 'Polygon':
      case 'Polyline':
      case 'InfoWindow':
        if(overLayers[type].length > 0) {
          overLayers[type].forEach( function(item) {
            item._inner.setMap(null);
            item._inner = null;
            item = null;
          });
          overLayers.lenght = 0;
        }
        break;
      case 'MarkerClusterer':
        if(overLayers.MarkerClusterer.length > 0) {
          overLayers.MarkerClusterer.forEach( function(item) {
            item._inner.clearMarkers();
            item._inner = null;
            item = null;
          });
          overLayers.MarkerClusterer.length = 0;
        }
        break;
    }

  }
}

module.exports = Map;
