/**
 * Created by Administrator on 2017/2/17.
 */

require('./form.scss');



$('body').on('click','.x-form-radio',function(){
    $(this).addClass('x-checked').siblings().removeClass('x-checked');
});

$('body').on('click','.x-form-checkbox',function(){
    console.log($(this).find("input").is(':checked'));
    if($(this).find("input").is(':checked')){
        $(this).addClass('x-checked');
    }else{
        $(this).removeClass('x-checked')
    }
});



$('body').on('click','.x-form-switch',function(){
    if($(this).find("input").is(':checked')){
        $(this).addClass('x-form-onswitch');
        $(this).find('span').text('开启');
    }else{
        $(this).removeClass('x-form-onswitch');
        $(this).find('span').text('关闭');
    }
});




//plug的表单




window.xFormSubmit = function (option) {


    var form = option.form;
    var success = option.success;
    var url = option.url?option.url:form.attr('action');

    var data = form.serializeArray();

    $.ajax({
        url: url,
        data:data,
        dataType:'json',
        type:'POST',
        success: function(data){
            success(data);
        },
        error: function (status,msg){
            xFormError(msg,status);
        }
    });
};

window.xFormError = function (msg) {
    if(msg){
        $('.x-form-item-error').show();
        $('.x-form-item-error p').html(msg);
    }else{
        $('.x-form-item-error').hide();

    }

};