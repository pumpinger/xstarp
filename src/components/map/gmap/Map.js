/**
 * Created by fizz on 2017/2/13.
 * @constructor of Map
 * @return our map object
 */

var config = require('../config');
var Bounds = require('./Bounds');
var onOff = require('./util/onOff');
var formatOpts = require('./util/formatOpt');

/**
 * @constructor
 * @elem {Object}
 * @opts {Object}
 * */
function Map(id, opts) {
    var elem, newOpts;

    this._type = 'Map';
    elem = document.getElementById(id);
    newOpts = formatOpts.map(opts);

    this._inner = new google.maps.Map(elem, newOpts);
    this._inner._smap = this;
    this._overLayers = {
        MarkerClusterer: [],
        Marker: [],
        InfoWindow: [],
        Polygon: [],
        Polyline: [],
        Circle: []
    };
}

Map.prototype = {

    plugin: mapPlugin,

    service: function (pluginName, callback) {

    },

    setStatus: function () {
        return
    },
    clearMap: clearMap,
    clearInfoWindow: function () {
        var iws = this._overLayers.InfoWindow;
        iws.forEach(function (item) {
            item.close();
        })
    },

    // TODO: setFitView
    setFitView: function () {

    },

    /**
     * @param {LngLat} position
     * */
    panTo: function (position) {
        this._inner.panTo(position._inner);
    },

    destroy: function () {

    },

    /**
     * @param {Number} zoom
     * */
    setZoom: function (zoom) {
        this._inner.setZoom(zoom);
    },

    getBounds: function () {
        return new Bounds('', '', this._inner.getBounds());
    },

    // todo:
    setBounds: function () {

    },

    on: onOff.on,
    off: onOff.off
};

function mapPlugin(plugins, fn) {
    if (plugins.length < 1) return;

    plugins.forEach(function (plugin) {

        console.log(plugin);
        if (plugin === 'GMap.MarkerClusterer') {
            $.getScript(config.GMap_MarkerClusterer, function () {
                fn();
            });
        }

    })
}

function clearMap() {
    var overLayers = this._overLayers;

    for (var type in overLayers) {

        switch (type) {
            case 'Marker':
            case 'Circle':
            case 'Polygon':
            case 'Polyline':
            case 'InfoWindow':
                if (overLayers[type].length > 0) {
                    overLayers[type].forEach(function (item) {
                        item._inner.setMap(null);
                    });
                    overLayers.lenght = 0;
                }
                break;
            case 'MarkerClusterer':
                if (overLayers.MarkerClusterer.length > 0) {
                    overLayers.MarkerClusterer.forEach(function (item) {
                        item._inner.clearMarkers();
                    });
                    overLayers.MarkerClusterer.length = 0;
                }
                break;
        }

    }
}

module.exports = Map;