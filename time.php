<?php
/**
 * Created by PhpStorm.
 * User: fizz
 * Date: 2016/12/30
 * Time: 10:37
 */
include "layout_header.php";
?>
<link rel="stylesheet" href="src/css/timepicker.css">

<input type="text" id="timePicker">

<!--包裹的容器，多个picker的时候可以互斥-->
<!--<div class="time-picker-container" id="time-picker-container">-->
<!--    <div class="timepicker" >-->
<!--        <div class="timepicker-nav">-->
<!--            <div class="timepicker-nav-action action-left">-->
<!--                <i class="icon iconfont icon-xiangzuo1"></i>-->
<!--            </div>-->
<!--            <div class="timepicker-nav-title">-->
<!--                2016年12月-->
<!--            </div>-->
<!--            <div class="timepicker-nav-action action-right">-->
<!--                <i class="icon iconfont icon-xiangyou1"></i>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="timepicker-content">-->
<!--            <div class="timepicker-days" >-->
<!--                <div class="timepicker-days-titles">-->
<!--                    <div class="timepicker-days-title weekend">日</div>-->
<!--                    <div class="timepicker-days-title">一</div>-->
<!--                    <div class="timepicker-days-title">二</div>-->
<!--                    <div class="timepicker-days-title">三</div>-->
<!--                    <div class="timepicker-days-title">四</div>-->
<!--                    <div class="timepicker-days-title">五</div>-->
<!--                    <div class="timepicker-days-title weekend">六</div>-->
<!--                </div>-->
<!--                <div class="timepicker-days-cells">-->
<!--                    <div class="timepicker-day-cell">1</div>-->
<!--                    <div class="timepicker-day-cell">2</div>-->
<!--                    <div class="timepicker-day-cell">3</div>-->
<!--                    <div class="timepicker-day-cell">4</div>-->
<!--                    <div class="timepicker-day-cell">5</div>-->
<!--                    <div class="timepicker-day-cell">6</div>-->
<!--                    <div class="timepicker-day-cell">7</div>-->
<!--                    <div class="timepicker-day-cell">8</div>-->
<!--                    <div class="timepicker-day-cell">9</div>-->
<!--                    <div class="timepicker-day-cell">10</div>-->
<!--                    <div class="timepicker-day-cell">11</div>-->
<!--                    <div class="timepicker-day-cell">12</div>-->
<!--                    <div class="timepicker-day-cell">13</div>-->
<!--                    <div class="timepicker-day-cell">14</div>-->
<!--                    <div class="timepicker-day-cell">15</div>-->
<!--                    <div class="timepicker-day-cell">16</div>-->
<!--                    <div class="timepicker-day-cell">17</div>-->
<!--                    <div class="timepicker-day-cell">18</div>-->
<!--                    <div class="timepicker-day-cell">19</div>-->
<!--                    <div class="timepicker-day-cell">20</div>-->
<!--                    <div class="timepicker-day-cell">21</div>-->
<!--                    <div class="timepicker-day-cell">22</div>-->
<!--                    <div class="timepicker-day-cell">23</div>-->
<!--                    <div class="timepicker-day-cell">24</div>-->
<!--                    <div class="timepicker-day-cell">25</div>-->
<!--                    <div class="timepicker-day-cell">26</div>-->
<!--                    <div class="timepicker-day-cell">27</div>-->
<!--                    <div class="timepicker-day-cell">28</div>-->
<!--                    <div class="timepicker-day-cell">29</div>-->
<!--                    <div class="timepicker-day-cell">30</div>-->
<!--                    <div class="timepicker-day-cell">31</div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="timepicker-months" style="display: none">-->
<!--                <div class="timepicker-months-cells">-->
<!--                    <div class="timepicker-month-cell">一月</div>-->
<!--                    <div class="timepicker-month-cell">二月</div>-->
<!--                    <div class="timepicker-month-cell">三月</div>-->
<!--                    <div class="timepicker-month-cell">四月</div>-->
<!--                    <div class="timepicker-month-cell">五月</div>-->
<!--                    <div class="timepicker-month-cell">六月</div>-->
<!--                    <div class="timepicker-month-cell">七月</div>-->
<!--                    <div class="timepicker-month-cell">八月</div>-->
<!--                    <div class="timepicker-month-cell">九月</div>-->
<!--                    <div class="timepicker-month-cell">十月</div>-->
<!--                    <div class="timepicker-month-cell">十一月</div>-->
<!--                    <div class="timepicker-month-cell">十二月</div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="timepicker-years" style="display: none">-->
<!--                <div class="timepicker-years-cells">-->
<!--                    <!--                    <div class="timepicker-year-cell">1999</div>-->
<!--                    <div class="timepicker-year-cell">2000</div>-->
<!--                    <div class="timepicker-year-cell">2001</div>-->
<!--                    <div class="timepicker-year-cell">2002</div>-->
<!--                    <div class="timepicker-year-cell">2003</div>-->
<!--                    <div class="timepicker-year-cell">2004</div>-->
<!--                    <div class="timepicker-year-cell">2005</div>-->
<!--                    <div class="timepicker-year-cell">2006</div>-->
<!--                    <div class="timepicker-year-cell">2007</div>-->
<!--                    <div class="timepicker-year-cell">2008</div>-->
<!--                    <div class="timepicker-year-cell">2009</div>-->
<!--                    <!--                    <div class="timepicker-year-cell">2010</div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->

<script src="//cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
<script src="src/js/timepicker.js"></script>

<script>
    var datePicker = $('#timePicker').timePicker({startDate: 'new day'});
    console.log(datePicker);
</script>


<?php

include "layout_footer.php";
?>
