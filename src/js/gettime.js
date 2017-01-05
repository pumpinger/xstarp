/**
 * Created by Administrator on 2017/1/5.
 */

;(function (window,$) {
    window.xTime = function (option) {
        return new Time(option);
    };
    function Time(option) {
        this._init(option);
        return this;
    }
    Time.prototype = {
        defaultOpt: {
            wrap: '.x-progress-wrap',
            pclass: 'x-progress-bar',
            tclass: 'x-progress-only',
            percentage: '2%',
            onchange: function () {console.log('onchange')}
        },
        _init: function (option) {

        },

        _makeprogress: function () {

        },

        _observer: function (obj, k) {

        },
        _progress: function (next, old) {

        }
    };

    return Time;

})(window,jQuery);