<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/1/5
 * Time: 18:06
 */
include "layout_header.php";
?>

    <div class="x-panel">
        <div class="x-panel-title">获取时间</div>
        <div class="x-panel-content">
            <p class="x-color-blue">示例</p>
            <pre><code class="language-html"><textarea>
                <p></p>
                <div class=""></div>
                <p></p>
                <div class=""></div>
                <p></p>
                <div class=""></div>
                <p></p>
                <div class=""></div>
                <p></p>
                <div class=""></div>
            </textarea></code></pre>
        </div>
    </div>

    <script type="text/javascript" src="src/js/gettime.js"></script>

    <script>
        var xttt = xTime();
        toDate('',xttt);

        function toDate(key,time) {
            if(typeof time === 'object'){
                $.each(time,function (index,item) {
                    toDate(key+index,item);
                })
            }else{
                console.log(key,(new Date(time)));
            }
        }
    </script>



<?php
include "layout_footer.php";
?>