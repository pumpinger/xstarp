/**
 * Created by Administrator on 2016/12/29.
 */

;(function (global, $) {

    global.xProgress = function(option){
        return new xProgress(option);
    };

    var xProgress = function (option) {
        var defOpt = {
            dom:'',
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

        if(typeof this.opt.dom !== "string"){
            console.log('this.opt.dom不是"string"', this.opt.dom);
            return false;
        }
        this.dom = $(this.opt.dom);


        if(this.opt.type == 2){
            this.p3();
        }else{
            if(this.opt.type == 2){
                this.p2();
            }else{
                this.p1();
            }
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
            var _html = $('<div class="x-progress" ></div>');
            this.dom.append(_html);
            this.p = this.dom.find('.x-progress');
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
                    console.log(that);
                    if(percentage == 100 && that.option.hidden) {
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