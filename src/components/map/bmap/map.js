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

  this._type = 'Map';
  elem = document.getElementById(id);
  newOpts = formatOpts.map(opts);

  this._inner = new BMap.Map(elem, newOpts);
  this._inner._smap = this;
  this.mapObj = this._inner;

  if(opts.navigation){
    //鼠标滚轮支持
    this._inner.addControl(new BMap.NavigationControl());

  }
  if(opts.enableScroll){
    this._inner.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    this._inner.disableContinuousZoom();     //开启鼠标滚轮缩放
  }
  this._inner.centerAndZoom(opts.center, opts.zoom);
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

  plugin : mapPlugin,

  clearMap: clearMap,

  /**
   * @param {LngLat} position
   * */
  panTo: function(position) {
    this._inner.panTo(position._inner);
  },


  search: function(str,callback){
    var local = new BMap.LocalSearch(this._inner, { //智能搜索
      onSearchComplete: callback
    });
    if(str){
      local.search(str);
    }
    return local;
  },
  /**
   * @param {Number} zoom
   * */
  setZoom: function(zoom) {
    this._inner.setZoom(zoom);
  },
  setCenter: function(center){
    this._inner.setCenter(new BMap.Point(center.lng,center.lat));
  },

  removeOverly: function(){

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
