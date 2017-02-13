/**
 * Created by fizz on 2017/2/13.
 */

// var Lnglat = require('./lnglat');

/**
 * @constructor Map
 * */
var Map = function(id,opts) {
  console.log("Map running");
  var elem, newOpts;

  elem = document.getElementById(id);
  newOpts = formatOpts(opts);

  console.log(google.maps.Map);
  return map = new google.maps.Map(elem, newOpts);
};

function formatOpts(opts) {
  if(opts.center) {
    // opts.center = new GMap.LngLat(opts.center);
    opts.center = {lat: opts.center[1], lng: opts.center[0]};
  }
  console.log(opts);
}

module.exports = Map;



