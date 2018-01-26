/**
 * Created by Administrator on 2017/2/17.
 */

require('./nav.scss');


//导航-侧边栏
$("body").on('click','.x-nav-sidebar  .x-nav-head',function() {



    if(  $(this).parent('.x-nav-item').hasClass('x-active')  ){
        $(this).siblings('.x-nav-childs').slideUp('slow',function (){
            $(this).parent('.x-nav-item').removeClass('x-active');
        }.bind(this));

    }else{

        $(this).siblings('.x-nav-childs').slideUp(0);
        $(this).siblings('.x-nav-childs').slideDown('slow',function (){
            $(this).parent('.x-nav-item').addClass('x-active');
        });


        $(this).parent().siblings('.x-nav-item.x-active').find('.x-nav-childs').slideUp('slow',function (){
            $(this).parent().siblings('.x-nav-item').removeClass('x-active');
        }.bind(this));
    }



});



$("body").on('click','.x-nav-sidebar  .x-nav-child',function() {

    $(this).parents('.x-nav-sidebar').find('.x-nav-child').removeClass('x-active');
    $(this).addClass('x-active');

});



//导航-水平
$('body').on('click','.x-nav-cross .x-nav-item',function(){

        $(this).siblings().removeClass('x-active');
        $(this).addClass('x-active');

});



