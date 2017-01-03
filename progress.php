<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/12/29
 * Time: 16:09
 */
include "layout_header.php";
?>


<div class="x-panel">
    <div class="x-panel-title">标签</div>
    <div class="x-panel-content">
        <p class="x-color-blue">示例：</p>
        <pre><code class="language-html"><textarea>
            <div class="x-progress-wrap x-progress-time-driven" >
                1、时间驱动型
            </div>
            <div class="x-progress-wrap x-progress-data-driven" >
                2、数据驱动型
            </div>
            <script type="text/javascript" src="src/js/progress.js"></script>
        </textarea></code></pre>

        <p class="x-color-blue">效果:</p>
        <div class="x-progress-wrap x-progress-time-driven" >
            1、时间驱动型
        </div>

        <div class="x-progress-wrap x-progress-data-driven" >
            2、数据驱动型
        </div>

        <p class="x-color-blue">规则:</p>
    </div>
</div>

<script type="text/javascript" src="dest/lib/jquery-2.1.4.js"></script>
<script type="text/javascript" src="src/js/progress.js"></script>

<script>
    var opt1 = {
        wrap: '.x-progress-data-driven',
        pid: 1,
        type:1,
        width:'10%',
        duration:2000
    };
    var xP1 = xProgress(opt1);
    var temp = 10;
    var step = 10;
    function pp() {
        temp = temp + step;
        xP1.opt.width = temp + '%';
        console.log(xP1.opt.width);
    }
    var ss = setInterval(pp,1000);
    if(temp > 100){
        clearInterval(ss);
    }

//    var opt2 = {
//        wrap: '.x-progress-time-driven',
//        pid: 2,
//        type:2,
//        style:[{width:'10%'},{width:'100%'},{visibility:'hidden'}],
//        duration:['5000']
//    };
//    var xP2 = xProgress(opt2);

</script>

<?php
include "layout_footer.php";
?>
