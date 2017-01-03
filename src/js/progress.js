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
            pstyle: '',
            width:'',
            duration:'',
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

        this.p1();

        return this;
    };

    xProgress.prototype = {
        p1: function () {
            this._init();
            this._observer(this.opt,'width');
            this._start();
        },

        _init: function () {
            this.p = $('<div class="' + this.opt.pstyle + '" ></div>');
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
                    return next;
                },
                set: function (next) {
                    if (next !== old) {
                        that._progress(next, old);
                    }
                    old = next;
                }
            })
        }

    };
})(window, jQuery);