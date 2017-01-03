/**
 * Created by Administrator on 2016/12/29.
 */

;(function (global, $) {

    global.xProgress = function(option){
        return new xProgress(option);
    };

    var xProgress = function (option) {
        var defOpt = {
            wrap:'',
            pid:1,
            type:1,
            style:'',
            start:'',
            progress:'',
            end:'',
            hidden:false,
            oninit:function () {},
            onstart:function () {},
            onprogress:function () {},
            onend:function () {}
        };

        if(typeof option !== "object"){
            console.log('option不是"object"', option);
            return false;
        }
        this.opt = $.extend(true, {}, defOpt, option);

        if(typeof this.opt.wrap !== "string"){
            console.log('this.opt.wrap不是"string"', this.opt.wrap);
            return false;
        }
        this.dom = $(this.opt.wrap);


        switch (this.opt.type){
            case 1:this.p1();break;
            case 2:this.p2();break;
            case 3:this.p3();break;
            default:this.p1();
        }

        return this;
    };

    xProgress.prototype = {
        p1: function () {
            this._init();
            this._start();
            this._progress();
            this._end();
        },
        p2: function () {
            this._init();
            this._start();
            this._progress();
            this._end();
        },

        p3: function () {
            this._init();
            this._start();
            this._progress();
            this._end();
        },

        _init: function () {
            var pidstr = 'x-progress' + this.opt.pid;
            var _html = $('<div class="' + pidstr +'" ></div>');
            this.dom.append(_html);
            this.p = this.dom.find('.' + pidstr);
            this.opt.oninit();
        },
        _start:function () {
            this.opt.onstart();
        },
        _progress:function () {
            var that = this;
            $({property: 0}).animate({property: 100}, {
                duration: 3000,
                step: function() {
                    var percentage = Math.round(this.property);
                    that.p.css({'width': percentage+"%"});
                    if(percentage == 100 && that.opt.hidden) {
                        that.p.hide();
                    }
                }
            });
            this.opt.onprogress();
        },
        _end:function () {
            this.opt.onend();
        }
    };

})(window, jQuery);