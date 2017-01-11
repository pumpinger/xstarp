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
    .x-form-v .error, .x-form-error {
        color: orangered;
    }

    .x-submit {
        display: inline-block;
        margin: 2px 0 0 175px;
        width: 100px;
        line-height: 1.8;
    }
</style>
<script type="text/javascript" src="./lib/jquery.validate.js"></script>
<script type="text/javascript" src="./lib/additional-methods.js"></script>
<script type="text/javascript" src="./lib/jquery.validate.zh-cn.js"></script>
<script type="text/javascript" src="./src/js/verify.js"></script>

<form action="" class="x-form-v" id="commentForm">
    <fieldset>
        <legend>示例一：提交评论(校验规则写在标签里)</legend>
        <p>
            <label class="x-form-label" for="cname">姓名(*)</label>
            <input id="cname" name="name" minlength="2" maxlength="6" type="text" required>
        </p>
        <p>
            <label class="x-form-label" for="cemail">E-Mail(*)</label>
            <input id="cemail" type="email" name="email" required>
        </p>
        <p>
            <label class="x-form-label" for="curl">个人网址</label>
            <input id="curl" type="url" name="url">
        </p>
        <p>
            <label class="x-form-label" for="ccomment">评论内容(*)</label>
            <textarea id="ccomment" name="comment" minlength="6" maxlength="6" required></textarea>
        </p>
        <p>
            <input class="x-submit" type="submit" value="提交">
            <label class="x-form-error"></label>
        </p>
    </fieldset>
</form>
<script>
    $(document).ready(
        $("#commentForm").validate({
            invalidHandler: function(event, validator) {
                // 'this' refers to the form
                var errors = validator.numberOfInvalids();
                if (errors) {
                    var message = errors == 1
                        ? 'You missed 1 field. It has been highlighted'
                        : 'You missed ' + errors + ' fields. They have been highlighted';
                    $(".x-form-error").html(message).show();
                } else {
                    $(".x-form-error").hide();
                }
            }
        })
    );
</script>

<form action="" class="x-form-v" id="xcommentForm">
    <fieldset>
        <legend>示例二：提交评论（校验规则写在js中）</legend>
        <p>
            <label class="x-form-label" for="xname">姓名</label>
            <input type="text" id="xname" name="name">
        </p>
        <p>
            <label class="x-form-label" for="xemail">邮箱</label>
            <input type="email" id="xemail" name="email">
        </p>
        <p>
            <label class="x-form-label" for="xurl">网址</label>
            <input type="url" id="xurl" name="url">
        </p>
        <p>
            <label class="x-form-label" for="xcomment">评论</label>
            <textarea id="xcomment" name="comment"></textarea>
        </p>
        <p>
            <input class="x-submit" type="submit" value="提交">
        </p>
    </fieldset>
</form>
<script>
    $(document).ready(function () {
        $("#xcommentForm").validate({
            rules:{
                name: {
                    required: true,
                    minlength: 2,
                    maxlength: 6,
                    xuser:true
                },
                email: {
                    required: true,
                    xemail: true
                },
                url: {
                    url:true
                },
                comment: {
                    required: true,
                    minlength: 6,
                    maxlength: 6
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
        <legend>示例三：用户注册（校验规则写在js中）</legend>
        <p>
            <label class="x-form-label" for="xusername">用户名</label>
            <input type="text" id="xusername" name="user">
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
            <label class="x-form-label" for="xlastname">姓</label>
            <input type="text" id="xlastname" name="lastname">
        </p>
        <p>
            <label class="x-form-label" for="xfirstname">名</label>
            <input type="text" id="xfirstname" name="firstname">
        </p>
        <p>
            <label class="x-form-label" for="xage">年龄</label>
            <input type="text" id="xage" name="age">
        </p>
        <p>
            <label class="x-form-label" for="">性别</label>
            <label for="female"><input type="radio" id="female" name="gender">男</label>
            <label for="male"><input type="radio" id="male" name="gender">女</label>
            <label for="other"><input type="radio" id="other" name="gender">未知</label>
        </p>
        <p>
            <label class="x-form-label" for="xuseremail">useremail</label>
            <input type="email" id="xuseremail" name="email">
        </p>
        <p>
            <label class="x-form-label" for="xcheckbox2"></label>
            <input type="checkbox" id="xcheckbox2" name="checkbox">
        </p>
        <p>
            <label class="x-form-label" for="xmessage">附加信息</label>
            <textarea id="xmessage" name="message"></textarea>
        </p>

        <p>
            <input class="x-submit" type="submit" name="signup" value="Signup">
        </p>
    </fieldset>

</form>
<script>
    $(document).ready(function () {
        $("#xsignupForm").validate({
            rules:{
                name: {
                    required: true,
                    minlength: 6,
                    maxlength: 12,
                    xname:true
                },
                email: {
                    required: true,
                    xemail: true
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
