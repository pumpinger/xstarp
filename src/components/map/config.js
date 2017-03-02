/**
 * Created by fizz on 2017/2/15.
 * @config for SMap.
 * @target 引用一个SMap.js 将会自动帮你加载地图API
 */

module.exports = {

  // 谷歌地图API的url和key
  GMap_key: 'AIzaSyCjPUco3l_6-f8ZexAesZrYFzpGtRQHvSo',
  GMap_url: 'https://maps.googleapis.com/maps/api/js?key=',

  // 高德地图API的url和key
  AMap_key: '319766fcdf57589d1da6e0dfc89770d2',
  AMap_url: 'http://webapi.amap.com/maps?v=1.3&key=',

  // 百度地图API的url和key
  DMap_key: 'h733PD7WQgKZYRotiD19oK0w0y6sz0QC',
  DMap_url: 'http://api.map.baidu.com/api?v=2.0&ak=',

  /**********************************百度插件地址***********************************/

  DMap_MarkerClusterer: 'http://192.168.60.206:9000/src/components/map/bmap/lib/markerclusterer.js',
  DMap_TextIconOverlay: 'http://192.168.60.206:9000/src/components/map/bmap/lib/TextIconOverlay.js',
  DMap_AreaRestriction: 'http://192.168.60.206:9000/src/components/map/bmap/lib/AreaRestriction.js'

  /**********************************谷歌插件地址***********************************/

};
