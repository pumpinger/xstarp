/**
 * Created by fizz on 2017/2/13.
 * @constructor of Map
 * @return our map object
 */

var config = require('../config');
var Bounds = require('./Bounds');
var onOff = require('./util/onOff');
var formatOpts = require('./util/formatOpt');

/**
 * @constructor
 * @elem {Object}
 * @opts {Object}
 * */
function Map(id, opts) {
  var elem, newOpts;
  this._type = 'Map';
  elem = document.getElementById(id);
  newOpts = formatOpts.map(opts);
  console.log("newOpts", newOpts);

  this._inner = new google.maps.Map(elem, newOpts);
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

Map.prototype.plugin = function(plugins, fn) {
  if (plugins.length < 1) return;
  plugins.forEach(function(plugin) {
    console.log(plugin);
    if (plugin === 'SMap.MarkerClusterer') {
      $.getScript(config.GMap_MarkerClusterer, function() {
        fn();
      });
    }

  })
};

Map.prototype.service = function(pluginName, callback) {

};

Map.prototype.setStatus = function() {
  return
};
Map.prototype.clearMap = function() {
  var overLayers = this._overLayers;
  for (var type in overLayers) {
    switch (type) {
      case 'Marker':
      case 'Circle':
      case 'Polygon':
      case 'Polyline':
      case 'InfoWindow':
        if (overLayers[type].length > 0) {
          overLayers[type].forEach(function(item) {
            item._inner.setMap(null);
          });
          overLayers.lenght = 0;
        }
        break;
      case 'MarkerClusterer':
        if (overLayers.MarkerClusterer.length > 0) {
          overLayers.MarkerClusterer.forEach(function(item) {
            item._inner.clearMarkers();
          });
          overLayers.MarkerClusterer.length = 0;
        }
        break;
    }

  }
};
Map.prototype.clearInfoWindow = function() {
  var iws = this._overLayers.InfoWindow;
  iws.forEach(function(item) {
    item.close();
  })
};

// TODO: setFitView
Map.prototype.setFitView = function() {

};

/**
 * @param {LngLat} position
 * */
Map.prototype.panTo = function(position) {
  this._inner.panTo(position._inner);
};

Map.prototype.destroy = function() {

};

/**
 * @param {Number} zoom
 * */
Map.prototype.setZoom = function(zoom) {
  this._inner.setZoom(zoom);
};

Map.prototype.getBounds = function() {
  return new Bounds('', '', this._inner.getBounds());
};
Map.prototype.setBounds = function() {
  // todo:    
};
Map.prototype.on = onOff.on;
Map.prototype.off = onOff.off

module.exports = Map;