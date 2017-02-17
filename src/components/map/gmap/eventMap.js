/**
 * Created by fizz on 2017/2/16.
 * @module 事件映射关系
 * 如果高德和google地图的同一个对象事件不同，则会写在后面。
 * 否则，不写映射关系
 */

module.exports = {
  Marker: {
    click: 'click',

  },

  InfoWindow: {
    change: 'content_changed',
    open: 'domready',
    chose: 'choseClick'
  },






};
