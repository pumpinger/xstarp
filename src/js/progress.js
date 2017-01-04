/**
 * Created by Administrator on 2016/12/29.
 */

;(function (window, $) {

    window.xProgress = function (option) {
        return new xProgress(option);
    };

    var xProgress = function (option) {
        var defOpt = {
            wrap: '.x-progress-wrap',
            pclass: 'x-progress-bar',
            tclass: 'x-progress-bar-only',
            percentage:'2%',
            onchange:function () {console.log('onchange')}
        };

        this.opt = $.extend(true, {}, defOpt, option);

        this._init();

        return this;
    };

    xProgress.prototype = {
        _init: function () {
            this.wrap = $(this.opt.wrap);
            this.percentage = this.opt.percentage;

            this.p = $('<div class="' + this.opt.pclass + '" ></div>');
            this.t = $('<span class="' + this.opt.tclass + '" ></span>');

            this.p.append(this.t);
            this.wrap.append(this.p);

            this._progress(this.percentage);
            this._observer(this,'percentage');
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
                        this.opt.onchange();
                    }
                    old = next;
                }
            })
        },
        _progress: function (next, old) {
            this.p.css({width: next});
            this.t.text(next);
        }

    };
})(window, jQuery);