/**
 * Created by fizz on 2017/2/13.
 * @Class Marker
 */
var obc = require('./overlayBaseClass');
var onOff = require('./onOff');
var formatOpts = require('./formatOpt');

/**
 * Represents a Marker
 * @constructor
 * @param {Object} opts
 * @param {Object} inner
 * @return an object, inner is prime google map Marker instance.
 * */
function Marker(opts, inner) {

    this._type = 'Marker';

    if(inner) {
        this._inner = inner;
    } else {
        // 在opts转换之前就要判断添加overlay
        obc.addOverlay(opts, this);
        var fOpts = formatOpts.marker(opts);//格式化opts
        google.maps.Marker.apply(this, fOpts);
        this._inner = this;
        if(opts.map) {
            this._inner._smap = fOpts.map;
        }
        this.position = this._inner.position
    }
}

Marker.prototype = {
    setMap: obc.setMap,
    getMap: obc.getMap,
    getPosition : function () {
        return this.position;
    },
    hide: obc.hide,
    show: obc.show,
    on: onOff.on,
    off: onOff.off
};

module.exports = Marker;


// function Marker(opts) {
//     this._type = 'Marker';
//     obc.addOverlay(opts, this);
//     var formatOpts = formatOpts.marker(opts);//转换opts
//     this.latlng = opts.latlng;
//     this.labelText = opts.labelText || '';
//     this.labelClass = opts.labelClass || 'writeb';
//     this.labelOffset = opts.labelOffset || new google.maps.Size(8, -33);
//     opts.icon = opts.icon || getTextIcon();
//     google.maps.Marker.apply(this, formatOpts);
//
//     this._inner = this;
// }
//
// Marker.prototype = new google.maps.Marker(new google.maps.LatLng(0, 0));
// Marker.prototype.initialize = function (map) {
//     google.maps.Marker.prototype.initialize.call(this, map);
//     var label = document.createElement('div');
//     label.className = this.labelClass;
//     label.innerHTML = this.labelText;
//     label.style.position = 'absolute';
//     label.style.width = '48px';
//     map.getPane(G_MAP_MARKER_PANE).appendChild(label);
//
//     this.smap = map;
//     this.label = label;
// };
// Marker.prototype.redraw = function (force) {
//     google.maps.Marker.prototype.redraw.call(this, map);
//     if (!force) {
//         return;
//     }
//     var point = this.map.fromLatLngToDivPixel(this.latlng);
//     var z = google.maps.Overlay.getZIndex(this.latlng.lat());
//
//     this.label.style.left = (point.x + this.labelOffset.width) + 'px';
//     this.label.style.top = (point.y + this.labelOffset.height) + 'px';
//     this.label.style.zIndex = z + 1;
// };
// Marker.prototype.remove = function () {
//     this.label.parentNode.removeChild(this.label);
//     this.label = null;
//     google.maps.Marker.prototype.remove.call(this);
// };
//
// Marker.prototype.setMap = obc.setMap;
// Marker.prototype.getMap = obc.getMap;
//
// Marker.prototype.hide = obc.hide;
// Marker.prototype.show = obc.show;
// Marker.prototype.on = onOff.on;
// Marker.prototype.off = onOff.off;
//
// module.exports = Marker;



