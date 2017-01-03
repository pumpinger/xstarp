/**
 * Created by Administrator on 2016/12/29.
 */

;(function (global, $) {

    global.xProgress = function (option) {
        return new xProgress(option);
    };

    var xProgress = function (option) {
        var defOpt = {
            wrap: '.x-progress-wrap',
            pclass: 'x-progress-bar',
            width:''
        };

        this.opt = $.extend(true, {}, defOpt, option);

        this.wrap = $(this.opt.wrap);

        this.start();

        return this;
    };

    xProgress.prototype = {
        start: function () {
            this._init();
            this._observer(this.opt,'width');
        },

        _init: function () {
            this.p = $('<div class="' + this.opt.pclass + '" ></div>');
            this.wrap.append(this.p);
            this._progress(this.opt.width);
        },

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