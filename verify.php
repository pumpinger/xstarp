<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/1/9
 * Time: 11:25
 */
include 'layout_header.php';
?>
<script type="text/javascript" src="//cdn.bootcss.com/parsley.js/2.6.1/parsley.js"></script>
<script type="text/javascript" src="./lib/zh_cn.js"></script>

<form action="" class="x-form" data-parsley-validate>
    <input type="text">
    <input type="text">
    <input type="text">
</form>

<script>
    $('.x-form').parsley();
</script>


<?php
include 'layout_footer.php';
?>
