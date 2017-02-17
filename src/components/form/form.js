/**
 * Created by Administrator on 2017/2/17.
 */

require('./form.scss');

$('.x-form-radio').click(function(){
    $(this).addClass('x-checked').siblings().removeClass('x-checked');
});


$('.x-form-checkbox').click(function(){
    if($(this).find("input").is(':checked')){
        $(this).addClass('x-checked');
    }else{
        $(this).removeClass('x-checked')
    }
});


$('.x-form-switch').click(function(){
    if($(this).find("input").is(':checked')){
        $(this).addClass('x-form-onswitch');
    }else{
        $(this).removeClass('x-form-onswitch')
    }
});