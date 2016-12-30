/**
 * Created by Administrator on 2016/12/29.
 */

;(function (window, $) {
    var xProgress = function (option) {
        console.log(option);
        this.option = option;
        this.dom = option.dom;
        this._init();
        return this;
    };

    xProgress.prototype = {
        _init: function () {
            this.dom.css(this.option.style.end);
        }
    };

    window.xProgress = function(option){
        return new xProgress(option);
    };


    return xProgress;
})(window, jQuery);