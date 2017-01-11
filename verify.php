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


<div class="x-panel">
    <div class="x-panel-title">进度条</div>
    <div class="x-panel-content">
        <p class="x-color-blue">示例：</p>
        <pre><code class="language-html"><textarea>
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
                        &lt;textarea id="ccomment" name="comment" minlength="6" maxlength="6" required>&lt;/textarea>
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
                        &lt;textarea id="xcomment" name="comment">&lt;/textarea>
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
                        <label class="x-form-label" for="xuserurl">网址</label>
                        <input type="url" id="xuserurl" name="url">
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
                        &lt;textarea id="xmessage" name="message">&lt;/textarea>
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
                                minlength: 2,
                                maxlength: 12,
                                xuser: true
                            },
                            password: {
                                required: true,
                                minlength: 8,
                                maxlength: 12,
                                xpwd: true
                            },
                            name: {
                                required: true,
                                minlength: 2,
                                maxlength: 8,
                                xname:true
                            },
                            idcn: {
                                required: true,
                                xidcn: true
                            },
                            age: {
                                required: true,
                                range:[0,99]
                            },
                            gender: {
                                required: true
                            },
                            email: {
                                required: true,
                                xemail: true
                            },
                            url: {
                                required: true,
                                xurl: true
                            },
                            phone: {
                                required: true,
                                xphone: true
                            },
                            tel: {
                                required: true,
                                xtel: true
                            },
                            address: {
                                required: true,
                                xname: true
                            },
                            postid: {
                                required: true,
                                xpostid: true
                            },

                            checkbox1: {
                                required: true,
                            },
                            checkbox2: {
                                required: true,
                                minlength: 2,
                                maxlength: 3
                            },
                            select3: {
                                required: true,
                                minlength: 2
                            },
                            select4: {
                                required: true,
                                minlength: 2,
                                maxlength: 3
                            },
                            message: {
                                minlength: 6,
                                maxlength: 8
                            }
                        }
                    });
                });
            </script>
        </textarea></code></pre>

        <p class="x-color-blue">效果:</p>
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
                    <label class="x-form-label" for="xuserurl">网址</label>
                    <input type="url" id="xuserurl" name="url">
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
                            minlength: 2,
                            maxlength: 12,
                            xuser: true
                        },
                        password: {
                            required: true,
                            minlength: 8,
                            maxlength: 12,
                            xpwd: true
                        },
                        name: {
                            required: true,
                            minlength: 2,
                            maxlength: 8,
                            xname:true
                        },
                        idcn: {
                            required: true,
                            xidcn: true
                        },
                        age: {
                            required: true,
                            range:[0,99]
                        },
                        gender: {
                            required: true
                        },
                        email: {
                            required: true,
                            xemail: true
                        },
                        url: {
                            required: true,
                            xurl: true
                        },
                        phone: {
                            required: true,
                            xphone: true
                        },
                        tel: {
                            required: true,
                            xtel: true
                        },
                        address: {
                            required: true,
                            xname: true
                        },
                        postid: {
                            required: true,
                            xpostid: true
                        },

                        checkbox1: {
                            required: true,
                        },
                        checkbox2: {
                            required: true,
                            minlength: 2,
                            maxlength: 3
                        },
                        select3: {
                            required: true,
                            minlength: 2
                        },
                        select4: {
                            required: true,
                            minlength: 2,
                            maxlength: 3
                        },
                        message: {
                            minlength: 6,
                            maxlength: 8
                        }
                    }
                });
            });
        </script>

        <p class="x-color-blue">规则:</p>
        <table class="x-table x-table-interval">
            <tbody><tr>
                <th width="10%">序号</th>
                <th width="30%">规则</th>
                <th width="60%">描述</th>
            </tr>
            <tr>
                <td>1</td>
                <td>required:true</td>
                <td>必须输入的字段。</td>
            </tr>
            <tr>
                <td>2</td>
                <td>remote:"check.php"</td>
                <td>使用 ajax 方法调用 check.php 验证输入值。</td>
            </tr>
            <tr>
                <td>3</td>
                <td>email:true</td>
                <td>必须输入正确格式的电子邮件。</td>
            </tr>
            <tr>
                <td>4</td>
                <td>url:true</td>
                <td>必须输入正确格式的网址。</td>
            </tr>
            <tr>
                <td>5</td>
                <td>date:true</td>
                <td>必须输入正确格式的日期。日期校验 ie6 出错，慎用。</td>
            </tr>
            <tr>
                <td>6</td>
                <td>dateISO:true</td>
                <td>必须输入正确格式的日期（ISO），例如：2009-06-23，1998/01/22。只验证格式，不验证有效性。</td>
            </tr>
            <tr>
                <td>7</td>
                <td>number:true</td>
                <td>必须输入合法的数字（负数，小数）。</td>
            </tr>
            <tr>
                <td>8</td>
                <td>digits:true</td>
                <td>必须输入整数。</td>
            </tr>
            <tr>
                <td>9</td>
                <td>creditcard:</td>
                <td>必须输入合法的信用卡号。</td>
            </tr>
            <tr>
                <td>10</td>
                <td>equalTo:"#field"</td>
                <td>输入值必须和 #field 相同。</td>
            </tr>
            <tr>
                <td>11</td>
                <td>accept:</td>
                <td>输入拥有合法后缀名的字符串（上传文件的后缀）。</td>
            </tr>
            <tr>
                <td>12</td>
                <td>maxlength:5</td>
                <td>输入长度最多是 5 的字符串（汉字算一个字符）。</td>
            </tr>
            <tr>
                <td>13</td>
                <td>minlength:10</td>
                <td>输入长度最小是 10 的字符串（汉字算一个字符）。</td>
            </tr>
            <tr>
                <td>14</td>
                <td>rangelength:[5,10]</td>
                <td>输入长度必须介于 5 和 10 之间的字符串（汉字算一个字符）。</td>
            </tr>
            <tr>
                <td>15</td>
                <td>range:[5,10]</td>
                <td>输入值必须介于 5 和 10 之间。</td>
            </tr>
            <tr>
                <td>16</td>
                <td>max:5</td>
                <td>输入值不能大于 5。</td>
            </tr>
            <tr>
                <td>17</td>
                <td>min:10</td>
                <td>输入值不能小于 10。</td>
            </tr>
            </tbody></table>
    </div>
</div>






<?php
include 'layout_footer.php';
?>
