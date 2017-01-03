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
    <div class="x-panel-title">贴士：</div>
    <div class="x-panel-content">

        <p>示例：</p>

        <pre><code class="language-html"><textarea>

</textarea></code></pre>


        <p>效果:</p>
            <div class="x-tip">
                <span class="x-tip-btn" data-tip="这是贴士内容">贴士层</span>
                <div class="x-tip-dialog">
                    <div class="x-tip-content"></div>
                    <span class="x-tip-cor"></span>
                </div>
            </div>

        <script>

            $('.x-tip-btn').mouseenter(function(){
                $('.x-tip-content').text($(this).data("tip"));
                $('.x-tip-dialog').show();
                $('.x-tip-btn').mousemove(function(e){
                    var mx = e.clientX-275;
                    var my = e.clientY-280;

                    $('.x-tip-dialog').css({display:'block',top:my,left:mx});
                });
            });
            $('.x-tip-btn').mouseleave(function(){
                $('.x-tip-dialog').hide();
            });


        </script>






        <p>规则:</p>
    </div>
</div>

<?php

include "layout_footer.php";
?>
