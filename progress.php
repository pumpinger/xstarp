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
            <script type="text/javascript" src="src/js/progress.js"></script>
        </textarea></code></pre>

        <p class="x-color-blue">效果:</p>
        <div class="">1、时间驱动型</div>
        <div id="x-progress-time-driven" >
        </div>

        <div class="">2、数据驱动型</div>
        <div id="x-progress-data-driven" >
        </div>

        <!--<div id="x-progress-data-driven">-->
        <!--    <span class=""></span>-->
        <!--</div>-->
        <p class="x-color-blue">规则:</p>
    </div>
</div>

<script type="text/javascript" src="dest/lib/jquery-2.1.4.js"></script>
<script type="text/javascript" src="src/js/progress.js"></script>

<script>
    var opt1 = {
        dom: '#x-progress-time-driven',
        type: 1,
        style: {
            begin:'30%',
            b:'60%',
            c:'90%',
            end:'100%'
        }
    };
    var xP1 = xProgress(opt1);

    var opt2 = {
        dom: '#x-progress-data-driven',
        type: 2,
        style: {
            begin:'30%',
            b:'60%',
            c:'90%',
            end:'100%'
        }
    };
    var xP2 = xProgress(opt2);

</script>

<?php
include "layout_footer.php";
?>
