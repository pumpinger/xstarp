<?php
/**
 * Created by PhpStorm.
 * User: fizz
 * Date: 2016/12/30
 * Time: 10:37
 */
include "layout_header.php";
?>
<link rel="stylesheet" href="src/css/datepicker.css">

<h3>功能：</h3>
<ul>
    <li>选取日期</li>
    <li>支持inline模式</li>
    <li>支持IE8 & IE8+</li>
</ul>

<hr>

<h3>如何使用：</h3>
<pre>
<code class="language-js">
<textarea>
引入：
    <script src="//cdn.bootcss.com/jquery/1.11.0/jquery.min.js"></script>
    <script src="src/js/datepicker.js"></script>

在html标签里面添加插件标记：
    <input data-toggle="datepicker">
    <div data-toggle="datepicker"></div>

初始化：
    $('[data-toggle="datepicker"]').datepicker();

注意：
    支持IE8需使用jQuery 1.11.0版本（支持IE8的jQuery版本）。
</textarea>
</code>
</pre>

<h3>实例：</h3>
<input type="text" id="timePicker" data-toggle="datepicker">

<pre>
<code class="language-js">
<textarea>

    <input type="text" id="timePicker" data-toggle="datepicker">

    $('[data-toggle="datepicker"]').datepicker();
</textarea>
</code>
</pre>

<h3>方法：</h3>
<section>
    <h6></h6>
    <p></p>
</section>


<h3>options:</h3>

<section>
<h6>autoShow</h6>
<p></p>
</section>

<section>
    <h6>autoHide</h6>
    <p></p>
</section>

<section>
    <h6>autoPick</h6>
    <p></p>
</section>

<section>
    <h6></h6>
    <p></p>
</section>

<section>
    <h6></h6>
    <p></p>
</section>

<section>
    <h6></h6>
    <p></p>
</section>

<section>
    <h6></h6>
    <p></p>
</section>

<section>
    <h6></h6>
    <p></p>
</section>

<section>
    <h6></h6>
    <p></p>
</section>

<section>
    <h6></h6>
    <p></p>
</section>

<section>
    <h6></h6>
    <p></p>
</section>





<script src="//cdn.bootcss.com/jquery/1.11.0/jquery.min.js"></script>
<script src="src/js/datepicker.js"></script>
<script>
    $('[data-toggle="datepicker"]').datepicker();
    $('[data-toggle="datepicker"]').on('pick.datepicker', function (e) {
        console.log('pick');
        console.log(e);
        if (e.date < new Date()) {
            e.preventDefault(); // Prevent to pick the date
        }
    });
</script>




<?php
include "layout_footer.php";
?>
