<?php
/**
 * Created by PhpStorm.
 * User: @van
 * Date: 2016/1/20
 * Time: 15:49
 */

include "layout_header.php";





//todo   再做一个 横向的 导航栏
?>




<div class="x-panel">
    <div class="x-panel-title">导航</div>
    <div class="x-panel-content">

        <p>示例：</p>

        <pre><code class="language-html"><textarea>

</textarea></code></pre>


        <p>效果:</p>
        <div class="x-tab">
            <ul class="x-tab-nav">
                <li class="x-tab-li  x-active"><a href="#">水平导航</a></li>
                <li class=""><a href="#">侧边导航</a></li>
            </ul>
            <div class="x-tab-contents">
                <div class="x-tab-content">
                    <ul class="x-nav">
                        <li class="x-nav-item"><a href="">最新活动</a></li>
                        <li class="x-nav-item"><a href="">最新活动</a></li>
                        <li class="x-nav-item"><a href="">最新活动</a></li>
                        <li class="x-nav-item"><a href="">最新活动</a></li>
                        <li class="x-nav-item"><a href="">最新活动</a></li>
                    </ul>
                </div>

                <div class="x-tab-content x-active">
                    <ul class="x-nav x-nav-sidebar">
                        <li class="x-nav-item">
                            <a>主菜单1<i class="iconfont icon-xiangxia1"></i></a>
                            <ul class="x-nav-child" style="display:none">
                                <li><a href="">选项1</a></li>
                                <li><a href="">选项1</a></li>
                                <li><a href="">选项1</a></li>
                            </ul>
                        </li>
                        <li class="x-nav-item">
                            <a>主菜单2<i class="iconfont icon-xiangxia1"></i></a>
                            <ul class="x-nav-child" style="display:none">
                                <li><a href="">选项1</a></li>
                                <li><a href="">选项1</a></li>
                                <li><a href="">选项1</a></li>
                            </ul>
                        </li>
                        <li class="x-nav-item">
                            <a>主菜单3<i class="iconfont icon-xiangxia1"></i></a>
                            <ul class="x-nav-child" style="display:none">
                                <li><a href="">选项1</a></li>
                                <li><a href="">选项1</a></li>
                                <li><a href="">选项1</a></li>
                            </ul>
                        </li>
                        <li class="x-nav-item">
                            <a>主菜单4<i class="iconfont icon-xiangxia1"></i></a>
                            <ul class="x-nav-child" style="display:none">
                                <li><a href="">选项1</a></li>
                                <li><a href="">选项1</a></li>
                                <li><a href="">选项1</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </div>


        <script>
//            $(".x-nav-sidebar .x-nav-item").click(function() {
//                $(this).find('.x-nav-child').slideToggle(300).parent().siblings('.x-nav-item').find('.x-nav-child').slideUp();
//
//                $(this).toggleClass('x-cur').siblings('.x-nav-item').removeClass('x-cur');
//
//                if($(this).hasClass('x-cur')){
//                    $(this).find('i').removeClass('icon-xiangxia1').addClass('icon-xiangshang2');
//                }else{
//                    $(this).find('i').removeClass('icon-xiangshang2').addClass('icon-xiangxia1');
//                }
//
//            });


            $('.x-nav-sidebar .x-nav-item a').click(function(){
                if($(this).siblings('ul').css('display')=='none'){
                    $(this).parent('li').siblings('li').removeClass('x-cur');
                    $(this).addClass('x-cur');
                    $(this).siblings('ul').slideDown(100).children('li');
                    if($(this).parents('li').siblings('li').children('ul').css('display')=='block'){
                        $(this).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('x-cur');
                        $(this).parents('li').siblings('li').children('ul').slideUp(100);

                    }
                }else{
                    //控制自身变成+号
                    $(this).removeClass('x-cur');
                    //控制自身菜单下子菜单隐藏
                    $(this).siblings('ul').slideUp(100);
                    //控制自身子菜单变成+号
                    $(this).siblings('ul').children('li').children('ul').parent('li').children('a').addClass('x-cur');
                    //控制自身菜单下子菜单隐藏
                    $(this).siblings('ul').children('li').children('ul').slideUp(100);

                    //控制同级菜单只保持一个是展开的（-号显示）
                    $(this).siblings('ul').children('li').children('a').removeClass('x-cur');
                }
            })






            $(document).ready(function() {
                $('.x-nav-sidebar .x-nav-item').click(function(){
                    if($(this).siblings('ul').css('display')=='none'){
                        $(this).parent('li').siblings('li').removeClass('inactives');
                        $(this).addClass('inactives');
                        $(this).siblings('ul').slideDown(100).children('li');
                        if($(this).parents('li').siblings('li').children('ul').css('display')=='block'){
                            $(this).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('inactives');
                            $(this).parents('li').siblings('li').children('ul').slideUp(100);

                        }
                    }else{
                        //控制自身变成+号
                        $(this).removeClass('inactives');
                        //控制自身菜单下子菜单隐藏
                        $(this).siblings('ul').slideUp(100);
                        //控制自身子菜单变成+号
                        $(this).siblings('ul').children('li').children('ul').parent('li').children('a').addClass('inactives');
                        //控制自身菜单下子菜单隐藏
                        $(this).siblings('ul').children('li').children('ul').slideUp(100);

                        //控制同级菜单只保持一个是展开的（-号显示）
                        $(this).siblings('ul').children('li').children('a').removeClass('inactives');
                    }
                })
            });




        </script>


        <p>规则:</p>
    </div>



    <?php

    include "layout_footer.php";
    ?>
