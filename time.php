<?php
/**
 * Created by PhpStorm.
 * User: fizz
 * Date: 2016/12/30
 * Time: 10:37
 */
include "layout_header.php";
?>

<input type="text" id="timePicker">

<script src="//cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
<script src="src/js/timepicker.js"></script>

<script>
    var a = $('#timePicker').timePicker({startDate: 'new day'});
    console.log(a);
//    a.init()
</script>


<?php

include "layout_footer.php";
?>
