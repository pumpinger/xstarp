<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/12/29
 * Time: 16:09
 */
include "layout_header.php";
?>

<script type="text/javascript" src="dest/lib/jquery-2.1.4.js"></script>
<script type="text/javascript" src="src/js/progress.js"></script>

<div id="x-progress-time-driven" class="x-progress-time-driven">
    <span class=""></span>
</div>

<!--<div id="x-progress-data-driven">-->
<!--    <span class=""></span>-->
<!--</div>-->
<script>
    $("#x-progress-time-driven").css({'width': '100%'});
</script>

<?php
include "layout_footer.php";
?>
