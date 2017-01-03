<?php
/**
 * Created by PhpStorm.
 * User: @van
 * Date: 2016/1/20
 * Time: 15:49
 */

include "layout_header.php";

?>

<style>

    .avatar input{padding: 0;}
</style>

<div class="x-panel">
    <div class="x-panel-title">标题：</div>
    <div class="x-panel-content">

        <p>示例：</p>

<pre><code class="language-html"><textarea>


</textarea></code></pre>


        <p>效果:</p>
        <div class="x-form">
            <h4 class="x-form-title">基本信息</h4>
            <form class="x-form-content">
                <div class="x-form-item">
                    <span class="x-form-key">姓名: </span>
                    <span class="x-form-value"><input type="text" name="userName"></span>
                </div>
                <div  class="x-form-item">
                    <span class="x-form-key">密码:</span>
                    <span class="x-form-value"><input type="password" name="passWord"></span>
                </div>
                <div  class="x-form-item">
                    <span class="x-form-key">家庭住址:</span>
                    <span class="x-form-value"><textarea></textarea></span>
                </div>
                <div  class="x-form-item">
                    <span class="x-form-key">性别:</span>
                    <span class="x-form-value">
                        <label class="x-form-input"><input name="radio" type="radio" value="1" checked="checked"><span>男</span></label>
                        <label class="x-form-input"><input name="radio" type="radio" value="2"><span>女</span></label>
                    </span>
                </div>
                <div  class="x-form-item">
                    <span class="x-form-key">爱好:</span>
                    <span class="x-form-value">
                        <label class="x-form-input"><input name="checkbox" type="checkbox" value="1" checked="checked">1</label>
                        <label class="x-form-input"><input name="checkbox" type="checkbox" value="2">2</label>
                        <label class="x-form-input"><input name="checkbox" type="checkbox" value="3">3</label>
                    </span>
                </div>

                <div class="x-form-item">
                    <span class="x-form-key"></span>
                    <span class="x-form-value">
                        <button class="x-form-submit">提交</button>
                        <button class="x-form-cancel">取消</button>
                    </span>

                </div>
            </form>
        </div>


        <div class="x-form">
            <h4 class="x-form-title">表单选择</h4>
            <form class="x-form-content">
                <div class="x-form-item">
                    <span class="x-form-key">品牌类型: </span>
                    <div class="x-form-value">
                        <lable class="x-form-radio">
                            <input type="radio" name="radio">选项1
                        </lable>
                        <lable class="x-form-radio">
                            <input type="radio" name="radio">选项1
                        </lable>
                    </div>
                </div>


                <div class="x-form-item">
                    <span class="x-form-key">价格范围: </span>
                    <div class="x-form-value">
                        <label class="x-form-checkbox">
                            <input type="checkbox" name="checkbox">选项1
                        </label>
                        <label class="x-form-checkbox">
                            <input type="checkbox" name="checkbox">选项1
                        </label>
                        <label class="x-form-checkbox">
                            <input type="checkbox" name="checkbox">选项1
                        </label>

                    </div>
                </div>
            </form>
        </div>


        <script>
            $('.x-form-radio').click(function(){
                $(this).addClass('x-checked').siblings().removeClass('x-checked');
            })
            $('.x-form-checkbox').click(function(){
                if($(this).find("input").is(':checked')){
                    $(this).addClass('x-checked');
                }else{
                    $(this).removeClass('x-checked')
                }

            })
        </script>
        <p>规则:</p>





    </div>
</div>



<?php

include "layout_footer.php";
?>


