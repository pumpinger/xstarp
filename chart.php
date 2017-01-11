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
    <script type="text/javascript" src="src/js/xEchart.js"></script>

    <div class="x-panel">
        <div class="x-panel-title">图表：</div>
        <div class="x-panel-content">

            <p>示例：</p>

            <pre><code class="language-html"><textarea>
    <div id="box" style="width:49%;height: 400px;display: inline-block"></div>
    <div id="box2" style="width:49%;height: 400px;display: inline-block"></div>
    <div id="box3" style="width:49%;height: 400px;display: inline-block"></div>
    <div id="box4" style="width:49%;height: 400px;display: inline-block"></div>
    <script>

    barChart({
        conId:'box',
        title:'标题',
        xArray:['星期一星期', '星期二星期', '星期三星星期', '星期四星星期'],
        colorArray:['#3398DB','#61a0a8'],
        legendOrient:'horizontal',
        legendArray:['利润','支出','收入'],
        textrotate:30,
        xTextStyle:{color: function (val) {
            if (val == '星期一星期') {
                return "blue";
            } else {
                return "black";
            }
        },fontSize:14},
        dataArray:[
            {data:[200, 170, 240, 244]},
            {data:[320, 302, 341, 374]}
        ],
        fn:function (param) {
            alert(param.value);
        }
    });

    cirChart({
        conId:'box3',
        title:'饼图',
        seriesType:'pie',
        radius: ['50%', '70%'],
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
        dataArray:[
            {data:[11, 11, 15, 13, 12, 13, 10]},
            {data:[1, -2, 2, 5, 3, 2, 0]}
        ]
    })
</script>
</textarea></code></pre>


            <p>效果:</p>
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
                    textrotate:30, //文本旋转度数
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
                        {data:[320, 302, 341, 374]}
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
                    dataArray:[
                        {data:[11, 11, 15, 13, 12, 13, 10]},
                        {data:[1, -2, 2, 5, 3, 2, 0]}
                    ]
                })
            </script>


            <p>规则:</p>

            <p>1、柱状图调用barChart函数、饼图调用cirChart函数、折线图调用linesChart函数</p>
            <p>2、函数的参数options</p>
            <p>3.下图表格中类型一列没有值的都为字符串类型</p>


            <table class="x-table x-table-interval">

                <thead align="center">
                <tr>
                    <th>共有参数</th>
                    <th>类型</th>
                    <th>说明</th>
                    <th>值</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>conId</td>
                    <td></td>
                    <td>divId</td>
                    <td></td>
                </tr>
                <tr>
                    <td>title</td>
                    <td></td>
                    <td>图形标题</td>
                    <td>标题</td>
                </tr>
                <tr>
                    <td>titleAlign</td>
                    <td></td>
                    <td>标题位置</td>
                    <td>center</td>
                </tr>
                <tr>
                    <td>isLegend</td>
                    <td>Boolean</td>
                    <td>是否显示图例</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>legendOrient</td>
                    <td></td>
                    <td>图例排列方式</td>
                    <td>horizontal(横向),vertical（纵向），默认纵向排列</td>
                </tr>
                <tr>
                    <td>legendAlignx</td>
                    <td></td>
                    <td>图例X轴显示位置</td>
                    <td>left,像素值</td>
                </tr>
                <tr>
                    <td>legendAligny</td>
                    <td></td>
                    <td>图例的Y轴显示位置</td>
                    <td>top，像素值</td>
                </tr>
                <tr>
                    <td>legendArray</td>
                    <td>Array</td>
                    <td>图例数据</td>
                    <td></td>
                </tr>
                <tr>
                    <td>colorArray</td>
                    <td>Array</td>
                    <td>颜色数组</td>
                    <td></td>
                </tr>
                </tbody>

                <thead align="center">
                <tr>
                    <th>柱状图属性（折线图）</th>
                    <th>类型</th>
                    <th>说明</th>
                    <th>示例</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>xArray</td>
                    <td>Array</td>
                    <td>X轴数据</td>
                    <td></td>
                </tr>
                <tr>
                    <td>dataArray</td>
                    <td>Array</td>
                    <td>数据数组</td>
                    <td> dataArray:[
                        {data:[200, 170, 240, 244]},
                        {data:[210, 202, 441, 274]}
                        ]</td>
                </tr>
                <tr>
                    <td>barwidth</td>
                    <td></td>
                    <td>柱子宽度</td>
                    <td></td>
                </tr>
                <tr>
                    <td>tooltipType</td>
                    <td></td>
                    <td>坐标指示器类型</td>
                    <td>默认line,可选shadow</td>
                </tr>
                <tr>
                    <td>textrotate</td>
                    <td>Number</td>
                    <td>X轴旋转度数</td>
                    <td>30，折线图通用</td>
                </tr>
                <tr>
                    <td>yaxisType</td>
                    <td></td>
                    <td>Y轴坐标轴线默认一条</td>
                    <td>两条设置方法：{type:'value'},{type:'value'},折线图通用</td>
                </tr>
                <tr>
                    <td>xTextStyle</td>
                    <td></td>
                    <td>X轴文本样式</td>
                    <td>{color:'',fontSize:''},折线图通用</td>
                </tr>
                <tr>
                    <td>serLabelText</td>
                    <td>Boolean</td>
                    <td>柱子文本标签是否显示</td>
                    <td></td>
                </tr>
                <tr>
                    <td>serTextPos</td>
                    <td></td>
                    <td>柱子文本标签的显示位置</td>
                    <td>值分别有：top，left，right，bottom，inside，insideTop等等</td>
                </tr>
                <tr>
                    <td>fn</td>
                    <td>Function</td>
                    <td>点击柱子的执行方法</td>
                    <td></td>
                </tr>
                </tbody>

                <thead align="center">
                <tr>
                    <th>饼图属性</th>
                    <th>类型</th>
                    <th>说明</th>
                    <th>示例</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>seriesLabel</td>
                    <td>Boolean</td>
                    <td>文字标签是否显示</td>
                    <td></td>
                </tr>
                <tr>
                    <td>radius</td>
                    <td></td>
                    <td>饼图大小</td>
                    <td>60%, 环形图：['50%', '70%']</td>
                </tr>
                <tr>
                    <td>dataArray</td>
                    <td></td>
                    <td>数据数组</td>
                    <td>dataArray:[
                        {value:335},
                        {value:310},
                        {value:234},
                        {value:135},
                        {value:1548}
                        ]</td>
                </tr>

                </tbody>

            </table>


        </div>
    </div>



<?php

include "layout_footer.php";
?>