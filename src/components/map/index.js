/**
 * Created by fizz on 2017/2/13.
 */

var GMap = require('./gmap/index.js');
var util = require('../../common/js/util.js');

var SMap = {};

window.GMap = GMap;
window.mapCreate = mapCreate;

function mapCreate(type) {
  if (type == 'a') {
    initPlugin('AMap', 'AMap');
    return window.AMap;
  } else if (type == 'g') {
    initPlugin('GMap', 'GMap');
    return window.GMap;
  }
}

mapCreate.setType = function(type) {
  var mapType = '';
  if( type == 'a' ) {
    window.SMap = AMap;
    mapType = 'AMap';
  } else if ( type == 'g' ) {
    window.SMap = window.GMap;
    mapType = 'GMap';
  }
  initPlugin(mapType, 'SMap');
};

function initPlugin(mapType, Map) {
  window[Map].sPlugin = {
    MouseTool: mapType + '.MouseTool',
    CircleEditor: mapType + '.CircleEditor',
    PolyEditor: mapType + '.PolyEditor',
    Hotspot: mapType + '.Hotspot',
    MarkerClusterer: mapType + '.MarkerClusterer',
    RangingTool: mapType + '.RangingTool'
  };
}

if(typeof AMap === 'undefined') {
  SMap = mapCreate('g');
} else {
  SMap = mapCreate('a');
}

module.exports = window.SMap = SMap;
