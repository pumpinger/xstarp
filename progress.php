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
        <p>示例：</p>
        <pre><code class="language-html"><textarea>
            <script type="text/javascript" src="src/js/progress.js"></script>
        </textarea></code></pre>

        <p>效果:</p>
        <div id="x-progress-time-driven" >
            <span class=""></span>
        </div>

        <!--<div id="x-progress-data-driven">-->
        <!--    <span class=""></span>-->
        <!--</div>-->
        <p>规则:</p>
    </div>
</div>

<script type="text/javascript" src="dest/lib/jquery-2.1.4.js"></script>
<script type="text/javascript" src="src/js/progress.js"></script>

<script>
    var opt = {
        dom: $('#x-progress-time-driven'),
        style: {
            begin:{},
            end:{
                width:'100%'
            }
        }
    };
    xProgress(opt);
</script>

<?php
include "layout_footer.php";
?>
