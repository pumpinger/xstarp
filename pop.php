<?php
/**
 * Created by PhpStorm.
 * User: @van
 * Date: 2016/1/20
 * Time: 15:49
 */

include "layout_header.php";

?>


<script type="text/javascript" src="./src/js/popUp.js"></script>

<div class="x-panel">
    <div class="x-panel-title">弹窗：</div>
    <div class="x-panel-content">

        <p>示例：</p>

        <pre><code class="language-html"><textarea>
     <div class="x-pop">
           <div class="x-pop-btn">
               <span class="x-button x-button-small x-pop-prompt1">提示1</span>
               <span class="x-button x-button-small x-pop-prompt2">提示2</span>
               <span class="x-button x-button-small x-pop-confirm">确定</span>
               <span class="x-button x-button-small x-pop-define">自定义</span>
           </div>
        </div>

        <script>
            $('.x-pop-prompt1').click(function(){
                pop('prompt',{
                    p_width:200,
                    content:'操作成功',
                    btn:[{
                        name:'确定'
                    }]
                });
            });
            $('.x-pop-prompt2').click(function(){
                pop('prompt',{
                    p_width:200,
                    content:'操作成功'
                },2000);
            });

            $('.x-pop-confirm').click(function(){
                pop('confirm', {
                    content:'确定删除吗',
                    isClose:false,
                    confirmfn:function(){
                        pop('prompt',{
                            p_width:'200',
                            content:'操作成功'
                        },2000);
                    }
                });
            });

            $(".x-pop-define").click(function(){
                var edit_con = $('<input type="text">');
                pop('define',{
                    p_width:300,
                    title:'用户信息',
                    content:edit_con,
                    btn:[{
                        name:'保存',
                        classStr:'confirm',
                        isClose:true,
                        opra:function(){
                            pop('prompt',{
                                p_width:200,
                                content:'保存成功'
                            },2000);
                        }

                    },{
                        name:'取消',
                        classStr:'cancel',
                        isClose:true
                    },{
                        name:'重置',
                        classStr:'reset',
                        isClose:false,
                        opra:function(){
                            $('input').val("");
                        }
                    }]


                });
            });

        </script>
</textarea></code></pre>


        <p>效果:</p>
        <div class="x-pop">
           <div class="x-pop-btn">
               <span class="x-button x-button-small x-pop-prompt1">提示1</span>
               <span class="x-button x-button-small x-pop-prompt2">提示2</span>
               <span class="x-button x-button-small x-pop-confirm">确定</span>
               <span class="x-button x-button-small x-pop-define">自定义</span>
           </div>
        </div>

        <script>
            $('.x-pop-prompt1').click(function(){
                pop('prompt',{
                    p_width:200,
                    content:'操作成功',
                    btn:[{
                        name:'确定'
                    }]
                });
            });
            $('.x-pop-prompt2').click(function(){
                pop('prompt',{
                    p_width:200,
                    content:'操作成功'
                },2000);
            });

            $('.x-pop-confirm').click(function(){
                pop('confirm', {
                    content:'确定删除吗',
                    isClose:false,
                    confirmfn:function(){
                        pop('prompt',{
                            p_width:'200',
                            content:'操作成功'
                        },2000);
                    }
                });
            });

            $(".x-pop-define").click(function(){
                var edit_con = $('<input type="text">');
                pop('define',{
                    p_width:300,
                    title:'用户信息',
                    content:edit_con,
                    btn:[{
                        name:'保存',
                        classStr:'confirm',
                        isClose:true,
                        opra:function(){
                            pop('prompt',{
                                p_width:200,
                                content:'保存成功'
                            },2000);
                        }

                    },{
                        name:'取消',
                        classStr:'cancel',
                        isClose:true
                    },{
                        name:'重置',
                        classStr:'reset',
                        isClose:false,
                        opra:function(){
                            $('input').val("");
                        }
                    }]


                });
            });

        </script>


        <p>规则:</p>
        <table class="x-table x-table-interval">
            <thead align="center">
            <tr>
                <th>属性</th>
                <th>类型</th>
                <th>说明</th>
                <th>默认值</th>
                <th>示列</th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <td>isClose</td>
                <td>Boolean</td>
                <td>是否关闭弹窗(true为关闭）</td>
                <td>true</td>
                <td></td>
            </tr>
            <tr>
                <td>p_width</td>
                <td>Number</td>
                <td>弹窗宽度</td>
                <td>600</td>
                <td></td>

            </tr>
            <tr>
                <td>p_height</td>
                <td>Number</td>
                <td>弹窗高度</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>title</td>
                <td>String</td>
                <td>弹窗标题</td>
                <td>提示</td>
                <td></td>
            </tr>
            <tr>
                <td>content</td>
                <td>String</td>
                <td>弹窗内容</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>btn</td>
                <td>Array</td>
                <td>弹窗按钮</td>
                <td>[确认] [取消]</td>
                <td></td>
            </tr>
            <tr>
                <td>name</td>
                <td>String</td>
                <td>弹窗按钮的名字</td>
                <td></td>
                <td>[保存]</td>
            </tr>
            <tr>
                <td>classStr</td>
                <td>String</td>
                <td>弹窗按钮的class类名</td>
                <td></td>
                <td>'reset'</td>
            </tr>
            <tr>
                <td>confirmfn</td>
                <td>Function</td>
                <td>点击确认按钮后进行的操作</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>closefn</td>
                <td>Function</td>
                <td>点击取消后进行的操作</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>opra</td>
                <td>Function</td>
                <td>自定义弹窗点击按钮后进行的操作</td>
                <td></td>
                <td></td>
            </tr>
            </tbody>
        </table>

        <table class="x-table x-table-interval">
            <thead align="center">
            <tr>
                <th>方法</th>
                <th>功能</th>
                <th>说明</th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <td>pop()</td>
                <td>弹窗函数</td>
                <td>共有三个参数type,option,time</td>
            </tr>
            <tr>
                <td>onClose()</td>
                <td>关闭弹窗</td>
                <td></td>
            </tr>

            <tr>
                <td>promptPop</td>
                <td>提示弹窗</td>
                <td>type为'prompt'时调用</td>

            </tr>
            <tr>
                <td>confirmPop</td>
                <td>确认弹窗</td>
                <td>type为'confirm'时调用</td>
            </tr>
            <tr>
                <td>userDefined</td>
                <td>自定义弹窗</td>
                <td>type为'define'时调用</td>
            </tr>

            </tbody>
        </table>


    </div>
</div>





<?php

include "layout_footer.php";
?>
