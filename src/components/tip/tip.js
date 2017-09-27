/**
 * Created by Administrator on 2017/2/17.
 */


require('./tip.scss');


$('body').on('mouseover','.x-tip',function(){
    var self = $(this);

    var content = self.attr("data-tip");


    var htmlDom = $("<div class='x-tip-dialog'>"+content+"</div>div>");


    console.log(content);


    // self.on("mouseenter",function(){
    //     self.append( htmlDom );
    //     var top = htmlDom.outerHeight() + parseInt(htmlDom.find(".x-tip-cor").css("border-width"));
    //     htmlDom.css({"left":0,"top":-top,"display":"block"});
    //     htmlDom.stop().animate({ "top" : -top ,"opacity" : 1},300);
    // });
    //
    // self.on("mouseleave",function(){
    //     iTime = setTimeout(function(){
    //         htmlDom.remove();
    //     },500);
    // });
    //
    // $('body').on("mouseenter",'.x-tip-dialog',function(){
    //     clearTimeout(iTime);
    // });


});





