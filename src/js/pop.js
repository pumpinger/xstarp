
function xPop(type,option) {
    var markDom;
    var popDom;
    var mainDom;
    var closeDom;
    var contentDom;
    var buttonDom;

    var defaultoption = {
        width: 300,
        content: '',
        url:'',
        btn : [{
            name:'取消',
            class:'cancel x-button x-button-small'
        },{
            name:'确定',
            class:'confirm x-button x-button-small'
        }],
        offset:'',
        confirmfn:function () {},
        cancelfn:function () {}
    };
    option = $.extend(false,defaultoption,option);//合并文件：$.extend(deep,obj1,obj2)  $.fn.extend(src)

    // 初始弹窗
    function initpop() {
        $('body').css({overflow:'hidden'});
        markDom=$('<div'+' '+'class='+'markDom>'+'</div>');
        markDom.css({
            position:'fixed',
            width:'100%',
            height:'100%',
            background:'rgba(0,0,0,0.3)',
            zIndex:'20',
            top:0,
            left:0
        });
        markDom.appendTo('body');
        markDom.click(function (){
            onClose();
        });

        //弹窗pop
        popDom=$('<div'+' '+'class='+'popupDom>'+'</div>');
        popDom.css({
            position:'fixed',
            width:'100%',
            top:'50%',
            marginTop:'-100px',
            zIndex:'30'
        });
        if(option.url){
            popDom.css({top:'30%'});
        }
        if(option.offset == 't'){
            popDom.css({'top':'8px','marginTop':0})
        }
        else if(option.offset == 'r'){
            popDom.css({'width':'auto','right':'8px'})
        }
        else if(option.offset == 'rb'){
            popDom.css({'width':'auto','right':'8px','bottom':'5px','top':'auto'})
        }
        popDom.appendTo('body');


        //弹窗
        mainDom=$('<div class="mainDom"></div>');
        mainDom.css({
            width:option.width,
            margin:'0 auto',
            position:'relative',
            boxShadow:'0px 1px 8px 0px #000',
            background:'#fff',
            padding:'5px 10px 40px',
            height:option.height
        });
        mainDom.appendTo(popDom);


        //关闭按钮
        closeDom=$("<img src='../xstarp/src/img/popup-close.png' class='close'>");
        closeDom.css({
            width:32,
            position:'absolute',
            padding:'10px',
            right:'-20px',
            top:'-20px',
            cursor:'pointer'
        });
        closeDom.appendTo(mainDom);
        closeDom.click(function (){
            onClose();
        });
    }

    /*关闭函数*/
    function onClose(){
        popDom.remove();
        markDom.remove();
        $('body').css({overflow:'auto'});
    }


    function alert(option) {
        initpop(option);
        contentDom = $('<div><h3 class="pop-title"></h3>'+
            '<div class="pop-content"></div></div>');
        contentDom.appendTo(mainDom);

        contentDom.find('.pop-title').html(option.title);
        contentDom.find('.pop-content').html(option.context);

        var btn= contentDom.find('.pop-button button');
        btn.html(option.btn);
        if (option.btn){
            buttonDom = $('<div class="pop-button"><button class="x-button-small x-button">确定</button></div>');
            buttonDom.css({
                display: 'inline-block',
                float: 'right',
                margin: '5px'
            });
            buttonDom.appendTo(contentDom);
        }
        $('.pop-button').find('button').click(function () {
            onClose();
        })
    }
    function tip(option) {
        initpop(option);
        contentDom = $('<div class="pop_content">'+
            '<div class="pop-content"></div></div>');
        contentDom.appendTo(mainDom);

        $('.pop_content').find('.pop-content').html(option.context);

        if (option.time){
            setTimeout(function () {
                onClose();
            },option.time)
        }
    }
    function confir(option) {
        initpop(option);
        contentDom = $('<div><h3 class="pop-title">提示</h3>' +
            '<div class="pop-content"></div>' + '</div>');
        contentDom.appendTo(mainDom);
        contentDom.find('.pop-content').html(option.context);

        var btn= contentDom.find('.pop-button button');
        btn.html(option.btn);

        if (option.btn) {
            $.each(option.btn, function (i) {
                buttonDom = $('<div class="pop-button"><button class="' + option.btn[i].class + ' x-button-small x-button">' + option.btn[i].name + '</button></div>');
                buttonDom.css({
                    display: 'inline-block',
                    float: 'right',
                    margin: '5px'
                });
                buttonDom.appendTo(contentDom);

                $('.pop-button').find('button').eq(i).click(function () {
                    if($(this).hasClass('cancel')){
                        if(typeof option.cancelfn == 'function'){
                            option.cancelfn();
                            onClose();
                        }
                    }
                    if($(this).hasClass('confirm')){
                        if(typeof option.confirmfn == 'function'){
                            option.confirmfn();
                        }
                    }
                })
            });
        }

    }

    function open(option) {
        initpop(option);
        contentDom = $('<div><h3 class="pop-title"></h3>'+
            '<div class="pop-content"></div></div>');
        contentDom.appendTo(mainDom);

        contentDom.find('.pop-title').html(option.title);

        closeDom.click(function () {
            alert('确定关闭弹窗？');
        });

        if(!option.url){
            contentDom.find('.pop-content').html(option.context);
        }else{
            contentDom.find('.pop-content').css({height:'555px',overflow:'auto'});
            $.ajax({
                url:option.url,
                type:'get',
                success:function (data) {
                    contentDom.find('.pop-content').html(data);
                }
            })
        }

        if(option.btn){
            $.each(option.btn,function(i){
                buttonDom =$('<div class="pop-button"><button class="'+option.btn[i].class+' x-button x-button-small">'+option.btn[i].name+'</button></div>');
                buttonDom.css({
                    display: 'inline-block',
                    float: 'right',
                    margin: '5px',
                    cursor:'pointer'
                });
                buttonDom.appendTo(contentDom);

                $('.pop-button').find('button').eq(i).click(function () {
                    if($(this).hasClass('cancel')){
                        if(typeof option.cancelfn == 'function'){
                            option.cancelfn();
                        }
                    }
                    if($(this).hasClass('confirm')){
                        if(typeof option.confirmfn == 'function'){
                            option.confirmfn();
                        }
                    }
                })
            });
        }
    }
    function custom(option) {
        initpop(option);
        contentDom = $('<div><h3 class="pop-title"></h3>'+
            '<div class="pop-content"></div></div>');
        contentDom.appendTo(mainDom);

        contentDom.find('.pop-title').html(option.title);
        contentDom.find('.pop-content').html(option.context);

        if(option.btn){
            $.each(option.btn,function(i,n){
                buttonDom=$('<div class="pop-button"><button class="'+option.btn[i].class+' x-button x-button-small">'+option.btn[i].name+'</button></div>');
                buttonDom.css({
                    display: 'inline-block',
                    float: 'right',
                    margin: '5px',
                    cursor:'pointer'
                });
                buttonDom.appendTo(contentDom);

                $('.pop-button').find('button').eq(i).click(function () {
                    if (n.fn) {
                        n.fn();
                        if(n.isClose == true){
                            onClose();
                        }
                    }
                });
            });
        }
    }
    function prompt(option) {
        initpop(option);
        contentDom = $('<div><h3 class="pop-title"></h3>'+
            '<textarea class="pop-content" style="width: 95%;"></textarea></div>');
        contentDom.appendTo(mainDom);

        contentDom.find('.pop-title').html(option.title);

        if(option.btn){
            $.each(option.btn,function(i){
                buttonDom =$('<div class="pop-button"><button class="'+option.btn[i].class+' x-button x-button-small">'+option.btn[i].name+'</button></div>');
                buttonDom.css({
                    display: 'inline-block',
                    float: 'right',
                    margin: '5px',
                    cursor:'pointer'
                });
                buttonDom.appendTo(contentDom);

                $('.pop-button').find('button').eq(i).click(function () {
                    if($(this).hasClass('cancel')){
                        if(typeof option.cancelfn == 'function'){
                            option.cancelfn();
                        }
                    }
                    if($(this).hasClass('confirm')){
                        if(typeof option.confirmfn == 'function'){
                            option.confirmfn();
                        }
                    }
                })
            });
        }
    }
    function message(option) {
        initpop(option);
        contentDom = $('<div><h3 class="pop-title">信息</h3>'+
            '<div class="pop-content"></div></div>');
        contentDom.appendTo(mainDom);

        contentDom.find('.pop-title').html(option.title);
        contentDom.find('.pop-content').html(option.context);

        if(option.offset != ''){
            markDom.remove();
            closeDom.remove();
            setTimeout(function () {
                onClose();
            },1000);
        }
        $('.pop-button').find('button').click(function () {
            onClose();
        })
    }

    if(type == 'alert'){
        alert(option);
    }
    else if(type == 'tip'){
        tip(option);
    }
    else if(type == 'confirm'){
        confir(option);
    }
    else if(type == 'open'){
        open(option);
    }
    else if(type == 'custom'){
        custom(option);
    }
    else if(type == 'prompt'){
        prompt(option);
    }
    else if(type == 'message'){
        message(option);
    }
}
