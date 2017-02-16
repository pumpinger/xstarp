/**
 * Created by fizz on 2017/2/13.
 * @constructor of Map
 * @return our map object
 */

var config = require('../config');
var Bounds = require('./Bounds');

/**
 * @constructor
 * @elem {Object}
 * @opts {Object}
 * */
function Map(id,opts) {
  var elem, newOpts;

  elem = document.getElementById(id);
  newOpts = formatOpts(opts);

  this._inner = new google.maps.Map(elem, newOpts);

  return this;
};

Map.prototype = {
  plugin : function (name, fn) {
    if(name[0] === 'SMap.MarkerClusterer') {
      $.getScript(config.GMap_MarkerClusterer, function() {
        fn();
      });
    }
  },

  getBounds: function() {
    return new Bounds('','',this._inner.getBounds());
  }
};

function formatOpts(opts) {
  if(opts.center) {
    if(Object.prototype.toString.call(opts.center) == '[object Array]') {
      opts.center = {lng: opts.center[0], lat: opts.center[1]};
    }
    opts.center = new GMap.LngLat(opts.center.lng, opts.center.lat);
  }
  return opts;
}

module.exports = Map;
