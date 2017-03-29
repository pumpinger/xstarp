/**
 * Created by Administrator on 2017/3/23.
 */

function Bmarker(opt) {
    opt.icon = new BMap.Icon(opt.icon, new BMap.Size(36, 36));//opt.icon由String转换为BMap.Icon类型，大小36*36
    opt.offset = new BMap.Size(opt.offset.x, opt.offset.y);//opt.offset由BMap.Pixel转换为BMap.Size类型
    this.content = opt.content;
    BMap.Marker.call(this, opt.position, opt);//继承BMap.Marker属性
    var that = this;
    this.setMap = function (map) {
        map.addOverlay(this);
        if (opt.content) {
            setTimeout(function () {
                $(that.xc).css({'z-index':opt.zIndex});
                var div = $(that.xc).find('>div');
                div.html(opt.content);
                div.css({'background': '#178', 'font-size': '12px'});
            }, 0)
        }
    }
}
Bmarker.prototype = new BMap.Marker();//继承BMap.Marker方法

module.exports = Bmarker;
