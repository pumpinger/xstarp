/**
 * Created by fizz on 2017/2/17.
 */

module.exports = {
  setMap: function(map) {
    if(map !== null) {
      this._inner._smap = map;
      map._inner._overLayers[this._type].push(this);
    }
    this._inner.setMap(map._inner);
  },

  getMap: function() {
    return this._inner._smap;
  },

  hide: function() {
    this._inner.setVisiable(false);
  },

  show: function() {
    this._inner.setVisiable(true);
  }
};
