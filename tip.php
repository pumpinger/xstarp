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
<div class="x-tip">
                <span class="x-tip-btn" data-tip="这是贴士内容">贴士层</span>
                <div class="x-tip-dialog">
                    <div class="x-tip-content"></div>
                    <span class="x-tip-cor"></span>
                </div>
            </div>
</textarea></code></pre>


        <p>效果:</p>
            <div class="x-tip">
                <span class="x-tip-btn" data-title="这是贴士内容">贴士层</span>
                <div class="x-tip-dialog">
                    <div class="x-tip-content"></div>
                    <span class="x-tip-cor"></span>
                </div>
            </div>

        <div class="x-tip">
            <span class="x-tip-btn" data-title="这是贴士内容" style="width:100px;white-space: nowrap;overflow:hidden;text-overflow:ellipsis;">贴士层贴士层贴士层贴士层</span>
            <div class="x-tip-dialog">
                <div class="x-tip-content"></div>
                <span class="x-tip-cor"></span>
            </div>
        </div>

        <p>规则:</p>
    </div>
</div>

<?php

include "layout_footer.php";
?>
