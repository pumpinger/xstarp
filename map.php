<?php
/**
 * Created by PhpStorm.
 * User: @van
 * Date: 2016/1/20
 * Time: 15:49
 */

include "layout_header.php";

?>

<style >
    .search{position: absolute;top: 10px;}
    .search input{height: 20px;margin-right: 10px;padding-left: 5px;vertical-align: bottom}
    .result {position: absolute;top: 10px;background: #eee;}
</style>

<div class="x-panel">
    <div class="x-panel-title">标签</div>
    <div class="x-panel-content">

        <p>示例：</p>

<pre><code class="language-html"><textarea>
           <div class="x-tab">
               <ul class="x-tab-nav">
                   <li class="x-tab-li "><a href="#">鼠标编辑</a></li>
                   <li class=""><a href="#">绘制圆，点，多边形</a></li>
                   <li class="  x-active"><a href="#">地理编码</a></li>
               </ul>
               <div class="x-tab-contents">
                   <div class="x-tab-content">
                       <div id="container"></div>
                       <span class="finishEdit x-button x-button-small x-button-cadetblue">结束编辑</span>
                       <span class="mouseTool x-button x-button-small x-button-cadetblue">开始画面</span>
                       <script>
                           var lngLat = [104.056435,30.671192];
                           $("#container").css({'width':'100%', 'height':'500px'});
                           var myMap = XMapSdk({
                               dom:'container',
                               resizeEnable:true,
                               center:lngLat,
                               zoom:13
                           },{
                               strokeColor: "#2e90df",
                               strokeOpacity: 1,
                               strokeWeight: 3,
                               strokeStyle:'solid',
                               fillColor: "#d2e8f5",
                               fillOpacity: 0.5,
                               extData:null
                           });


                           var circleOpt =  {
                               strokeColor: "#5F33FF",
                               strokeWeight: 3,
                               fillColor: "red",
                               fillOpacity: 0.35
                           };

                           var circle = myMap.circle([104.032292, 30.692353],3000,circleOpt);//单位  米


                           var polygonArr = new Array();//多边形覆盖物节点坐标数组
                           polygonArr.push([104.003322, 30.620255]);
                           polygonArr.push([104.010703, 30.697555]);
                           polygonArr.push([104.032292, 30.692353]);
                           polygonArr.push([104.089846, 30.691365]);
                           var polyPolygonOpt = {
                               strokeColor: "#FF33FF",
                               strokeOpacity: 1,
                               strokeWeight: 3,
                               fillColor: "#1791fc",
                               fillOpacity: 0.35
                           };
                           var polygon = myMap.polygon(polygonArr,polyPolygonOpt);

                           var circleEdit =   myMap.circleEditor(circle,function(){
                               console.log("circle ------ endCb");
                           },function(){
                               console.log("circle ------ adjust");
                           },function(){
                               console.log("circle ------ moveCb");
                           });


                           var polygonEdit =    myMap.polygonEdit(polygon,function(){
                               console.log('polygon ------ endCb');
                           });


                           $(".finishEdit").click(function(){
                               polygonEdit.close();
                               circleEdit.close();
                           });


                           $(".mouseTool").click(function(){
                               myMap.mouseTool('polygon',function(obj){
                                   console.log(obj);
                               },polyPolygonOpt);
                           });

                       </script>
                   </div>
                   <div class="x-tab-content" style="position: relative">
                       <div id="container1"></div>
                       <span class="polyCircle x-button x-button-small x-button-cadetblue">画圆</span>
                       <span class="drawMarker x-button x-button-small x-button-cadetblue">画点</span>
                       <span class="polyLine x-button x-button-small x-button-cadetblue">画线</span>
                       <span class="polygon x-button x-button-small x-button-cadetblue">画多边形</span>
                       <div class="search"><input type="text" class="searchTxt"  placeholder="请输入关键字"><span class="searchBtn x-button x-button-small x-button-cadetblue">搜索</span></div>
                       <div class="searchResult"></div>
                       <script>

                           $("#container1").css({'width':'100%', 'height':'500px'});
                           var myMap1 = XMapSdk({
                               dom:'container1',
                               resizeEnable:true,
                               center:lngLat,
                               zoom:13
                           },{
                               strokeColor: "#2e90df",
                               strokeOpacity: 1,
                               strokeWeight: 3,
                               strokeStyle:'solid',
                               fillColor: "#d2e8f5",
                               fillOpacity: 0.5,
                               extData:null
                           });

                           $(".drawMarker").click(function(){
                               var marker =  myMap1.marker(lngLat,'__PUBLIC__/images/marker_icon1.png',-15,-22,{
                                   content:'<div class="marker"><img src="img/marker_icon1.png"></div>'
                               });
                               marker.on('click',function(){
                                   infoWindow.open(myMap1.mapObj, marker.getPosition());
                               });

                               var content ='这是一个信息窗口';
                               var infoWindow = myMap1.infoWindow(content);//窗口

                           });
                           $(".polyLine").click(function(){
                               var polyLineArr = new Array();
                               polyLineArr.push([104.003322, 30.620255]);
                               polyLineArr.push([104.023322, 30.620255]);
                               polyLineArr.push([104.013322, 30.590255]);
                               var polyLineOpt =  {
                                   strokeColor: 'red', //线颜色
                                   strokeOpacity: 1, //线透明度
                                   strokeWeight: 3,    //线宽
                               };
                               var polyLine= myMap1.polyLine(polyLineArr,polyLineOpt);
                           });
                           $(".polyCircle").click(function(){
                               var circleOpt =  {
                                   strokeColor: "#5F33FF",
                                   strokeWeight: 3,
                                   fillColor: "red",
                                   fillOpacity: 0.35
                               };

                               var circle = myMap1.circle([104.032292, 30.692353],3000,circleOpt);//单位  米
                           });

                           $(".polygon").click(function(){
                               var polygonArr = new Array();//多边形覆盖物节点坐标数组
                               polygonArr.push([104.003322, 30.620255]);
                               polygonArr.push([104.010703, 30.697555]);
                               polygonArr.push([104.032292, 30.692353]);
                               polygonArr.push([104.089846, 30.691365]);
                               var polyPolygonOpt = {
                                   strokeColor: "#FF33FF",
                                   strokeOpacity: 1,
                                   strokeWeight: 3,
                                   fillColor: "#1791fc",
                                   fillOpacity: 0.35
                               };
                               var polygon = myMap1.polygon(polygonArr,polyPolygonOpt);
                           });

                           $(".searchBtn").click(function(){
                               var str = $('.searchTxt').val();
                               console.log(str);
                               myMap1.placeSearch(str,10,function(poiList){
                                   var html = '';
                                   for (var item in poiList){
                                       html +='<li>'+poiList[item].name+'</li>';
                                   }
                                   $(".searchResult").html(html);
                               });
                           });


                           myMap1.districtSearch('成都市','boundaries',function(isOk,data){
                               var opt = {
                                   strokeColor: "red",
                                   strokeOpacity: 0.8,
                                   strokeWeight: 3,
                               };
                               var polygon = myMap1.polygon(data['boundaries'],opt);
                           });

                       </script>
                   </div>
                   <div class="x-tab-content  x-active" style="position: relative">
                       <div id="container2"></div>
                       <span class="geoCoder x-button x-button-small x-button-cadetblue">地理编码</span>
                       <span class="unGeoCoder x-button x-button-small x-button-cadetblue">反地理编码</span>
                       <div class="result" >
                           <div class="geoCoderDesc"></div>
                           <div class="unGeoCoderDesc"></div>
                       </div>
                       <script>
                           $("#container2").css({'width':'100%', 'height':'500px'});
                           var myMap2 = XMapSdk({
                               dom:'container2',
                               resizeEnable:true,
                               center:lngLat,
                               zoom:13
                           },{
                               strokeColor: "#2e90df",
                               strokeOpacity: 1,
                               strokeWeight: 3,
                               strokeStyle:'solid',
                               fillColor: "#d2e8f5",
                               fillOpacity: 0.5,
                               extData:null
                           });


                           console.log(myMap2);

                           $(".unGeoCoder").click(function(){
                               var marker =  myMap2.marker(lngLat,'__PUBLIC__/images/marker_icon1.png',-15,-22,{
                                   content:'<div class="marker"><img src="img/marker_icon1.png"></div>'
                               });
                               console.log(marker.getPosition());
                               myMap2.unGeoCoder(marker.getPosition(),function(data){
                                   console.log(data);
                                   var html = '当前点坐标:'+marker.getPosition()+'&nbsp &nbsp&nbsp&nbsp&nbsp当前点的地址是：'+data;
                                   $(".unGeoCoderDesc").html(html)
                               });
                           });

                           $(".geoCoder").click(function(){

                               myMap2.geoCoder('成都市武侯区西部智谷D区',function(data){
                                   var html= '';
                                   for (var i = 0; i < data.length; i++) {
                                       //拼接输出html
                                       html += "<span style=\"font-size: 12px;padding:0px 0 4px 2px; border-bottom:1px solid #C1FFC1;\">" +
                                           "<b>地址</b>：" + data[i].formattedAddress + "" + "&nbsp;&nbsp;<b>的地理编码结果是:</b><b>&nbsp;&nbsp;&nbsp;&nbsp;坐标</b>：" +
                                           data[i].location.lng + data[i].location.lat + ", " ;
                                       var marker =  myMap2.marker([data[i].location.lng,data[i].location.lat],'__PUBLIC__/images/marker_icon1.png',-15,-22,{
                                           content:'<div class="marker"><img src="img/marker_icon1.png"></div>'
                                       });
                                   }

                                   $(".geoCoderDesc").html(html);

                                   console.log(data);
                               });
                           });

                       </script>
                   </div>

               </div>
           </div>
</textarea></code></pre>


        <p>效果:</p>
        <div class="x-tab">
            <ul class="x-tab-nav">
                <li class="x-tab-li x-active"><a href="#">鼠标编辑</a></li>
                <li class=""><a href="#">绘制圆，点，多边形</a></li>
                <li class="  "><a href="#">地理编码</a></li>
            </ul>
            <div class="x-tab-contents">
                <div class="x-tab-content  x-active">
                    <div id="container"></div>
                    <span class="finishEdit x-button x-button-small x-button-cadetblue">结束编辑</span>
                    <span class="mouseTool x-button x-button-small x-button-cadetblue">开始画面</span>

                </div>
                <div class="x-tab-content" style="position: relative">
                    <div id="container1"></div>
                    <span class="polyCircle x-button x-button-small x-button-cadetblue">画圆</span>
                    <span class="drawMarker x-button x-button-small x-button-cadetblue">画点</span>
                    <span class="polyLine x-button x-button-small x-button-cadetblue">画线</span>
                    <span class="polygon x-button x-button-small x-button-cadetblue">画多边形</span>
                    <div class="search"><input type="text" class="searchTxt"  placeholder="请输入关键字"><span class="searchBtn x-button x-button-small x-button-cadetblue">搜索</span></div>
                    <div class="searchResult"></div>

                </div>
                <div class="x-tab-content  " style="position: relative">
                    <div id="container2"></div>
                    <span class="geoCoder x-button x-button-small x-button-cadetblue">地理编码</span>
                    <span class="unGeoCoder x-button x-button-small x-button-cadetblue">反地理编码</span>
                    <div class="result" >
                        <div class="geoCoderDesc"></div>
                        <div class="unGeoCoderDesc"></div>
                    </div>
                </div>

            </div>
        </div>

        <p>规则:</p>

        <table class="x-table x-table-interval">
            <thead>
            <tr><th>属性</th><th>类型</th><th>说明</th><th>所属对象</th><th>默认值</th></tr></thead>
            <tbody>
            <tr>
                <td>dom</td>
                <td>String</td>
                <td>地图容器DIV的ID值或者DIV对象</td>
                <td>XMapSdk</td>
                <td></td>
            </tr>
            <tr>
                <td>resizeEnable</td>
                <td>Boolean</td>
                <td>是否监控地图容器尺寸变化</td>
                <td>XMapSdk</td>
                <td>false</td>
            </tr>

            <tr>
                <td>center</td>
                <td>LngLat</td>
                <td>地图中心点坐标值</td>
                <td>XMapSdk</td>
                <td>无</td>
            </tr>
            <tr>
                <td>zoom</td>
                <td>Number</td>
                <td>地图显示的缩放级别</td>
                <td>XMapSdk</td>
                <td>默认显示用户所在城市范围</td>
            </tr>
            <tr>
                <td>strokeColor</td>
                <td>String</td>
                <td>线条的颜色,使用16进制颜色代码赋值</td>
                <td>点标记、圆、多边形</td>
                <td>#2e90df</td>
            </tr>
            <tr>
                <td>strokeOpacity</td>
                <td>Number</td>
                <td>用于画圆和多边形的线的透明度</td>
                <td>点标记、圆、多边形</td>
                <td>1</td>
            </tr>
            <tr>
                <td>strokeWeight</td>
                <td>Number</td>
                <td>用于画圆和多边形的线的宽度</td>
                <td>点标记、圆、多边形</td>
                <td>3</td>
            </tr>
            <tr>
                <td>strokeStyle</td>
                <td>String</td>
                <td>用于画圆和多边形的线样式</td>
                <td>点标记、圆、多边形</td>
                <td>solid (solid,dashed)</td>
            </tr>
            <tr>
                <td>fillColor</td>
                <td>String</td>
                <td>用于填充圆和多边形的颜色，使用16进制颜色代码赋值</td>
                <td>点标记、圆、多边形</td>
                <td>#d2e8f5</td>
            </tr>
            <tr>
                <td>fillOpacity</td>
                <td>float</td>
                <td>填充色的透明度</td>
                <td>点标记、圆、多边形</td>
                <td>0.5 （0-1）</td>
            </tr>
            <tr>
                <td>zIndex</td>
                <td>Number</td>
                <td>用户自定义属性，支持JavaScript API任意数据类型</td>
                <td></td>
                <td>无</td>
            </tr>
            <tr>
                <td>extData</td>
                <td>Any</td>
                <td>地图上对象的叠加顺序，默认后添加的在上面</td>
                <td></td>
                <td>无</td>
            </tr>
            </tbody>
        </table>

        <table class="x-table x-table-interval">
            <thead>
            <tr><th>方法</th><th>返回值</th><th>参数</th><th>说明</th><th>所属对象</th><th>示例</th></tr></thead>
            <tbody>
            <tr>
                <td>on(type,function(){})</td>
                <td>无</td>
                <td>1、String:事件类型(如：click等),2、function:触发该事件后的操作函数</td>
                <td>为地图上的点标记或多边形或圆绑定事件</td>
                <td>点标记、圆、多边形</td>
                <td>marker.on('click',function(){})</td>

            </tr>
            <tr>
                <td>off(type)</td>
                <td>无</td>
                <td>1、String:事件类型(如：click等)</td>
                <td>移除地图上的点标记或多边形或圆的指定事件</td>
                <td>点标记、圆、多边形</td>
                <td>marker.off('click',function(){})</td>
            </tr>
            <tr>
                <td>getPosition()</td>
                <td>lngLat(坐标)</td>
                <td></td>
                <td>获取标记点的坐标</td>
                <td>点标记</td>
                <td>marker.getPosition()</td>
            </tr>
            <tr>
                <td>setPosition(lngLat)</td>
                <td></td>
                <td>1、lngLat:点坐标</td>
                <td>重新设置点的坐标位置</td>
                <td>点标记</td>
                <td>marker.setPosition(lngLat)</td>
            </tr>

            <tr>
                <td>polygon(Point,opt)</td>
                <td>多边形对象</td>
                <td>1、Array:二维数组,多边形的顶点坐标,2、object:多边形各项属性配置</td>
                <td>初始化polygon多边形的方法</td>
                <td>XMapSdk</td>
                <td>myMap.polygon(polygonArr,polyOpt)</td>
            </tr>
            <tr>
                <td>marker(lngLat,url,x,y)</td>
                <td>点标记对象</td>
                <td>1、lngLat:点标记坐标,2、String:自定义图标的URL，3、pixelX：点标记显示位置偏移量X，4、pixelY：点标记显示位置偏移量X,5、String:自定义点标记的内容</td>
                <td>初始化marker点标记的方法</td>
                <td>XMapSdk</td>
                <td> myMap.marker(lngLat,'img',-15,-22,{content:''})</td>
            </tr>
            <tr>
                <td>circle(lngLat,radius,opt)</td>
                <td>圆对象</td>
                <td>1、lngLat:圆心坐标,2、String:圆半径 单位：米，3、object：圆属性配置</td>
                <td>初始化圆的方法</td>
                <td>XMapSdk</td>
                <td>myMap.circle([104.032292, 30.692353],1000,circleOpt);</td>
            </tr>
            <tr>
                <td>circleEditor(circle,function(){},function(){},function(){})</td>
                <td>圆编辑对象</td>

                <td>1、Circle:圆对象,2、function:结束编辑后的回调函数，3、function：结束过程中触发的函数，4、圆心移动过程中触发的函数</td>
                <td>对圆进行编辑</td>
                <td>XMapSdk</td>
                <td>myMap.circleEditor(circle,function(){},function(){},function(){});</td>
            </tr>

            <tr>
                <td>polygonEdit(polygon,function(){})</td>
                <td>多边形编辑对象</td>

                <td>1、Polygon:多边形对象,2、function:结束编辑后的回调函数</td>
                <td>对多边形进行编辑</td>
                <td>XMapSdk</td>
                <td>myMap.circleEditor(polygon,function(){})</td>
            </tr>
            <tr>
                <td>close()</td>
                <td></td>
                <td>无</td>
                <td>关闭编辑</td>
                <td>编辑对象(多边形和圆)</td>
                <td>polygonEdit.close();</td>
            </tr>
            <tr>
                <td>placeSearch(str,function(poiList){})</td>
                <td></td>
                <td>1、String:搜索的关键字，2、function(poiList):搜索完成后的回调 poiList：搜索结果</td>
                <td>搜索</td>
                <td>XMapSdk</td>
                <td>myMap.placeSearch('成都市',function(poiList){})</td>
            </tr>
            <tr>
                <td>districtSearch(str,type,function(isOk,data){})</td>
                <td></td>
                <td>1、String:地名，2、String:搜索的类型(boundaries:返回所有数据,district：行政区域)，3、function(isOk,data):搜索完成后的回调 isOk:是否搜索成功 data：搜索结果</td>
                <td>行政区域搜索</td>
                <td>XMapSdk</td>
                <td>myMap.districtSearch('成都市','boundaries',function(isOk,data){});</td>
            </tr>

            <tr>
                <td>infoWindow(content)</td>
                <td>信息窗体对象</td>
                <td>1、String:信息窗体内容</td>
                <td>初始化信息窗体</td>
                <td>XMapSdk</td>
                <td>myMap.infoWindow(content);</td>
            </tr>
            <tr>
                <td>open(mapObj,lngLat)</td>
                <td></td>
                <td>1、Map:地图对象 2、lngLat:窗体中心坐标点</td>
                <td>打开信息窗体</td>
                <td>infoWindow</td>
                <td>infoWindow.open(myMap.mapObj, marker.getPosition());</td>
            </tr>
            <tr>
                <td>mouseTool(type,function(obj){},opt)</td>
                <td>mouseTool对象</td>
                <td>1、String:区分线，点，多边形(polyLine,marker,polygon,circle) 2、function(obj):进行完本次操作后的回调，其中obj为对象 3、option:圆或多边形或点标记的配置属性</td>
                <td>开始用鼠标在地图上画线或点或多边形</td>
                <td>XMapSdk</td>
                <td>myMap.mouseTool('polyLine',function(obj){},polyLineOpt);</td>
            </tr>
            <tr>
                <td>geoCoder(address,function(data){})</td>
                <td>无</td>
                <td>1、String:地址 2、function(data):地理编码后调用的函数，data 返回的数据</td>
                <td>传入地址进行地理编码(详细地址)</td>
                <td>XMapSdk</td>
                <td> myMap2.geoCoder('成都市武侯区西部智谷D区',function(data){})</td>
            </tr>
            <tr>
                <td>unGeoCoder(lngLat,function(data){})</td>
                <td>无</td>
                <td>1、String:点坐标 2、function(data):反地理编码后返回的数据，data 返回的数据 </td>
                <td>传入点坐标进行反地理编码</td>
                <td>XMapSdk</td>
                <td>myMap2.unGeoCoder(marker.getPosition(),function(data){ </td>
            </tr>
            <tr>
                <td>setOption(opt)</td>
                <td>无</td>
                <td>1、object:样式属性 </td>
                <td>设置多边形，圆，线的样式</td>
                <td>圆，线，多边形</td>
                <td>marker.setOption(opt)</td>
            </tr>
            <tr>
                <td>show()</td>
                <td>无</td>
                <td></td>
                <td>显示对象</td>
                <td>圆，线，多边形，点</td>
                <td>marker.show()</td>
            </tr>
            <tr>
                <td>hide()</td>
                <td>无</td>
                <td></td>
                <td>隐藏对象</td>
                <td>圆，线，多边形，点</td>
                <td>marker.hide()</td>
            </tr>


            </tbody>
        </table>
    </div>

</div>

<?php

include "layout_footer.php";
?>

<script  src="src/js/MapSDK.js"></script>
<!--<script type="text/javascript" src="http://cache.amap.com/lbs/static/addToolbar.js"></script>-->
<script>
    var lngLat = [104.056435,30.671192];
    $("#container").css({'width':'100%', 'height':'500px'});
    var myMap = XMapSdk({
        dom:'container',
        resizeEnable:true,
        center:lngLat,
        zoom:13
    },{
        strokeColor: "#2e90df",
        strokeOpacity: 1,
        strokeWeight: 3,
        strokeStyle:'solid',
        fillColor: "#d2e8f5",
        fillOpacity: 0.5,
        extData:null
    });


    var circleOpt =  {
        strokeColor: "#5F33FF", //线颜色
        strokeWeight: 3,    //线宽
        fillColor: "red", //填充色
        fillOpacity: 0.35//填充透明度
    };

    var circle = myMap.circle([104.032292, 30.692353],3000,circleOpt);//单位  米


    var polygonArr = new Array();//多边形覆盖物节点坐标数组
    polygonArr.push([104.003322, 30.620255]);
    polygonArr.push([104.010703, 30.697555]);
    polygonArr.push([104.032292, 30.692353]);
    polygonArr.push([104.089846, 30.691365]);
    var polyPolygonOpt = {
        strokeColor: "#FF33FF", //线颜色
        strokeOpacity: 1, //线透明度
        strokeWeight: 3,    //线宽
        fillColor: "#1791fc", //填充色
        fillOpacity: 0.35//填充透明度
    };
    var polygon = myMap.polygon(polygonArr,polyPolygonOpt);

    //编辑多边形
    var circleEdit =   myMap.circleEditor(circle,function(){
        console.log("circle ------ endCb");//结束的时候触发   close 函数
    },function(){
        console.log("circle ------ adjust");//编辑圆的过程中触发
    },function(){
        console.log("circle ------ moveCb");//拖拽圆心调整圆形位置时触发此事件
    });


    var polygonEdit =    myMap.polygonEdit(polygon,function(){
        console.log('polygon ------ endCb');//编辑结束的时候触发  close 函数
    });


    $(".finishEdit").click(function(){
        polygonEdit.close();
        circleEdit.close();
    });

    //划线
    $(".mouseTool").click(function(){
        myMap.mouseTool('polygon',function(obj){
            console.log(obj);
        },polyPolygonOpt);
    });










    $("#container1").css({'width':'100%', 'height':'500px'});
    var myMap1 = XMapSdk({
        dom:'container1',
        resizeEnable:true,
        center:lngLat,
        zoom:13
    },{
        strokeColor: "#2e90df",
        strokeOpacity: 1,
        strokeWeight: 3,
        strokeStyle:'solid',
        fillColor: "#d2e8f5",
        fillOpacity: 0.5,
        extData:null
    });

    $(".drawMarker").click(function(){
        var marker =  myMap1.marker(lngLat,'__PUBLIC__/images/marker_icon1.png',-15,-22,{
            content:'<div class="marker"><img src="img/marker_icon1.png"></div>'
        });
        marker.on('click',function(){
            infoWindow.open(myMap1.mapObj, marker.getPosition());
        });

        var content ='这是一个信息窗口';
        var infoWindow = myMap1.infoWindow(content);//窗口

    });
    $(".polyLine").click(function(){
        var polyLineArr = new Array();
        polyLineArr.push([104.003322, 30.620255]);
        polyLineArr.push([104.023322, 30.620255]);
        polyLineArr.push([104.013322, 30.590255]);
        var polyLineOpt =  {
            strokeColor: 'red', //线颜色
            strokeOpacity: 1, //线透明度
            strokeWeight: 3,    //线宽
        };
        var polyLine= myMap1.polyLine(polyLineArr,polyLineOpt);
    });
    $(".polyCircle").click(function(){
        var circleOpt =  {
            strokeColor: "#5F33FF", //线颜色
            strokeWeight: 3,    //线宽
            fillColor: "red", //填充色
            fillOpacity: 0.35//填充透明度
        };

        var circle = myMap1.circle([104.032292, 30.692353],3000,circleOpt);//单位  米
    });

    $(".polygon").click(function(){
        var polygonArr = new Array();//多边形覆盖物节点坐标数组
        polygonArr.push([104.003322, 30.620255]);
        polygonArr.push([104.010703, 30.697555]);
        polygonArr.push([104.032292, 30.692353]);
        polygonArr.push([104.089846, 30.691365]);
        var polyPolygonOpt = {
            strokeColor: "#FF33FF", //线颜色
            strokeOpacity: 1, //线透明度
            strokeWeight: 3,    //线宽
            fillColor: "#1791fc", //填充色
            fillOpacity: 0.35//填充透明度
        };
        var polygon = myMap1.polygon(polygonArr,polyPolygonOpt);
    });

    $(".searchBtn").click(function(){
        var str = $('.searchTxt').val();
        console.log(str);
        myMap1.placeSearch(str,10,function(poiList){
            var html = '';
            for (var item in poiList){
                html +='<li>'+poiList[item].name+'</li>';
            }
            $(".searchResult").html(html);
        });
    });


    //搜索    返回搜索结果  按地点搜索


    //搜索  搜行政区名称  返回行政区矩形数组
    myMap1.districtSearch('成都市','boundaries',function(isOk,data){
        var opt = {
            strokeColor: "red", //线颜色
            strokeOpacity: 0.8, //线透明度
            strokeWeight: 3,    //线宽
        };
        var polygon = myMap1.polygon(data['boundaries'],opt);
    });










    $("#container2").css({'width':'100%', 'height':'500px'});
    var myMap2 = XMapSdk({
        dom:'container2',
        resizeEnable:true,
        center:lngLat,
        zoom:13
    },{
        strokeColor: "#2e90df",
        strokeOpacity: 1,
        strokeWeight: 3,
        strokeStyle:'solid',
        fillColor: "#d2e8f5",
        fillOpacity: 0.5,
        extData:null
    });


    console.log(myMap2);

    $(".unGeoCoder").click(function(){
        var marker =  myMap2.marker(lngLat,'__PUBLIC__/images/marker_icon1.png',-15,-22,{
            content:'<div class="marker"><img src="img/marker_icon1.png"></div>'
        });
        console.log(marker.getPosition());
        myMap2.unGeoCoder(marker.getPosition(),function(data){
            console.log(data);
            var html = '当前点坐标:'+marker.getPosition()+'&nbsp &nbsp&nbsp&nbsp&nbsp当前点的地址是：'+data;
            $(".unGeoCoderDesc").html(html)
        });
    });

    $(".geoCoder").click(function(){

        myMap2.geoCoder('成都市武侯区西部智谷D区',function(data){
            var html= '';
            for (var i = 0; i < data.length; i++) {
                //拼接输出html
                html += "<span style=\"font-size: 12px;padding:0px 0 4px 2px; border-bottom:1px solid #C1FFC1;\">" +
                    "<b>地址</b>：" + data[i].formattedAddress + "" + "&nbsp;&nbsp;<b>的地理编码结果是:</b><b>&nbsp;&nbsp;&nbsp;&nbsp;坐标</b>：" +
                    data[i].location.lng + data[i].location.lat + ", " ;
                var marker =  myMap2.marker([data[i].location.lng,data[i].location.lat],'__PUBLIC__/images/marker_icon1.png',-15,-22,{
                    content:'<div class="marker"><img src="img/marker_icon1.png"></div>'
                });
            }

            $(".geoCoderDesc").html(html);

           console.log(data);
        });
    });





</script>

