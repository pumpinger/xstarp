/**
 * Created by Administrator on 2017/3/27.
 */

LMarker = function (options) {
    this.options = options;
    // this.latlng = options.latlng;
    // this.labelText = options.labelText || '';
    // this.labelClass = options.labelClass || 'writeb';
    // this.labelOffset = options.labelOffset || new google.maps.Size(8, -33);
    // options.icon = options.icon || getTextIcon();
    // google.maps.OverlayView.apply(this, arguments);
};

LMarker.prototype = new google.maps.OverlayView();

LMarker.prototype.onAdd = function () {

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
LMarker.prototype.draw = function () {

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
LMarker.prototype.onRemove = function () {
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
};

// Set the visibility to 'hidden' or 'visible'.
LMarker.prototype.hide = function () {
    if (this.div_) {
        // The visibility property must be a string enclosed in quotes.
        this.div_.style.visibility = 'hidden';
    }
};

LMarker.prototype.show = function () {
    if (this.div_) {
        this.div_.style.visibility = 'visible';
    }
};

module.exports = LMarker;