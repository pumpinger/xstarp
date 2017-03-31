/**
 * Created by fizz on 2017/2/13.
 * @Class Marker
 */
var obc = require('./util/overlayBaseClass');
var onOff = require('./util/onOff');
var format = require('./util/format.js');
var LMarker = require('./LMarker');

/**
 * Represents a Marker
 * @constructor
 * @param {Object} opts
 * @param {Object} inner
 * @return an object, inner is prime google map Marker instance.
 * */
function Marker(opts, inner) {
    if (inner) {
        this._inner = inner;
    } else {
        // 在opts转换之前就要判断添加overlay
        // obc.addOverlay(opts, this);
        var newOpts = format.marker(opts);
        if (newOpts.content) {
            newOpts.icon = 'http://c163img.nos-eastchina1.126.net/blank_36x36.png';
            newOpts.label = newOpts.content;
            this._inner = new LMarker(newOpts);
            console.log('LMarker',this._inner);
            
        } else {
            this._inner = new google.maps.Marker(newOpts);
        }
        this._inner._smap = newOpts.map;
        this.position = newOpts.position;
    }
    this._type = 'Marker';
    return this;
}

// Marker.prototype = new google.maps.Marker();

Marker.prototype.setMap = function (map) {
    if (map !== null) {
        this._inner._smap = map;
        map._overLayers[this._type].push(this);
        this._inner.setMap(map._inner);
        var that = this;
        console.log('inner',that._inner.__gm);
        setTimeout(function () {
            if (that._inner.content && that._inner.__gm.Eb.map) {
                that._inner.__gm.Eb.map.b.O.style.opacity = 1;
                that._inner.__gm.Eb.map.b.O.innerHTML = that._inner.content;
            }},
        1000);

    } else {
        this._inner.setMap(null);
    }
};
Marker.prototype.getMap = obc.getMap;
Marker.prototype.getPosition = function () {
    return this._inner.getPosition();
};

Marker.prototype.hide = function () {
    this._inner.setVisible(false);
};
Marker.prototype.show = function () {
    this._inner.setVisible(true);
};
Marker.prototype.on = onOff.on;
Marker.prototype.off = onOff.off;

module.exports = Marker;