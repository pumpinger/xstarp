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
function MarkerClusterer(map, markers, opts) {

  console.log("map is:", map);
  var newOpts = formatOpts.markerClusterer(map, markers, opts);

  this._inner = new MarkerClusterer(newOpts.map, newOpts.markers, newOpts.opts);

  return this;
}

MarkerClusterer.prototype = {
  getSize: function() {},

  setMap: function(map) {
    this._inner.setMap(map._inner);
  },

  getMap: function() {
    return this._inner.getMap();
  }
};












module.exports = MarkerClusterer;
