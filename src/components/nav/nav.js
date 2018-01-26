/**
 * Created by Administrator on 2017/2/17.
 */

require('./nav.scss');


//导航-侧边栏
$("body").on('click','.x-nav-sidebar  .x-nav-head',function() {

    $(this).next('ul').slideToggle(300).parent().siblings('li').find('ul').slideUp();
    $(this).toggleClass('x-active').parent().siblings('li').find('a.x-nav-head').removeClass('x-active');

    if($(this).hasClass('x-active')){
        $(this).find('i').removeClass('icon-xiangxia1').addClass('icon-xiangshang2');
        $(this).parent().siblings('li').find('i').addClass('icon-xiangxia1').removeClass('icon-xiangshang2');
    }else{
        $(this).find('i').addClass('icon-xiangxia1').removeClass('icon-xiangshang2');
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



