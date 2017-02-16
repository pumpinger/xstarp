/**
 * Created by fizz on 2017/2/13.
 */

var GMap = require('./gmap/index.js');

var SMap = {};

window.GMap = GMap;
window.mapCreate = mapCreate;

function mapCreate(type) {
  if (type == 'a') {
    return window.AMap;
  } else {
    return window.GMap;
  }
}

mapCreate.setType = function(type) {
  if( type == 'a') {
    window.SMap = AMap;
  } else {

    window.SMap = window.GMap;
  }
};

SMap = AMap;

window.SMap = SMap;

module.exports = SMap;
