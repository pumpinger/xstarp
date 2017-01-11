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
            <label class="x-form-label" for="xpassword">密码</label>
            <input type="password" id="xpassword" name="password">
        </p>
        <p>
            <label class="x-form-label" for="xconfirm_password">确认密码</label>
            <input type="password" id="xconfirm_password" name="password">
        </p>
        <p>
            <label class="x-form-label" for="xlastname">姓</label>
            <input type="text" id="xlastname" name="name">
        </p>
        <p>
            <label class="x-form-label" for="xfirstname">名</label>
            <input type="text" id="xfirstname" name="name">
        </p>
        <p>
            <label class="x-form-label" for="xid">身份证号</label>
            <input type="text" id="xid" name="idcn">
        </p>
        <p>
            <label class="x-form-label" for="xage">年龄</label>
            <input type="text" id="xage" name="age">
        </p>
        <p>
            <label class="x-form-label">性别</label>
            <label for="xfemale"><input type="radio" id="xfemale" name="gender">男</label>
            <label for="xmale"><input type="radio" id="xmale" name="gender">女</label>
            <label for="xother"><input type="radio" id="xother" name="gender">未知</label>
        </p>
        <p>
            <label class="x-form-label" for="xuseremail">邮箱</label>
            <input type="email" id="xuseremail" name="email">
        </p>
        <p>
            <label class="x-form-label" for="xuserphone">手机</label>
            <input type="text" id="xuserphone" name="phone">
        </p>
        <p>
            <label class="x-form-label" for="xusertel">固定电话</label>
            <input type="text" id="xusertel" name="tel">
        </p>
        <p>
            <label class="x-form-label" for="xusertel">地址</label>
            <input type="text" id="xuseraddr" name="address">
        </p>
        <p>
            <label class="x-form-label" for="xpostid">邮编</label>
            <input type="text" id="xpostid" name="postid">
        </p>
        <p>
            <label class="x-form-label">特点一</label>
            <input type="checkbox" id="xspeciality1" name="checkbox1">
            <label for="xspeciality1">php</label>

        </p>
        <p>
            <label class="x-form-label">特点二</label>
            <input type="checkbox" id="speciality21" name="checkbox2">
            <label for="iality21">手抓羊肉</label>
            <input type="checkbox" id="speciality22" name="checkbox2">
            <label for="speciality22">老酸奶</label>
            <input type="checkbox" id="speciality23" name="checkbox2">
            <label for="speciality23">霸王肥肠</label>
            <input type="checkbox" id="speciality24" name="checkbox2">
            <label for="speciality24">土豆丝</label>
        </p>
        <p>
            <label class="x-form-label" for="xselect3">特点三</label>
            <select id="xselect3" name="select3" >
                <option value =""></option>
                <option value ="正则">正则</option>
                <option value ="表达式">表达式</option>
                <option value ="Reg">Reg</option>
                <option value ="Exp">Exp</option>
            </select>
        </p>
        <p>
            <label class="x-form-label" for="xselect4">特点四</label>
            <select id="xselect4" multiple="multiple" name="select4" >
                <option value ="JavaScript">JavaScript</option>
                <option value ="Java">Java</option>
                <option value="PHP">PHP</option>
                <option value="Python">Python</option>
                <option value="C#">C#</option>
                <option value="C++">C++</option>
                <option value="Ruby">Ruby</option>
                <option value="CSS">CSS</option>
                <option value="C">C</option>
                <option value="Objective-C">Objective-C</option>
                <option value="Shell">Shell</option>
                <option value="R">R</option>
                <option value="Perl">Perl</option>
                <option value="Scala">Scala</option>
                <option value="Go">Go</option>
                <option value="Haskell">Haskell</option>
                <option value="Swift">Swift</option>
                <option value="Matlab">Matlab</option>
                <option value="Visual Basic">Visual Basic</option>
                <option value="Groovy">Groovy</option>
            </select>
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
                user:{
                    required: true,
                    xuser: true
                },
                email: {
                    required: true,
                    xemail: true
                },
                password: {
                    required: true,
                    xpwd: true
                },
                name: {
                    required: true,
                    minlength: 6,
                    maxlength: 12,
                    xname:true
                },

                url: {
                    xurl: true
                },
            }
        });
    });
</script>
<?php
include 'layout_footer.php';
?>
