/**
 * Created by Administrator on 2017/1/6.
 */


// require('../format/format.js');




;(function () {



    //todo  应该去  加载等待插件  require('../loading/loading.js');  还有弹窗



    $('body').on('click','.x-ajax-del',function(){
        $(".x-ajax-del").attr("disabled","disabled");
        var url = $(this).data('url');
        $.ajax({
            url: url,
            dataType: 'json',
            success: function(data){
                $(".x-ajax-del").removeAttr("disabled");
                if(data.ok ){//操作成功
                    // xPopUp('prompt',{content:'操作成功'},2000);

                    var refreshDomStr;
                    if($(this).data('refresh')){
                        refreshDomStr =$(this).data('refresh');
                    }else{
                        refreshDomStr ='.x-table';
                    }

                    var refreshUrl = location.href;
                    $.get(refreshUrl,function(data){
                        $(refreshDomStr).html($(data).find(refreshDomStr).html());
                    });

                }else{
                    // xPopUp('prompt',{content:'操作失败'},2000);
                }
            },
            error: function (data){
                $(".x-ajax-del").removeAttr("disabled");
                // xPopUp('prompt',{content:'操作失败'},2000);
            }
        });
    });
    $('body').on('click','.x-ajax-op',function(){
        $(".x-ajax-del").attr("disabled","disabled");
        var url = $(this).data('url');
        $.ajax({
            url: url,
            dataType: 'json',
            success: function(data){
                $(".x-ajax-del").removeAttr("disabled");

                if(data.ok === 'ok'){
                    // xPopUp('prompt',{content:'操作成功'},2000);
                }else{
                    $(".x-ajax-del").removeAttr("disabled");
                    // xPopUp('prompt',{content:'操作失败'},2000);
                }
            },
            error: function (){
                $(".x-ajax-del").removeAttr("disabled");
                xPopUp('prompt',{content:'操作失败'},2000);
            }
        });
    });

})();