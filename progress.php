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
    <div class="x-panel-title">进度条</div>
    <div class="x-panel-content">
        <p class="x-color-blue">示例：</p>
        <pre><code class="language-html"><textarea>
            <p>1、默认样式</p>
            <div class="x-progress" >
                <div class="x-progress-bar"></div>
            </div>
            <p>2、带提示标签</p>
            <div class="x-progress" >
                <div class="x-progress-bar"></div>
            </div>
            <p>3、带条纹效果</p>
            <div class="x-progress" >
                <div class="x-progress-bar"></div>
            </div>
            <p>4、条纹效果带动画</p>
            <div class="x-progress" >
                <div class="x-progress-bar"></div>
            </div>
            <p>4、多个进度条堆叠</p>
            <div class="x-progress" >
                <div class="x-progress-bar"></div>
                <div class="x-progress-bar"></div>
                <div class="x-progress-bar"></div>
                <div class="x-progress-bar"></div>
            </div>
            <script type="text/javascript" src="dest/lib/jquery-2.1.4.js"></script>
            <script type="text/javascript" src="src/js/progress.js"></script>
        </textarea></code></pre>

        <p class="x-color-blue">效果:</p>
        <p>1、默认样式</p>
        <div class="x-progress-wrap x-progress-1" >
        </div>
        <p>2、带提示标签</p>
        <div class="x-progress-wrap" >
        </div>
        <p>3、带条纹效果</p>
        <div class="x-progress-wrap" >
        </div>
        <p>4、条纹效果带动画</p>
        <div class="x-progress-wrap" >
        </div>
        <p>4、多个进度条堆叠</p>
        <div class="x-progress-wrap" >
        </div>

        <p class="x-color-blue">规则:</p>
    </div>
</div>

<script type="text/javascript" src="dest/lib/jquery-2.1.4.js"></script>
<script type="text/javascript" src="src/js/progress.js"></script>

<script>
    var opt1 = {
        wrap: '.x-progress-1',
        pclass: 'x-progress-bar x-progress-bar-striped x-progress-bar-animated',
        width:'1%',
        duration:1000
    };
    var xP1 = xProgress(opt1);
    //    var temp = 10;
    //    var step = 10;
    //    function pp() {
    //        temp = temp + step;
    //        xP1.opt.width = temp + '%';
    //        console.log('xP1.opt.width',xP1.opt.width,xP1);
    //    }
    //    var ss = setInterval(pp,500);
    //    if(temp >= 100){
    //        console.log(temp,'clear');
    //        clearInterval(ss);
    //    }

    //    var opt2 = {
    //        wrap: '.x-progress-time-driven',
    //        pstyle: 'x-progress-bar-striped',
    //        width:'50%',
    //        duration:1000
    //    };
    //    var xP2 = xProgress(opt2);
</script>

<?php
include "layout_footer.php";
?>
