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
        this.root = $(this.option.dom);

        this._init();

        return this;
    };

    xProgress.prototype = {
        _init: function () {
            var _html = $('<div class="x-progress" ></div>');
            this.root.append(_html);
            this.p = this.root.find('.x-progress');
            if(this.option.type == 2){
                this.p2();
            }else{
                this.p1();
            }
        },
        p1: function () {
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
        },
        p2: function () {
            
        }

    };

    window.xProgress = function(option){
        return new xProgress(option);
    };


    return xProgress;
})(window, jQuery);