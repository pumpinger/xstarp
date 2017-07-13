/**
 * Created by Administrator on 2017/2/17.
 */

require('./tab.scss');

// var  $ = require('jquery');

$('body').on('click','.x-tab-nav li',function(){
    var i = $(this).index();
    $(this).addClass('x-active').siblings().removeClass('x-active');
    $('.x-tab-content').eq(i).addClass('x-active').siblings().removeClass('x-active');
});


