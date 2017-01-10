<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/1/9
 * Time: 11:25
 */
include 'layout_header.php';
?>





<style>
    .x-form-label {
        display: inline-block;
        width: 160px;
        padding: 5px;
        line-height: 25px;
        text-align: right;
        vertical-align: top;
        font-weight: bold;
        cursor: pointer;
    }
    .x-form-label:after{
        content: ' : ';
    }
    .x-form-v input, .x-form-v textarea {
        display: inline-block;
        max-width: 200px;
        line-height: 25px;
    }

    #xsubmit, #xsignup {
        display: inline-block;
        margin: 2px 0 0 175px;
        width: 100px;
        line-height: 1.8;
    }
</style>
<script type="text/javascript" src="./lib/jquery.validate.js"></script>
<script type="text/javascript" src="./lib/jquery.validate.zh-cn.js"></script>

<form action="" class="x-form-v" id="xcommentForm">
    <fieldset>
        <legend>提交评论</legend>
        <p>
            <label class="x-form-label" for="xname">name</label>
            <input type="text" id="xname" name="name">
        </p>
        <p>
            <label class="x-form-label" for="xemail">email</label>
            <input type="email" id="xemail" name="email">
        </p>
        <p>
            <label class="x-form-label" for="xurl">url</label>
            <input type="url" id="xurl" name="url">
        </p>
        <p>
            <label class="x-form-label" for="xcomment">comment</label>
            <textarea id="xcomment" name="comment"></textarea>
        </p>
        <p>
            <input id='xsubmit' type="submit" value="Comment">
        </p>
    </fieldset>
</form>
<script>
    $.validator.setDefaults({
        submitHandler: function () {
            alert("验证通过，提交成功!");
        }
    });
    $(document).ready(function () {
        $("#xcommentForm").validate({
            rules:{
                name: {
                    required: true,
                    minlength: 2,
                    maxlength: 6
                },
                email: {
                    required: true,
                    email: true
                },
                url: {
                    required: true,
                    url:true
                },
                comment: {
                    required: true
                }
            },
            messages:{
                name:{
                    minlength:'你名字太短了',
                    maxlength:'太长了'
                }
            }
        });
    });
</script>

<form action="" class="x-form-v" id="xsignupForm">
    <fieldset>
        <legend>用户注册</legend>
        <p>
            <label class="x-form-label" for="xfirstname">firstname</label>
            <input type="text" id="xfirstname" name="firstname">
        </p>
        <p>
            <label class="x-form-label" for="xlastname">lastname</label>
            <input type="text" id="xlastname" name="lastname">
        </p>
        <p>
            <label class="x-form-label" for="xusername">username</label>
            <input type="text" id="xusername" name="username">
        </p>
        <p>
            <label class="x-form-label" for="xpassword">password</label>
            <input type="password" id="xpassword" name="password">
        </p>
        <p>
            <label class="x-form-label" for="xconfirm_password">confirm_password</label>
            <input type="password" id="xconfirm_password" name="confirm_password">
        </p>
        <p>
            <label class="x-form-label" for="xuseremail">useremail</label>
            <input type="email" id="xuseremail" name="useremail">
        </p>
        <p>
            <label class="x-form-label" for="xcheckbox">checkbox</label>
            <input type="checkbox" id="xcheckbox" name="checkbox">
        </p>
        <p>
            <label class="x-form-label" for="xmessage">message</label>
            <textarea id="xmessage" name="xmessage"></textarea>
        </p>
        <p>
            <label class="x-form-label" for="xcheckbox2">xcheckbox2</label>
            <input type="checkbox" id="xcheckbox2" name="checkbox">
        </p>
        <p>
            <label class="x-form-label" for="xcheckbox3">xcheckbox3</label>
            <input type="checkbox" id="xcheckbox3" name="checkbox">
        </p>
        <p>
            <input id="xsignup" type="submit" name="signup" value="Signup">
        </p>
    </fieldset>

</form>
<script>
    $.validator.setDefaults({
        submitHandler: function () {
            alert("验证通过，提交成功!");
        }
    });

    $(document).ready(function () {
        $("#xsignupForm").validate({
            rules:{
                name: {
                    required: true,
                    minlength: 6
                },
                email: {
                    required: true,
                    email: true
                },
                url: {
                    required: true
                },
                comment: {
                    required: true
                }
            },
            messages:{
                name:{
                    minlength:'你名字太短了'
                }
            }
        });
    });
</script>
<?php
include 'layout_footer.php';
?>
