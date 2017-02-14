/**
 * Created by fizz on 2017/2/13.
 */

// var Lnglat = require('./lnglat');

/**
 * @constructor Map
 * @elem {Object}
 * @opts {Object}
 * */
var Map = function(id,opts) {

  var elem, newOpts;
  elem = document.getElementById(id);
  newOpts = formatOpts(opts);

  return new google.maps.Map(elem, newOpts);
};

function formatOpts(opts) {
  if(opts.center) {
    if(Object.prototype.toString.call(opts.center) == '[object Array]') {
      opts.center = {lng: opts.center[0], lat: opts.center[1]};
    }
    opts.center = new GMap.LngLat(opts.center.lng, opts.center.lat);
  }
  console.log(opts.center);
  return opts;
}

module.exports = Map;



