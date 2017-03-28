/**
 * Created by fizz on 2017/2/15.
 */

var formatOpts = require('./formatOpt');
var obc = require('./overlayBaseClass');

/**
 * @constructor
 * @map {Map.Object}
 * @marker {Marker}
 * @opts {MarkerClustererOptions}
 * */
function Clusterer(map, markers, opts) {
  if(markers.length < 1) return;

  this._type = 'MarkerClusterer';
  obc.addOverlay({map: map}, this);

  var newOpts = formatOpts.markerClusterer(map, markers, opts);
  this._inner = new MarkerClusterer(newOpts.map, newOpts.markers, newOpts.opts);
  this._inner._smap = map;
}

Clusterer.prototype = {
  getSize: function() {},

  setMap: obc.setMap,

  getMap: function() {
    return this._inner.getMap();
  },

  addMarker: function() {},
  removeMarker: function() {},

  /**
   * @param {Array} styles
   * */
  setStyles: function(styles) {

  }
};

module.exports = Clusterer;
