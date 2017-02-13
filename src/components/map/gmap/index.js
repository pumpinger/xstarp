/**
 * Created by fizz on 2017/2/13.
 */

var LngLat = require('./lnglat');
var Map = require('./map');

var GMap = {};

GMap.LngLat = LngLat;
GMap.Map = Map;








module.exports = window.GMap = GMap;
