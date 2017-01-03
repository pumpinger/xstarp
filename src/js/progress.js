/**
 * Created by Administrator on 2016/12/29.
 */

;(function (global, $) {

    global.xProgress = function (option) {
        return new xProgress(option);
    };

    var xProgress = function (option) {
        var defOpt = {
            wrap: '.x-progress',
            pstyle: 'x-progress-bar x-progress-bar-min-width',
            width:'',
            duration:''
        };

        if (typeof option !== "object") {
            console.log('option不是"object"', option);
            return false;
        }
        this.opt = $.extend(true, {}, defOpt, option);

        this.dom = $(this.opt.wrap.toString());

        this.p1();

        return this;
    };

    xProgress.prototype = {
        p1: function () {
            this._init();
            this._observer(this.opt,'width');
        },

        _init: function () {
            this.p = $('<div class="' + this.opt.pstyle + '" ></div>');
            this.dom.append(this.p);
            // this._makebar(this);
        },

        // _makebar:function () {
        //     this.p = $('<div class="' + this.opt.pstyle + '" ></div>');
        //     this.dom.append(this.p);
        // },

        _observer: function (obj, k) {
            var that = this;
            var old = obj[k];
            Object.defineProperty(obj, k, {
                enumerable: true,
                configurable: true,
                get: function () {
                    return old;
                },
                set: function (next) {
                    if (next !== old) {
                        that._progress(next, old);
                    }
                    old = next;
                }
            })
        },
        _progress: function (next, old) {
            this.p.css({width: next});
        }

    };
})(window, jQuery);