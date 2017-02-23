
# AMap

## 简介

这里是单独的高德地图api   我们需要引入 mapSdk.js文件 和高德api的链接

````html
 <script src="http://webapi.amap.com/maps?v=1.3&key=a3b3d16e95cfd8d858300d093f839c5f"></script>

    <script src="../../../dist/xstarp.js"></script>
````

## mapObj对象

> map对象

````html

<div id="map"> </div>

````

````js

  var lngLat = [104.056435,30.671192];
   var myMap = XMapSdk(
            {
                dom:'popMap',
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
            }
    )
    console.log(myMap);
    

````

## 绘制点 线 圆 多边形


>infoWindow信息窗口

````js

var lngLat = [104.056435,30.671192];
   var myMap = XMapSdk(
            {
                dom:'popMap',
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
            }
    )
  var marker =  myMap.marker(lngLat,'__PUBLIC__/images/marker_icon1.png',-15,-22,{
            content:'<div class="marker"><img src="img/marker_icon1.png"></div>'
        });
   marker.on('click',function(){
            infoWindow.open(myMap.mapObj, marker.getPosition());
        });

   var content ='这是一个信息窗口';
   var infoWindow = myMap.infoWindow(content);

````

>点聚合

````js

  var stsUser = [{
            url: 'http://a.amap.com/lbs/static/img/2.png',
            size: new AMap.Size(32, 32),
            offset: new AMap.Pixel(-16, -30),
            imageOffset: new AMap.Pixel(0, 0),
            textColor: "#fff",
            textSize: 18
        }];
  var cluster = myMap.cluster(stsUser,markers);

````

> 画线

````js
var polyLineArr = new Array();
        polyLineArr.push([104.003322, 30.620255]);
        polyLineArr.push([104.023322, 30.620255]);
        polyLineArr.push([104.013322, 30.590255]);
        var polyLineOpt =  {
            strokeColor: 'red', //线颜色
            strokeOpacity: 1, //线透明度
            strokeWeight: 3,    //线宽
        };
        var polyLine= myMap.polyLine(polyLineArr,polyLineOpt);
````



> 画圆 circle

````js
    var circleOpt =  {
                               strokeColor: "#5F33FF",
                               strokeWeight: 3,
                               fillColor: "red",
                               fillOpacity: 0.35
                           };

    var circle = myMap.circle([104.032292, 30.692353],3000,circleOpt);//单位  米

````

> 画多边形  polygon

````js
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

````


## 鼠标编辑多边形和圆

> 编辑多边形和圆

````js
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

````

## 搜索

> 按字符串搜索

````js
myMap.placeSearch('成都',10,function(poiList){
            var html = '';
            console.log(poiList);
            for (var item in poiList){
                html +='<li>'+poiList[item].name+'</li>';
            }
            $(".searchResult").html(html);
        });
````



> 搜索行政区名称  返回行政区多边形点数组

````js

 //搜索  搜行政区名称  返回行政区矩形数组
    myMap.districtSearch('成都市','boundaries',function(isOk,data){
        var opt = {
            strokeColor: "red", //线颜色
            strokeOpacity: 0.8, //线透明度
            strokeWeight: 3,    //线宽
        };
        var polygon = myMap1.polygon(data['boundaries'],opt);
    });
````

## 地理编码，反地理编码

> 地理编码  传入地址返回  坐标

````js

myMap.geoCoder('成都市武侯区西部智谷D区',function(data){
            var html= '';
            for (var i = 0; i < data.length; i++) {
                //拼接输出html
                html += "<span style=\"font-size: 12px;padding:0px 0 4px 2px; border-bottom:1px solid #C1FFC1;\">" +
                    "<b>地址</b>：" + data[i].formattedAddress + "" + "&nbsp;&nbsp;<b>的地理编码结果是:</b><b>&nbsp;&nbsp;&nbsp;&nbsp;坐标</b>：" +
                    data[i].location.lng + data[i].location.lat + ", " ;
                var marker =  myMap.marker([data[i].location.lng,data[i].location.lat],'__PUBLIC__/images/marker_icon1.png',-15,-22,{
                    content:'<div class="marker"><img src="img/marker_icon1.png"></div>'
                });
            }

            $(".geoCoderDesc").html(html);
        });

````

> 反地理编码

````js

  myMap.unGeoCoder(marker.getPosition(),function(data){
            console.log(data);
            var html = '当前点坐标:'+marker.getPosition()+'&nbsp &nbsp&nbsp&nbsp&nbsp当前点的地址是：'+data;
            $(".unGeoCoderDesc").html(html)
        });
````

## 弹出地图

>点击弹出地图  选择某个点后 返回


````html

 <div class="address x-mapPopButton x-button  x-button-cadetblue">点击弹出地图窗口</div>
                       <div class="x-popMap" style="">
                           <div id="popMap" class=""></div>
                           <div class="x-popMap-option"><span class="x-popMap-ok x-button ">确定</span><span class="x-button   x-popMap-cancel">关闭</span></div>
                       </div>
````
````js
 var lngLat = [104.056435,30.671192];
                           $("#popMap").css({'width':'800px', 'height':'500px'});
                           var myMap3 = XMapSdk(
                               {
                                   dom:'popMap',
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
                               }
                           );
                           $(".address").click(function(){
                               var data = Array();
                               for (var i = 0; i < 4; i++) {
                                   var lng = 104.056435 + i*0.01;
                                   var lat = 30.671192-i*0.02;
                                   var item ={
                                       lng:lng,
                                       lat:lat,
                                       extData:{
                                           address:'成都市武侯区西部智谷',
                                           name:'烧烤店',
                                           id:i
                                       },
                                       defImg:'img/marker_icon1.png',//marker点图标url  不传有默认
                                       selectImg:'img/marker_select.png',//marker选中后的图标
                                   };
                                   data.push(item);
                               }
                               myMap3.popMap(data,function(data){
                                   console.log("当前选中点的的数据");
                                   console.log(data);
                               },function(data1){
                                   console.log("你所点击的位置");
                                   console.log(data1);
                               });
                           });
````


## 上大屏模式