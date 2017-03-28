/**
 * Created by fizz on 2017/2/13.
 */

var LngLat = require('./Lnglat');
var Bounds = require('./Bounds');
var Pixel = require('./Pixel');
var Size = require('./Size');
var Map = require('./Map');
var Marker = require('./Marker');
var lMarker = require('./LMarker');
var event = require('./Event');
var InfoWindow = require('./InfoWindow');
var Polyline = require('./Polyline');
var Polygon = require('./Polygon');
var Circle = require('./Circle');
var MarkerClusterer = require('./MarkerClusterer');

var GMap = {};

GMap.event = event;

GMap.LngLat = LngLat;
GMap.Bounds = Bounds;
GMap.Pixel = Pixel;
GMap.Size = Size;

GMap.Map = Map;
GMap.Marker = Marker;
GMap.lMarker = lMarker;
GMap.InfoWindow = InfoWindow;
GMap.Polyline = Polyline;
GMap.Polygon = Polygon;
GMap.Circle = Circle;
GMap.MarkerClusterer = MarkerClusterer;

module.exports = window.GMap = GMap;
