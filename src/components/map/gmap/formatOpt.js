/**
 * Created by fizz on 2017/2/14.
 */

var LngLat = require('./lnglat');

module.exports = {
  map: function(opts) {
    return formatOptsUni(opts);
  },

  infoWindow: function (opts) {
    return formatOptsUni(opts);
  },

  marker: function (opts) {
    return formatOptsUni(opts);
  },

  polyline: function (opts) {
    return formatOptsUni(opts);
  },

  polygon: function (opts) {
    return formatOptsUni(opts);
  },

  circle: function(opts) {
    return formatOptsUni(opts);
  },

  markerClusterer: function(map, markers, opts) {
    var newOpts = {};

    if(map._inner) {
      newOpts.map = map._inner;
    } else {
      newOpts.map = map;
    }

    newOpts.markers = markers.map( function(item) {
      return item._inner;
    });
    newOpts.opts = opts;

    return newOpts;
  }
};

function formatOptsUni(opts) {

  if(opts.position) {
    opts.position = new LngLat(opts.position);
  }

  if(opts.path) {
    opts.path = transfromPathToPaths(opts.path);
  }

  if(opts.map) {
    opts.map = opts.map._inner;
  }

  return opts;
}

function transfromPathToPaths(path) {
  var paths = [];
  path.forEach( function(item, index) {
    paths.push(arrCreateLngLat(item));
  });
  return paths;
}

function arrCreateLngLat(arr) {
  return new google.maps.LatLng({lng: arr[0], lat: arr[1]});
}


// var flightPlanCoordinates = [
//   {lat: 37.772, lng: -122.214},
//   {lat: 21.291, lng: -157.821},
//   {lat: -18.142, lng: 178.431},
//   {lat: -27.467, lng: 153.027}
// ];

// var lineArr = [
//   [116.368904, 39.913423],
//   [116.382122, 39.901176],
//   [116.387271, 39.912501],
//   [116.398258, 39.904600]
// ];