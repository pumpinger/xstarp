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
    <div class="x-panel-title">按钮</div>
    <div class="x-panel-content">

        <p>示例：</p>

        <pre><code class="language-html"><textarea>

</textarea></code></pre>


        <p>效果:</p>

        <div class="x-tab">
            <ul class="x-tab-nav">
                <li class="x-tab-li  active"><a href="#tab1" data-toggle="tab">Section 1</a></li>
                <li class=""><a href="#tab2" data-toggle="tab">Section 2</a></li>
                <li class=""><a href="#tab3" data-toggle="tab">Section 3</a></li>
            </ul>
            <div class="x-tab-contents">
                <div class="x-tab-content active" id="tab1">
                    <p>I'm in Section 1.</p>
                </div>
                <div class="x-tab-content" id="tab2">
                    <p>Howdy, I'm in Section 2.</p>
                </div>
                <div class="x-tab-content" id="tab3">
                    <p>What up girl, this is Section 3.</p>
                </div>
            </div>
        </div>
        <script>
            $('.x-tab-nav li').click(function(){
                var i = $(this).index();
                $(this).addClass('active').siblings().removeClass('active');
                $('.x-tab-content').eq(i).addClass('active').siblings().removeClass('active');
            })
        </script>
        

        <p>规则:</p>
    </div>



    <?php

    include "layout_footer.php";
    ?>
