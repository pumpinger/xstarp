/**
 * Created by fizz on 2017/2/13.
 */

var GMap = require('./gmap/index.js');

var SMap = {};

function mapCreate(type) {
  if (type == 'a') {
    return AMap;
  } else {
    return GMap;
  }
}
mapCreate.setType = function(type) {
  if( type == 'a') {
    SMap = AMap;
  } else {
    SMap = GMap;
  }
};

SMap = AMap;




module.exports = window.SMap = SMap;
