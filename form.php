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

        <p class="x-color-cadetblue">示例：</p>

        <pre><code class="language-html"><textarea>
   <div class="x-form">
            <h4 class="x-form-title">基本信息</h4>
            <form class="x-form-content">
                <div class="x-form-item">
                    <span class="x-form-key">输入框: </span>
                    <span class="x-form-value"><input type="text" name="userName"></span>
                </div>
                <div class="x-form-item">
                    <span class="x-form-key">密码:</span>
                    <span class="x-form-value"><input type="password" name="passWord"></span>
                </div>
                <div class="x-form-item">
                    <span class="x-form-key">文本框:</span>
                    <span class="x-form-value"></span>
                </div>
                <div class="x-form-item">
                    <span class="x-form-key">单选框:</span>
                    <span class="x-form-value">
                        <label class="x-form-input"><input name="radio" type="radio" value="1" checked="checked"><span>男</span></label>
                        <label class="x-form-input"><input name="radio" type="radio" value="2"><span>女</span></label>
                    </span>
                </div>
                <div class="x-form-item">
                    <span class="x-form-key">多选框:</span>
                    <span class="x-form-value">
                        <label class="x-form-input"><input name="checkbox" type="checkbox" value="1" checked="checked">1</label>
                        <label class="x-form-input"><input name="checkbox" type="checkbox" value="2">2</label>
                        <label class="x-form-input"><input name="checkbox" type="checkbox" value="3">3</label>
                    </span>
                </div>
                <div class="x-form-item">
                    <span class="x-form-key">开关:</span>
                    <span class="x-form-value">
                        <label class="x-form-switch"><input type="checkbox"></label>
                    </span>
                </div>
                <div class="x-form-item">
                    <span class="x-form-key">品牌类型: </span>
                    <div class="x-form-value">
                        <lable class="x-form-radio x-checked">
                            <input type="radio" name="radio1" value="选项1">选项1
                        </lable>
                        <lable class="x-form-radio">
                            <input type="radio" name="radio1" value="选项2">选项2
                        </lable>
                    </div>
                </div>
                <div class="x-form-item">
                    <span class="x-form-key">价格范围: </span>
                    <div class="x-form-value">
                        <label class="x-form-checkbox x-checked">
                            <input type="checkbox" name="checkbox1" value="选项1">选项1
                        </label>
                        <label class="x-form-checkbox">
                            <input type="checkbox" name="checkbox1" value="选项2">选项2
                        </label>
                        <label class="x-form-checkbox x-checked">
                            <input type="checkbox" name="checkbox1" value="选项3">选项3
                        </label>

                    </div>
                </div>
                <div class="x-form-item">
                    <span class="x-form-key"></span>
                    <span class="x-form-value">
                        <a class="x-form-submit">提交</a>
                        <a class="x-form-cancel">取消</a>
                    </span>

                </div>
            </form>
        </div>
</textarea></code></pre>


        <p class="x-color-cadetblue">效果:</p>
        <div class="x-form">
            <h4 class="x-form-title">基本信息</h4>
            <form class="x-form-content">
                <div class="x-form-item">
                    <span class="x-form-key">输入框: </span>
                    <div class="x-form-value"><input type="text" name="userName"></div>
                </div>
                <div  class="x-form-item">
                    <span class="x-form-key">密码:</span>
                    <div class="x-form-value"><input type="password" name="passWord"></div>
                </div>
                <div  class="x-form-item">
                    <span class="x-form-key">文本框:</span>
                    <div class="x-form-value"><textarea></textarea></div>
                </div>
                <div  class="x-form-item">
                    <span class="x-form-key">单选框:</span>
                    <div class="x-form-value">
                        <label class="x-form-input"><input name="radio" type="radio" value="1" checked="checked"><span>男</span></label>
                        <label class="x-form-input"><input name="radio" type="radio" value="2"><span>女</span></label>
                    </div>
                </div>
                <div  class="x-form-item">
                    <span class="x-form-key">多选框:</span>
                    <div class="x-form-value">
                        <label class="x-form-input"><input name="checkbox" type="checkbox" value="1" checked="checked">1</label>
                        <label class="x-form-input"><input name="checkbox" type="checkbox" value="2">2</label>
                        <label class="x-form-input"><input name="checkbox" type="checkbox" value="3">3</label>
                    </div>
                </div>

                <div class="x-form-item">
                    <span class="x-form-key">开关:</span>
                    <div class="x-form-value">
                        <label class="x-form-switch x-form-onswitch">
                            <input type="checkbox" name="switch" value="on" checked="checked">
                            <i></i>
                        </label>
                    </div>
                </div>



                <div class="x-form-item">
                    <span class="x-form-key">选择框:</span>
                    <div class="x-form-value">
                        <select class="x-form-select" name="select">
                            <option value="1">普通用户</option>
                            <option value="2">特殊用户</option>
                            <option value="3">VIP</option>
                        </select>
                        <span>~</span>
                        <select class="x-form-select" name="select">
                            <option value="1">普通用户</option>
                            <option value="2">特殊用户</option>
                            <option value="3">VIP</option>
                        </select>
                    </div>
                </div>
                <div class="x-form-item">
                    <span class="x-form-key">品牌类型: </span>
                    <div class="x-form-value">
                        <lable class="x-form-radio x-checked">
                            <input type="radio" name="radio1" value="选项1" checked="checked">选项1
                        </lable>
                        <lable class="x-form-radio">
                            <input type="radio" name="radio1" value="选项2">选项2
                        </lable>
                    </div>
                </div>
                <div class="x-form-item">
                    <span class="x-form-key">价格范围: </span>
                    <div class="x-form-value">
                        <label class="x-form-checkbox x-checked">
                            <input type="checkbox" name="checkbox1" value="选项1" checked="checked">选项1
                        </label>
                        <label class="x-form-checkbox">
                            <input type="checkbox" name="checkbox1" value="选项2">选项2
                        </label>
                        <label class="x-form-checkbox x-checked">
                            <input type="checkbox" name="checkbox1" value="选项3" checked="checked">选项3
                        </label>

                    </div>
                </div>
                <div class="x-form-item">
                    <span class="x-form-key"></span>
                    <div class="x-form-value">
                        <a class="x-form-submit">提交</a>
                        <a class="x-form-cancel">取消</a>
                    </div>

                </div>
            </form>
        </div>

        <p class="x-color-cadetblue">规则:</p>
        <p>1.命名形式 x-form- </p>




    </div>
</div>



<?php

include "layout_footer.php";
?>


