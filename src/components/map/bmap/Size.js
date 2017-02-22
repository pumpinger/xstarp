/**
 * Created by fizz on 2017/2/15.
 */

/**
 * @constructor
 * @param {Number} width
 * @param {Number} height
 * */
function Size(width, height, inner) {
  if(inner) {
    this._inner = inner;
  } else {
    this._inner = new BMap.Size();
  }

  this._type = 'Size';
  return this;
}

Size.prototype = {
  getWidth: function() {
    return this._inner.width;
  },
  getHeight: function() {
    return this._inner.height;
  },
  toString: function() {
    return this._inner.toString();
  }
};




module.exports = Size;
