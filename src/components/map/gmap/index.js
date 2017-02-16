/**
 * Created by fizz on 2017/2/13.
 */

var LngLat = require('./lnglat');
var Bounds = require('./Bounds');
var Pixel = require('./Pixel');
var Size = require('./Size');
var Map = require('./map');
var Marker = require('./Marker');
var event = require('./event');
var InfoWindow = require('./infoWindow');
var Polyline = require('./polyline');
var Polygon = require('./polygon');
var Circle = require('./circle');
var MarkerClusterer = require('./markerclusterer');

var GMap = {};

GMap.event = event;

GMap.LngLat = LngLat;
GMap.Bounds = Bounds;
GMap.Pixel = Pixel;
GMap.Size = Size;

GMap.Map = Map;
GMap.Marker = Marker;
GMap.InfoWindow = InfoWindow;
GMap.Polyline = Polyline;
GMap.Polygon = Polygon;
GMap.Circle = Circle;
GMap.MarkerClusterer = MarkerClusterer;

module.exports = window.GMap = GMap;
