/**
 * Created by fizz on 2017/2/13.
 */

var LngLat = require('./lnglat');
var Map = require('./map');
var Marker = require('./Marker');
var event = require('./event');
var InfoWindow = require('./infoWindow');

var GMap = {};

GMap.LngLat = LngLat;
GMap.Map = Map;
GMap.Marker = Marker;
GMap.event = event;
GMap.InfoWindow = InfoWindow;

module.exports = window.GMap = GMap;
