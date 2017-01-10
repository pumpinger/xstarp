<?php
/**
 * Created by PhpStorm.
 * User: @van
 * Date: 2016/1/20
 * Time: 15:49
 */

include "layout_header.php";

?>

    <script type="text/javascript" src="src/js/echarts.js"></script>
    <script type="text/javascript" src="src/js/xEchart.js?1"></script>

    <div id="box" style="width:49%;height: 400px;display: inline-block"></div>
    <div id="box2" style="width:49%;height: 400px;display: inline-block"></div>
    <div id="box3" style="width:49%;height: 400px;display: inline-block"></div>
    <div id="box4" style="width:49%;height: 400px;display: inline-block"></div>

<script>
    barChart({
        conId:'box', //divid
        title:'标题', //标题
        xArray:['星期一星期', '星期二星期', '星期三星星期', '星期四星星期'],  //X轴
        colorArray:['#3398DB','#61a0a8'], //颜色
        legendOrient:'horizontal', //图例排列方式
        legendArray:['利润','支出','收入'],
//        textrotate:45, //文本旋转度数
//        yaxisType:[{type:'value'},{type:'value'}],  //两个参数Y轴有两个坐标轴
        xTextStyle:{color: function (val) {
            if (val == '星期一星期') {
                return "blue";
            } else {
                return "black";
            }
        },fontSize:14},  //X轴文字样式
        dataArray:[
            {data:[200, 170, 240, 244]},
            {data:[320, 302, 341, 374]},
            {data:[210, 202, 441, 274]}
        ],
        fn:function (param) {
            alert(param.value);
        }
    });

    cirChart({
        conId:'box3',
        title:'饼图',
        seriesType:'pie',
        radius: ['50%', '70%'], //环形图
        legendArray:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
        dataArray:[
            {value:335},
            {value:310},
            {value:234},
            {value:135},
            {value:1548}
        ]
    });

    cirChart({
        conId:'box2',
        title:'饼图',
        seriesType:'pie',
        legendArray:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
        dataArray:[
            {value:335},
            {value:310},
            {value:234},
            {value:135},
            {value:1548}
        ]
    });

    linesChart({
        conId:'box4',
        title:'折线图',
        legendArray:['最高气温','最低气温'],
        xArray:['周一','周二','周三','周四','周五','周六','周日'],
        textrotate:30,  //X轴文字倾斜度数
        dataArray:[
            {data:[11, 11, 15, 13, 12, 13, 10]},
            {data:[1, -2, 2, 5, 3, 2, 0]}
        ]
    })
</script>

<?php

include "layout_footer.php";
?>