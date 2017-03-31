/**
 * Created by fizz on 2017/2/14.
 */

var LngLat = require('../LngLat');

function formatOptsUni(opts) {
    if (opts.position) {
        opts.position = new google.maps.LatLng({ lat: opts.position.getLat(), lng: opts.position.getLng() });
    }
    if (opts.path) {
        opts.path = transfromPathToPaths(opts.path);
    }
    if (opts.center) {
        opts.center = new google.maps.LatLng({ lat: opts.center[0], lng: opts.center[1] });
    }
    if (opts.map) {
        opts.map = opts.map._inner;
    }
    return opts;
}

function transfromPathToPaths(path) {
    var paths = [];
    path.forEach(function(item, index) {
        paths.push(arrCreateLngLat(item));
    });
    return paths;
}

function arrCreateLngLat(arr) {
    return new google.maps.LatLng({ lng: arr[0], lat: arr[1] });
}
/**************************************************
 * markerClusterer
 * ***********************************************/
function formatMarkerClusterer(map, markers, opts) {
    var newOpts = {};
    if (map._inner) {
        newOpts.map = map._inner;
    } else {
        newOpts.map = map;
    }
    newOpts.markers = markers.map(function(item) {
        return item._inner;
    });
    newOpts.opts = formatMarkerClustererOpts(opts);
    return newOpts;
}
/**
 * @param {Object} opts
 * @diff : minClusterSize : minimumClusterSize
 * */
function formatMarkerClustererOpts(opts) {
    if (opts.minClusterSize) {
        opts.minimumClusterSize = opts.minClusterSize;
    }

    if (opts.styles) {
        var styles = opts.styles;
        if (styles.size) {
            styles.width = styles.getWidth();
            styles.height = styles.getHeight();
        }
    }
}

module.exports = {
    map: formatOptsUni,

    infoWindow: formatOptsUni,

    marker: formatOptsUni,

    polyline: formatOptsUni,

    polygon: formatOptsUni,

    circle: formatOptsUni,

    markerClusterer: formatMarkerClusterer
};