/**
 * Created by Administrator on 2017/2/17.
 */


require('./tip.scss');

$.fn.extend({
    hoverTips : function (){
        var self = $(this);
        var content = self.attr("data-tips");
        var htmlDom = $("<div class='x-tip-dialog'>")
            .html("<p class='x-tip-content'></p>"
                + "<p class='x-tip-cor'></p>");
        htmlDom.find(".x-tip-content").html( content );

        self.on("mouseenter",function(){
            $("body").append( htmlDom );
            var left = self.offset().left;
            var top = self.offset().top - htmlDom.outerHeight() - parseInt(htmlDom.find(".x-tip-cor").css("border-width"));
            htmlDom.css({"left":left,"top":top - 10,"display":"block"});
            htmlDom.stop().animate({ "top" : top ,"opacity" : 1},300);
        });
        $('body').on("mouseleave",'.x-tip-dialog',function(){
            var top = parseInt(htmlDom.css("top"));
            htmlDom.stop().animate({ "top" : top - 10 ,"opacity" : 0},300,function(){
                htmlDom.remove();
            });
        })
    }
});

$(".x-tip").hoverTips();