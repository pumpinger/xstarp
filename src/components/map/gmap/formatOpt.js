/**
 * Created by fizz on 2017/2/14.
 */

var LngLat = require('./lnglat');

module.exports = {
  map: function(opts) {

  },

  infoWindow: function (opts) {
    if(opts.position) {
      opts.position = new LngLat(opts.position);
    }
    return opts;
  },

  marker: function (opts) {

  }
};
