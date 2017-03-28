/**
 * Created by fizz on 2017/2/14.
 */
var onOff = require('./util/onOff');
var formatOpts = require('./util/formatOpt');
var obc = require('./util/overlayBaseClass');

/**
 * @constructor
 * @opts {Object} opts
 * */
function InfoWindow(options) {
    this._type = 'InfoWindow';
    obc.addOverlay(options, this);

    var IWOpts = formatOpts.infoWindow(options);

    google.maps.OverlayView.apply(this, arguments);

    this._inner = new google.maps.InfoWindow(IWOpts);
}

InfoWindow.prototype = new google.maps.OverlayView();

InfoWindow.prototype.open = function (map, pos) {
    if (pos) {
        this._inner.setPosition(pos);
    }
    this._inner.open(map._inner);
    this._inner._smap = map;
    map._overLayers.InfoWindow.push(this);
    this._isOpen = true;
};

InfoWindow.prototype.close = function () {
    this._inner.close();
    this._isOpen = false;
    var infoWindows = this._inner._smap._overLayers.InfoWindow;
    infoWindows.filter(function (item, index) {
        if (item == this) {
            infoWindows.splice(index, 1);
        }
    });
};

InfoWindow.prototype.getIsOpen = function () {
    return this._isOpen;
};

/**
 * @function setContent
 * @content {String|htmlDOM} content
 * */
InfoWindow.prototype.setContent = function (content) {
    this._inner.setContent(content);
};

InfoWindow.prototype.getContent = function () {
    return this._inner.getContent();
};

InfoWindow.prototype.setPosition = function (lngLat) {
    this._inner.setPosition(lngLat);
};

InfoWindow.prototype.getPosition = function () {
    return this._inner.getPosition();
};

// todo: google 不支持
InfoWindow.prototype.setSize = function (size) {

};

// todo: google 不支持
InfoWindow.prototype.getSize = function () {

};

InfoWindow.prototype.on = onOff.on;
InfoWindow.prototype.off = onOff.off;

module.exports = InfoWindow;



