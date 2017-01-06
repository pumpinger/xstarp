<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/1/6
 * Time: 14:33
 */



include "layout_header.php";

?>

<div class="x-panel">
    <div class="x-panel-title">ajax操作</div>
    <div class="x-panel-content">

        <p>示例：</p>

<pre><code class="language-html"><textarea>
    <span class="x-ajax-del x-button-middle x-button x-button-cadetblue"  data-url="./index.php" data-refresh=".x-table">
        删除
    </span>
    <span class="x-ajax-op x-button-middle x-button x-button-cadetblue"  data-id="11">
        操作
    </span>
</textarea></code></pre>


        <p>效果:</p>

        <span class="x-ajax-del x-button-middle x-button x-button-cadetblue"  data-url="./index.php" data-refresh=".x-table">
            删除
        </span>
<!--        <span class="x-ajax-edit x-button-middle x-button x-button-cadetblue"  data-id="11"  data-param="&a=1">-->
<!--            编辑-->
<!--        </span>-->
<!--        <span class="x-ajax-add x-button-middle x-button x-button-cadetblue"  data-id="11"  data-param="&a=1">-->
<!--            添加-->
<!--        </span>-->
        <span class="x-ajax-op x-button-middle x-button x-button-cadetblue"  data-id="11">
            操作
        </span>
       

        <p>规则:</p>

        <p>有 x-ajax-del ,这个class 的 元素会绑定事件,点击之后发去请求  data-url,且成功后会刷新 data-refresh 的dom,默认值是 .x-table</p>
        <p>有 x-ajax-op ,这个class 的 元素会绑定事件,点击之后发去请求  data-url</p>

    </div>
    


<?php

include "layout_footer.php";
?>
