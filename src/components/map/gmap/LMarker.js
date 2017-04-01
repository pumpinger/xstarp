/**
 * Created by Administrator on 2017/3/27.
 */

LMarker = function (options) {
  this.options = options;
  google.maps.OverlayView.apply(this, arguments);
  return this;
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
  var span = document.createElement('div');

  div.append(span);
  var that = this;
  div.onclick = function (e) {
    google.maps.event.trigger(that, 'click', e);
  };
  this.div_ = div;

  // Add the element to the "overlayLayer" pane.
  var panes = this.getPanes();
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
  var position = overlayProjection.fromLatLngToDivPixel(this.getPosition());

  // Resize the image's div to fit the indicated dimensions.
  this.div_.style.left = position.getX() + 'px';
  this.div_.style.top = position.getY() + 'px';
};
LMarker.prototype.onRemove = function () {
  this.div_.parentNode.removeChild(this.div_);
  this.div_ = null;
};

LMarker.prototype.getPosition = function () {
  return this.options.position;
};
LMarker.prototype.setPosition = function (latlng) {
    this.options.position = latlng._inner;
    this.draw();
};

// Set the visibility to 'hidden' or 'visible'.
LMarker.prototype.setVisible = function (visible) {
  if (this.div_) {
    // The visibility property must be a string enclosed in quotes.
    if (visible) {
      this.div_.style.visibility = 'visible';
    } else {
      this.div_.style.visibility = 'hidden';
    }
  }
};

module.exports = LMarker;
