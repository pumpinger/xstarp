/**
 * Created by fizz on 2017/2/15.
 */

var formatOpts = require('./formatOpt');

/**
 * @constructor
 * @map {Map.Object}
 * @marker {Marker}
 * @opts {MarkerClustererOptions}
 * */
function Clusterer(map, markers, opts) {
  if(markers.length < 1) return;

  var newOpts = formatOpts.markerClusterer(map, markers, opts);

  this._inner = new MarkerClusterer(newOpts.map, newOpts.markers, newOpts.opts);

  this._type = 'MarkerClusterer';
  return this;
}

Clusterer.prototype = {
  getSize: function() {},

  setMap: function(map) {
    this._inner.setMap(map._inner);
  },

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
