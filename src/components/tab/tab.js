/**
 * Created by Administrator on 2017/2/17.
 */

require('./tab.scss');


$('body').on('click','.x-tab-nav li',function(){
    var i = $(this).index();
    $(this).addClass('x-active').siblings().removeClass('x-active');
    $(this).parents('.x-tab').find('.x-tab-content').eq(i).addClass('x-active').siblings().removeClass('x-active');

});


