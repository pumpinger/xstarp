/**
 * Created by Administrator on 2016/12/20.
 */


$(document).ready(function(){

    $('.x-tab-nav li').click(function(){
        var i = $(this).index();
        $(this).addClass('x-active').siblings().removeClass('x-active');
        $('.x-tab-content').eq(i).addClass('x-active').siblings().removeClass('x-active');
    })

});
