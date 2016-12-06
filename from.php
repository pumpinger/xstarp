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


</style>

<div class="x-panel">
    <div class="x-panel-title">标题：</div>
    <div class="x-panel-content">

        <p>示例：</p>

<pre><code class="language-html"><textarea>
   <div class="x-form">

       <form action="" method="post">
           <div class="x-form-base">
               <div class="x-form-title">基本信息：</div>
               <div class="x-form-item">
                   <span class="form_key">用户： </span>
                   <span class="form_value"><input type="text" name="userName"/></span>
               </div>

               <div  class="x-form-item">
                   <span class="form_key">电话：</span>
                   <span class="form_value"><input type="text" name="phone"/></span>
               </div>
               <div class="x-form-item">
                   <span class="form_key">性别：</span>
                   <span class="form_value">
                       <label class="sex"><input name="sex" type="radio" value="1" checked="checked">男</label>
                       <label class="sex"><input name="sex" type="radio" value="2">女</label>
                   </span>
               </div>

               <div  class="x-form-item">
                   <span class="form_key">头像：</span>
                   <span class="form_value">
                       <label for="file"></label>
                       <input type="file" name="file" id="file" />
                   </span>
               </div>
           </div>
           <div class="x-form-other">
               <div class="x-form-title">其他：</div>
               <div  class="x-form-item">
                   其他：  其他相关设置
               </div>
           </div>
           <div  class="x-form-submit x-form-item">

               <input type="submit" name="submit" value="提交" class="submit" />

           </div>

       </form>
   </div>
</textarea></code></pre>


        <p>效果:</p>
        <div class="x-form">
            <form action="" method="post">
                <div class="x-form-base">
                    <div class="x-form-title">基本信息：</div>
                    <div class="x-form-item">
                        <span class="form_key">用户： </span>
                        <span class="form_value"><input type="text" name="userName"/></span>
                    </div>

                    <div  class="x-form-item">
                        <span class="form_key">电话：</span>
                        <span class="form_value"><input type="text" name="phone"/></span>
                    </div>
                    <div class="x-form-item">
                        <span class="form_key">性别：</span>
                        <span class="form_value">
                            <label class="sex"><input name="sex" type="radio" value="1" checked="checked">男</label>
                            <label class="sex"><input name="sex" type="radio" value="2">女</label>
                        </span>
                    </div>
                    <div  class="x-form-item">
                        <span class="form_key">头像：</span>
                        <span class="form_value">
                            <label for="file"></label>
                            <input type="file" name="file" id="file" />
                        </span>
                    </div>
                </div>
                <div class="x-form-other">
                    <div class="x-form-title">其他：</div>
                    <div  class="x-form-item">
                        其他：  其他相关设置
                    </div>
                </div>
                <div  class="x-form-submit x-form-item">
                    <input type="submit" name="submit" value="提交" class="submit" />
                </div>

            </form>
        </div>
        <p>规则:</p>
    </div>
</div>



<?php

include "layout_footer.php";
?>


