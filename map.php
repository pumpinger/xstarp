<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"/>
    <meta charset="UTF-8">
    <title>title</title>
    <link rel="stylesheet" href="./css/init.css"/>
    <script type="text/javascript" src="./lib/jquery-2.1.4.js"></script>
    <script type="text/javascript" src="http://webapi.amap.com/maps?v=1.3&key=您申请的key值&plugin=AMap.Driving"></script>
    <style>
        #container {width: 100%;height: 500px;}

    </style>
</head>
<body>
<header>
    Xstarp
</header>
<article>
    <section>
        <div id="container"></div>
        <div id="panel"></div>
    </section>
</article>
<script type="text/javascript">
    //基本地图加载
    var map = new AMap.Map("container", {
        resizeEnable: true,
        center: [116.397428, 39.90923],//地图中心点
        zoom: 13 //地图显示的缩放级别
    });
    //构造路线导航类
    AMap.service(["AMap.Driving"], function() {
        var driving = new AMap.Driving({
            policy: AMap.DrivingPolicy.REAL_TRAFFIC,
            map: map,
            panel: "panel"
        });
        // 根据起终点经纬度规划驾车导航路线
        driving.search(new AMap.LngLat(104.065955, 30.656409), new AMap.LngLat(104.088593, 30.679775));
    });
</script>
</body>
</html>
