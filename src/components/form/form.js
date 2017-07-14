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