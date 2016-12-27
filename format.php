<?php
/**
 * Created by PhpStorm.
 * User: @van
 * Date: 2016/1/20
 * Time: 15:49
 */

include "layout_header.php";
?>



<div class="x-panel">
    <div class="x-panel-title">格式化</div>
    <div class="x-panel-content">

        <p>示例：</p>

<pre><code class="language-html"><textarea>
        console.log(     xFormat.str2time('2016-06-06 11:11:11')   );
        console.log(     xFormat.str2time('2016-06-06')   );
        console.log(     xFormat.str2time('16/06/06 11:11')   );
        console.log(     xFormat.str2time('20160606')   );
        console.log(     xFormat.str2time('160606')   );
        console.log(     xFormat.str2time('11:11')   );

        console.log(     xFormat.time2str(1465182671)   );

        console.log(     xFormat.number2money(1231234.123)   );

</textarea></code></pre>


        <p>效果:</p>

        <p>1465182671</p>
        <p>1465142400</p>
        <p>1465182660</p>
        <p>1465142400</p>
        <p>1465142400</p>
        <p>1465182660</p>
        <br>
        <p>2016-06-06 11:11:11</p>
        <br>
        <p>1,231,234.1</p>

        <p>规则:</p>
    </div>




<script>




    console.log(     xFormat.str2time('2016-06-06 11:11:11')   );
    console.log(     xFormat.str2time('2016-06-06')   );
    console.log(     xFormat.str2time('16/06/06 11:11')   );
    console.log(     xFormat.str2time('20160606')   );
    console.log(     xFormat.str2time('160606')   );
    console.log(     xFormat.str2time('11:11')   );

    console.log(     xFormat.time2str(1465182671)   );

    console.log(     xFormat.number2money(1231234.123)   );




//    var myDate = new Date();//当前时间
//    var year = myDate.getFullYear();//当前年份
//    var month = myDate.getMonth() + 1;//当前月份
//    var oneDay = 1000 * 60 * 60 * 24;
//    //获取最近一周的日期1
//    var lastDate = new Date(myDate - oneDay * 6);
//    var lastYear = lastDate.getFullYear();
//    var lastMonth = lastDate.getMonth() + 1;
//    var lastDay = lastDate.getDate();
//    //获取当前月的最后一天
//    var day = new Date(year ,month , 0);
//    var lastdate = day.getDate();//当前月的最后一天
//    //获取最近N个月的日期
//    var lastDate = new Date(myDate - oneDay * myDate.getDate());
//    lastDate = new Date(lastDate - N * oneDay * (lastDate.getDate() - 1));
//    var lastYear = lastDate.getFullYear();
//    var lastMonth = lastDate.getMonth() + 1;
//    var lastDay = lastDate.getDate();



</script>


<?php

include "layout_footer.php";
?>
