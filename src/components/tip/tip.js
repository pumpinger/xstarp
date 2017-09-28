/**
 * Created by Administrator on 2017/2/17.
 */


require('./tip.scss');


$('body').on('mouseover','.x-tip',function(){
    var self = $(this);

    var content = self.attr("data-tip");


    var htmlDom = $("<div class='x-tip-content'>"+content+"</div>");



    $(this).after(htmlDom);


    htmlDom.css({
        top:$(this).position().top - htmlDom.outerHeight(),
        left:$(this).position().left +  ( $(this).outerWidth() - htmlDom.outerWidth() )/2,
    });


});

$('body').on('mouseout','.x-tip',function(){


    $('.x-tip-content').remove();
});





