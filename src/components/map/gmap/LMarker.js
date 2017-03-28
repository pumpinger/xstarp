/**
 * Created by Administrator on 2017/3/27.
 */

LMarker = function(options) {
    // this.latlng = options.latlng;
    // this.labelText = options.labelText || '';
    // this.labelClass = options.labelClass || 'writeb';
    // this.labelOffset = options.labelOffset || new google.maps.Size(8, -33);
    // options.icon = options.icon || getTextIcon();
    google.maps.Marker.apply(this, arguments);
};

LMarker.prototype = new google.maps.Marker();
// LMarker.prototype.setMap = function(map) {
//     console.log('setMapsetMap');
//     google.maps.Marker.prototype.setMap.call(this, map);
//
// }
// LMarker.prototype.onAdd = function(map){
//     console.log('xxx');
//     google.maps.OverlayView.prototype.onAdd.call(this, this.map);
//
//     var label = document.createElement('div');
//     label.className = this.labelClass;
//     label.innerHTML = this.labelText;
//     label.style.position = 'absolute';
//     label.style.width = '48px';
//     map.getPane(G_MAP_MARKER_PANE).appendChild(label);
//     console.log('label',this);
//     console.log('label',label);
//     console.log('pane',map.getPane(G_MAP_MARKER_PANE));
//
//     this.map = map;
//     this.label = label;
// }

// LMarker.prototype.redraw = function(force){
//     google.maps.Marker.prototype.redraw.call(this, map);
//
//     if(!force)
//     {
//         return;
//     }
//
//     var point = this.map.fromLatLngToDivPixel(this.latlng);
//     var z = google.maps.Overlay.getZIndex(this.latlng.lat());
//
//     this.label.style.left = (point.x + this.labelOffset.width) + 'px';
//     this.label.style.top = (point.y + this.labelOffset.height) + 'px';
//     this.label.style.zIndex = z + 1;
// }
//
// LMarker.prototype.remove = function(){
//     this.label.parentNode.removeChild(this.label);
//     this.label = null;
//     google.maps.Marker.prototype.remove.call(this);
// }
//
// function getTextIcon()
// {
//     var icon = new google.maps.Icon();
//     icon.image = "/js/map/img/mapts.gif";
//     icon.iconSize = new GSize(48, 40);
//     icon.iconAnchor = new GPoint(0, 40);
//     icon.infoWindowAnchor = new GPoint(5, 1);
//     return icon;
// }

module.exports = LMarker;