/**
 * Created by fizz on 2017/2/9.
 */

var _ = require('lodash');
var util = require('./util');
var gMap = require('./gmapAPI');
var aMap = require('./amapAPI');
var latLng = require('./lib/lngLat');
const util = require('util');


var iMap, Map, map;

iMap = {};
var mapType;
iMap.setMapType = function (type) {
  mapType = type;
};
iMap.Map = function (id,option) {
  return iMap.creator(mapType,id,option);
};
iMap.Map = function (mapType, opt, theme) {
  return new map(mapType, opt, theme);
};

iMap.latLng = function () {};

window.iMap = iMap;

iMap.creator = function (type,id) {
  if(mapType == 'g'){
    return new gMap(id);
  }else{
    return new aMap(id);
  }
};
map = function (container) {

  this.map = null;
  this.init();
};

map.prototype = {
  init: function (container, opt) {

  },
  setCenter:function () {
    this.map.setCenter(new this.LatLng());
  }
};
var aMap = function () {

};
aMap.exected(map);
var gMap = function () {

};

gMap.exected(map);
gMap.prototype.init = function () {
    //parent:init()
    this.map = new GMap('ss');
};
var mapClass = iMap.creator('g','#map');





module.exports = map;

