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

  return this;
}

Map.prototype = {
  plugin : function (name, fn) {
    if(name[0] === 'SMap.MarkerClusterer') {
      $.getScript(config.GMap_MarkerClusterer, function() {
        fn();
      });
    }
  },

  clearMap: function() {
    this._inner.clearMap();
  },

  getBounds: function() {
    return new Bounds('','',this._inner.getBounds());
  },

  on: onOff.on,
  off: onOff.off
};

module.exports = Map;
