/**
 * Created by Administrator on 2016/12/29.
 */

;(function (window, $) {
    var xProgress = function (option) {

        if(typeof option !== "object"){
            console.log('option不是"object"', option);
            return false;
        }
        this.option = option;

        if(typeof this.option.dom !== "string"){
            console.log('this.option.dom不是"string"', this.option.dom);
            return false;
        }
        this.dom = $(this.option.dom);

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