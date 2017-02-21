
# AMap

## mapObj
> 说明  map对象
````html
<div id="map"> </div>
````
````js
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
    );
````

>说明 画圆 circle

````js
    var circleOpt =  {
                               strokeColor: "#5F33FF",
                               strokeWeight: 3,
                               fillColor: "red",
                               fillOpacity: 0.35
                           };

    var circle = myMap.circle([104.032292, 30.692353],3000,circleOpt);//单位  米

````
>画多边形  polygon

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

>编辑多边形和圆
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

>infoWindow信息窗口


