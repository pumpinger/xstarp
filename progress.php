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
            <div class="x-progress-wrap x-progress-1" ></div>

            <p>2、带进度提示</p>
            <div class="x-progress-wrap x-progress-2" ></div>

            <p>3、带条纹效果</p>
            <div class="x-progress-wrap x-progress-3" ></div>

            <p>4、条纹效果带动画</p>
            <div class="x-progress-wrap x-progress-4" ></div>

            <p>5、多个进度条堆叠</p>
            <div class="x-progress-wrap x-progress-5" ></div>

            <script type="text/javascript" src="dest/lib/jquery-2.1.4.js"></script>
            <script type="text/javascript" src="src/js/progress.js"></script>
            <script>
                //基础样式
                var xP1 = xProgress({
                    wrap: '.x-progress-1',
                    percentage:'10%',
                    onchange:function () {console.log('xP1',xP1.percentage);}
                });

                //带进度提示
                var xP2 = xProgress({
                    wrap: '.x-progress-2',
                    pclass: 'x-progress-bar x-progress-bar-green',
                    tclass: 'x-progress-text',
                    percentage:'20%',
                    onchange:function () {console.log('xP2',xP2.percentage);}
                });

                //带条纹效果
                var xP3 = xProgress({
                    wrap: '.x-progress-3',
                    pclass: 'x-progress-bar x-progress-bar-red x-progress-bar-striped',
                    percentage:'30%',
                    onchange:function () {console.log('xP3',xP3.percentage);}
                });

                //条纹效果带动画
                var xP4 = xProgress({
                    wrap: '.x-progress-4',
                    pclass: 'x-progress-bar x-progress-bar-yellow x-progress-bar-striped x-progress-bar-animated',
                    percentage:'40%',
                    onchange:function () {console.log('xP4',xP4.percentage);}
                });

                //多个进度条堆叠
                var xP5 = xProgress({
                    wrap: '.x-progress-5',
                    pclass: 'x-progress-bar x-progress-bar-red',
                    percentage:'10%',
                    onchange:function () {console.log('xP5',xP5.percentage);}
                });

                var xP6 = xProgress({
                    wrap: '.x-progress-5',
                    pclass: 'x-progress-bar x-progress-bar-green',
                    tclass: 'x-progress-text',
                    percentage:'20%',
                    onchange:function () {console.log('xP6',xP6.percentage);}
                });

                var xP7 = xProgress({
                    wrap: '.x-progress-5',
                    pclass: 'x-progress-bar x-progress-bar-blue x-progress-bar-striped',
                    tclass: 'x-progress-text',
                    percentage:'20%',
                    onchange:function () {console.log('xP7',xP7.percentage);}
                });

                var xP8 = xProgress({
                    wrap: '.x-progress-5',
                    pclass: 'x-progress-bar x-progress-bar-yellow x-progress-bar-striped x-progress-bar-animated',
                    tclass: 'x-progress-text',
                    percentage:'10%',
                    onchange:function () {console.log('xP8',xP8.percentage);}
                });
            </script>
        </textarea></code></pre>

        <p class="x-color-blue">效果:</p>
        <p>1、默认样式</p>
        <div class="x-progress-wrap x-progress-1" >
        </div>
        <p>2、带进度提示</p>
        <div class="x-progress-wrap x-progress-2" >
        </div>
        <p>3、带条纹效果</p>
        <div class="x-progress-wrap x-progress-3" >
        </div>
        <p>4、条纹效果带动画</p>
        <div class="x-progress-wrap x-progress-4" >
        </div>
        <p>5、多个进度条堆叠</p>
        <div class="x-progress-wrap x-progress-5" >
        </div>

        <p class="x-color-blue">规则:</p>
    </div>
</div>

<script type="text/javascript" src="dest/lib/jquery-2.1.4.js"></script>
<script type="text/javascript" src="src/js/progress.js"></script>

<script>
    //基础样式
    var xP1 = xProgress({
        wrap: '.x-progress-1',
        percentage:'10%',
        onchange:function () {console.log('xP1',xP1.percentage);}
    });

    //带进度提示
    var xP2 = xProgress({
        wrap: '.x-progress-2',
        pclass: 'x-progress-bar x-progress-bar-green',
        tclass: 'x-progress-text',
        percentage:'20%',
        onchange:function () {console.log('xP2',xP2.percentage);}
    });

    //带条纹效果
    var xP3 = xProgress({
        wrap: '.x-progress-3',
        pclass: 'x-progress-bar x-progress-bar-red x-progress-bar-striped',
        percentage:'30%',
        onchange:function () {console.log('xP3',xP3.percentage);}
    });

    //条纹效果带动画
    var xP4 = xProgress({
        wrap: '.x-progress-4',
        pclass: 'x-progress-bar x-progress-bar-yellow x-progress-bar-striped x-progress-bar-animated',
        percentage:'40%',
        onchange:function () {console.log('xP4',xP4.percentage);}
    });

    //多个进度条堆叠
    var xP5 = xProgress({
        wrap: '.x-progress-5',
        pclass: 'x-progress-bar x-progress-bar-red',
        percentage:'10%',
        onchange:function () {console.log('xP5',xP5.percentage);}
    });

    var xP6 = xProgress({
        wrap: '.x-progress-5',
        pclass: 'x-progress-bar x-progress-bar-green',
        tclass: 'x-progress-text',
        percentage:'20%',
        onchange:function () {console.log('xP6',xP6.percentage);}
    });

    var xP7 = xProgress({
        wrap: '.x-progress-5',
        pclass: 'x-progress-bar x-progress-bar-blue x-progress-bar-striped',
        tclass: 'x-progress-text',
        percentage:'20%',
        onchange:function () {console.log('xP7',xP7.percentage);}
    });

    var xP8 = xProgress({
        wrap: '.x-progress-5',
        pclass: 'x-progress-bar x-progress-bar-yellow x-progress-bar-striped x-progress-bar-animated',
        tclass: 'x-progress-text',
        percentage:'10%',
        onchange:function () {console.log('xP8',xP8.percentage);}
    });
</script>

<?php
include "layout_footer.php";
?>
