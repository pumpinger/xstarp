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
    this.options = IWOpts;

    google.maps.OverlayView.apply(this, arguments);

    console.log('infoW',this);

    this._inner = new google.maps.OverlayView(IWOpts);
}

InfoWindow.prototype = new google.maps.OverlayView();

InfoWindow.prototype.open = function (map, pos) {
    this._smap = map;
    this.setMap(map._inner);

    if (pos) {
        this.setPosition(pos);
    }
    this.setMap(map._inner);

    map._overLayers.InfoWindow.push(this);

    this._isOpen = true;
};


InfoWindow.prototype.onAdd = function () {

    var div = document.createElement('div');
    div.style.borderStyle = 'none';
    div.style.borderWidth = '0px';
    div.style.position = 'absolute';
    div.style.cursor = 'pointer';
    div.append(this.options.content);

    // Create the img element and attach it to the div.
    var img = document.createElement('div');
    // img.src = this.image_;
    // img.style.width = '100%';
    // img.style.height = '100%';
    // img.style.position = 'absolute';

    div.append(img);
    var that = this;
    div.onclick = function (e) {
        google.maps.event.trigger(that, 'click', e);
    };
    this.div_ = div;

    // Add the element to the "overlayLayer" pane.
    var panes = this.getPanes();
    // this.getPanes().markerLayer.innerHTML = 'sss'
    panes.overlayMouseTarget.append(div);
};
InfoWindow.prototype.draw = function () {

    // We use the south-west and north-east
    // coordinates of the overlay to peg it to the correct position and size.
    // To do this, we need to retrieve the projection from the overlay.
    var overlayProjection = this.getProjection();

    // Retrieve the south-west and north-east coordinates of this overlay
    // in LatLngs and convert them to pixel coordinates.
    // We'll use these coordinates to resize the div.
    var position = overlayProjection.fromLatLngToDivPixel(this.options.position._inner);

    // Resize the image's div to fit the indicated dimensions.
    var div = this.div_;
    div.style.left = position.x + 'px';
    div.style.top = position.y + 'px';
};
InfoWindow.prototype.onRemove = function () {
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
};

// Set the visibility to 'hidden' or 'visible'.
InfoWindow.prototype.hide = function () {
    if (this.div_) {
        // The visibility property must be a string enclosed in quotes.
        this.div_.style.visibility = 'hidden';
    }
};

InfoWindow.prototype.show = function () {
    if (this.div_) {
        this.div_.style.visibility = 'visible';
    }
};


InfoWindow.prototype.close = function () {
    this.hide();
    this._isOpen = false;
    var infoWindows = this._smap._overLayers.InfoWindow;
    infoWindows.filter(function (item, index) {
        if (item == this) {
            infoWindows.splice(index, 1);
        }
    });
},

InfoWindow.prototype.getIsOpen = function () {
    return this._isOpen;
};

/**
 * @function setContent
 * @content {String|htmlDOM} content
 * */
InfoWindow.prototype.setContent = function (content) {
    this.div_.innerHTML = content;
};

InfoWindow.prototype.getContent = function () {
    return this.div_;
};

InfoWindow.prototype.setPosition = function (LngLat) {
    var overlayProjection = this._smap._inner.getProjection();
    var position = overlayProjection.fromLatLngToDivPixel(LngLat);

    var div = this.div_;
    this.options.position = LngLat;
    div.style.left = position.x + 'px';
    div.style.top = position.y + 'px';
};

InfoWindow.prototype.getPosition = function () {
    return this.options.position;
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



