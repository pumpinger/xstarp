/**
 * Created by fizz on 2017/2/15.
 */

var formatOpts = require('./util/formatOpt');
var obc = require('./util/overlayBaseClass');

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
  this._inner.onclick = function (e) {
    google.maps.event.trigger(that, 'click', e);
  };
}

  Clusterer.prototype.getSize=function() {};

  Clusterer.prototype.setMap=obc.setMap;

  Clusterer.prototype.getMap=function() {
    return this._inner.getMap();
  };

  Clusterer.prototype.addMarker=function() {};
  Clusterer.prototype.removeMarker=function() {};

  /**
   * @param {Array} styles
   * */
  Clusterer.prototype.setStyles=function(styles) {

  };

module.exports = Clusterer;
