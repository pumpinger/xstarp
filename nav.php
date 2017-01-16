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
 <ul class="x-nav">
                        <li class="x-nav-item x-active"><a href="javascript:void(0)">最新活动</a></li>
                        <li class="x-nav-item"><a href="javascript:void(0)">最新活动</a></li>
                        <li class="x-nav-item"><a href="javascript:void(0)">最新活动</a></li>
                        <li class="x-nav-item"><a href="javascript:void(0)">最新活动</a></li>
                        <li class="x-nav-item"><a href="javascript:void(0)">最新活动</a></li>
                    </ul>

                 <ul class="x-nav x-nav-sidebar">
                        <li class="x-nav-item">
                            <a class="x-nav-head">主菜单1<i class="iconfont icon-xiangxia1"></i></a>
                            <ul class="x-nav-child" style="display:none">
                                <li><a href="javascript:void(0)">选项1</a></li>
                                <li><a href="javascript:void(0)">选项1</a></li>
                                <li><a href="javascript:void(0)">选项1</a></li>
                            </ul>
                        </li>
                        <li class="x-nav-item">
                            <a class="x-nav-head">主菜单2<i class="iconfont icon-xiangxia1"></i></a>
                            <ul class="x-nav-child" style="display:none">
                                <li><a href="javascript:void(0)">选项1</a></li>
                                <li><a href="javascript:void(0)">选项1</a></li>
                                <li><a href="javascript:void(0)">选项1</a></li>
                            </ul>
                        </li>
                        <li class="x-nav-item">
                            <a class="x-nav-head">主菜单3<i class="iconfont icon-xiangxia1"></i></a>
                            <ul class="x-nav-child" style="display:none">
                                <li><a href="javascript:void(0)">选项1</a></li>
                                <li><a href="javascript:void(0)">选项1</a></li>
                                <li><a href="javascript:void(0)">选项1</a></li>
                            </ul>
                        </li>
                        <li class="x-nav-item">
                            <a class="x-nav-head">主菜单4<i class="iconfont icon-xiangxia1"></i></a>
                            <ul class="x-nav-child" style="display:none">
                                <li><a href="javascript:void(0)">选项1</a></li>
                                <li><a href="javascript:void(0)">选项1</a></li>
                                <li><a href="javascript:void(0)">选项1</a></li>
                            </ul>
                        </li>
                    </ul>


</textarea></code></pre>


        <p>效果:</p>
        <div class="x-tab">
            <ul class="x-tab-nav">
                <li class="x-tab-li  x-active"><a>水平导航</a></li>
                <li class="x-tab-li"><a>侧边导航</a></li>
            </ul>
            <div class="x-tab-contents">
                <div class="x-tab-content x-active">
                    <ul class="x-nav x-nav-cross">
                        <li class="x-nav-item x-active"><a href="javascript:void(0)">最新活动</a></li>
                        <li class="x-nav-item"><a href="javascript:void(0)">最新活动</a></li>
                        <li class="x-nav-item"><a href="javascript:void(0)">最新活动</a></li>
                        <li class="x-nav-item"><a href="javascript:void(0)">最新活动</a></li>
                        <li class="x-nav-item"><a href="javascript:void(0)">最新活动</a></li>
                    </ul>
                </div>

                <div class="x-tab-content">
                    <ul class="x-nav x-nav-sidebar">
                        <li class="x-nav-item">
                            <a class="x-nav-head">主菜单1<i class="iconfont icon-xiangxia1"></i></a>
                            <ul class="x-nav-child" style="display:none">
                                <li><a href="javascript:void(0)">选项1</a></li>
                                <li><a href="javascript:void(0)">选项1</a></li>
                                <li><a href="javascript:void(0)">选项1</a></li>
                            </ul>
                        </li>
                        <li class="x-nav-item">
                            <a class="x-nav-head">主菜单2<i class="iconfont icon-xiangxia1"></i></a>
                            <ul class="x-nav-child" style="display:none">
                                <li><a href="javascript:void(0)">选项1</a></li>
                                <li><a href="javascript:void(0)">选项1</a></li>
                                <li><a href="javascript:void(0)">选项1</a></li>
                            </ul>
                        </li>
                        <li class="x-nav-item">
                            <a class="x-nav-head">主菜单3<i class="iconfont icon-xiangxia1"></i></a>
                            <ul class="x-nav-child" style="display:none">
                                <li><a href="javascript:void(0)">选项1</a></li>
                                <li><a href="javascript:void(0)">选项1</a></li>
                                <li><a href="javascript:void(0)">选项1</a></li>
                            </ul>
                        </li>
                        <li class="x-nav-item">
                            <a class="x-nav-head">主菜单4<i class="iconfont icon-xiangxia1"></i></a>
                            <ul class="x-nav-child" style="display:none">
                                <li><a href="javascript:void(0)">选项1</a></li>
                                <li><a href="javascript:void(0)">选项1</a></li>
                                <li><a href="javascript:void(0)">选项1</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </div>



        <p>规则:</p>
        <p>1.水平导航条，点击li.x-nav-item后添加class：x-active </p>
        <p>2.侧边栏导航条，点击a.x-nav-head后添加class：x-cur,子菜单随机下拉显示出来，其余的子菜单自动收回。 </p>

    </div>



    <?php

    include "layout_footer.php";
    ?>
