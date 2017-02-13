/**
 * Created by fizz on 2017/2/13.
 */

var GMap = require('./gmap/index.js');

var SMap = {};

window.GMap = GMap;
window.SMap = SMap;
window.mapCreate = mapCreate;

function mapCreate(type) {
  if (type == 'a') {
    return AMap;
  } else {
    return GMap;
  }
}

mapCreate.setType = function(type) {
  console.log("type is:", type);
  if( type == 'a') {
    console.log('AMap');
    SMap = AMap;
  } else {
    console.log('123');
    console.log(GMap);
    console.log('old SMap is',SMap);
    SMap = GMap;
    console.log('new SMap is',SMap);
  }
};

module.exports = SMap;
