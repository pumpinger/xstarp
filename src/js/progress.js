/**
 * Created by Administrator on 2016/12/29.
 */

;(function (global, $) {

    global.xProgress = function (option) {
        return new xProgress(option);
    };

    var xProgress = function (option) {
        var defOpt = {
            wrap: '',//调用progress的地方
            pselector: '.x-progress',
            type: 1,//
            width:'',
            duration:'',
            style: [{width: '10%'}, {width: '100%'}, {visibility: 'visible'}],
            animate:[],
            oninit: function () {
            },
            onstart: function () {
            },
            onprogress: function () {
            },
            onend: function () {
            }
        };

        if (typeof option !== "object") {
            console.log('option不是"object"', option);
            return false;
        }
        this.opt = $.extend(true, {}, defOpt, option);

        if (!this.opt.wrap) {
            console.log('opt.wrap不能为空', this.opt.wrap);
            return false;
        }
        this.dom = $(this.opt.wrap.toString());


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
            this._observer(this.opt,'width');
        },
        p2: function () {
            this._init();
            this._start();
            this._progress();
            this._end();
            console.log('p2');
        },

        p3: function () {
            this._init();
            this._start();
            this._progress();
            this._end();
        },

        _init: function () {
            this.p = $('<div class="' + 'x-progress-' + this.opt.pid + '" ></div>');
            this.dom.append(this.p);
            this.opt.oninit();
        },
        _start: function () {
            this.opt.onstart();
        },
        _progress: function (next, old) {
            this.p.animate({width: old}, 100);
            this.p.animate({width: next}, this.opt.duration);
            this.opt.onprogress();
        },
        _end: function () {
            this.opt.onend();
        },

        _observer: function (obj, k) {
            var that = this;
            var old = obj[k];
            Object.defineProperty(obj, k, {
                enumerable: true,
                configurable: true,
                get: function () {
                    return temp;
                },
                set: function (next) {
                    if (next !== old) {
                        that._progress(value, old);
                    }
                    old = next;
                }
            })
        }

    };
})(window, jQuery);