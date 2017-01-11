/**
 * Created by Administrator on 2017/1/9.
 */
$.validator.setDefaults({
    debug: true,
    submitHandler: function () {
        alert("验证通过，提交成功!");
    }
});