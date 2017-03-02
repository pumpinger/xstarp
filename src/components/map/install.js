/**
 * Created by fizz on 2017/2/13.
 */

var util = require('../../common/js/util.js');
var GMap = require('./gmap/index.js');
var DMap = require('./bmap/index.js');

window.GMap = GMap;
window.DMap = DMap;

var SMap = {};

window.mapCreate = mapCreate;

if(typeof AMap === 'undefined') {
  SMap = mapCreate('g');
}
else {
  SMap = mapCreate('a');
}

/**
 * @function 设置地图类型
 * @param {String} type
 * **地图类型**
 * * 'a' 代表高德地图
 * * 'g' 代表谷歌地图
 * * 'b' 代表百度地图
 * */
function mapCreate(type) {
  if (type == 'a') {
    initPlugin('AMap', 'AMap');
    return window.AMap;
  } else if (type == 'g') {
    initPlugin('GMap', 'GMap');
    return window.GMap;
  } else if (type == 'b') {
    initPlugin('DMap', 'DMap');
    return window.DMap;
  }
}

/**
 * @function 设置地图类型
 * @param {String} type
 * **地图类型**
 * * 'a' 代表高德地图
 * * 'g' 代表谷歌地图
 * * 'b' 代表百度地图
 * */
mapCreate.setType = function(type) {
  var mapType = '';
  if( type == 'a' ) {
    window.SMap = AMap;
    mapType = 'AMap';
  } else if ( type == 'g' ) {
    window.SMap = window.GMap;
    mapType = 'GMap';
  } else if ( type == 'b') {
    window.SMap = window.DMap;
    mapType = 'DMap';
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

function _installMapAPI() {

};

module.exports = window.SMap = SMap;
