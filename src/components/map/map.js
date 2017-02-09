/**
 * Created by fizz on 2017/2/9.
 */

var _ = require('lodash');
var util = require('./util');
var gMap = require('./gmapAPI');
var aMap = require('./amapAPI');

window.iMap = function (mapType, opt, theme) {
  return new map(mapType, opt, theme);
};
var map = function (mapType, opt, themes) {
  if(mapType === 'AMap') {
    this._type = 'AMap';
  } else if (mapType === 'GMap') {
    this._type = 'GMap';
  } else {
    console.log("请选择正确的地图API类型哦，可选值：['AMap','GMap']");
  }
};

map.prototype = {
  Map: function (container, opt) {
    this._type === 'AMap' ?
      gMap.map(container, opt):
      aMap.map(container, opt);
  },

  _isAMap: function () {
    return this._type === 'AMap';
  },
  _isGMap: function () {
    return this._type === 'GMap';
  }
};




module.exports = map;
