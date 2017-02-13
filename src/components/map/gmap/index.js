/**
 * Created by fizz on 2017/2/13.
 */

var LngLat = require('./lnglat');

var GMap = {};

GMap.LngLat = LngLat;

GMap.Map = function(id,opts) {
  var elem, newOpts;

  elem = document.getElementById(id);
  newOpts = formatOpts(opts);

  return new google.maps.Map(elem, newOpts);
};

function formatOpts(opts) {
  if(opts.center) {
    opts.center = new GMap.LngLat(opts.center);
  }
}






module.exports = window.GMap = GMap;
