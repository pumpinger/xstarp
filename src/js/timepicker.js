/**
 * Created by fizz on 2017/12/30.
 *
 */
;(function(window, $){
    var VERSION = '0.9',
        defaults,
        template,
        timePicker;

    // 默认配置项
    defaults = {
        // type of timePicker
        timePicker      : false, // default option; only pick time
        timeDatePicker  : false, // pick time & date
        datePicker      : false, // only pick date
        dataRangePicker : false, // pick date range
        //
        startTime: '',
        endTime: '',
        startDate: '',
        endDate: '',
        // other
        lang: 'zh',
        // events
        beforeShow: '',
        onShow: '',
        afterShow: '',


    };

    template = '';

    /**
     * init a timePicker
     * @constructor
     * @param {Object} elem : the dom element.
     * @param {Object} options : user-defined options
     * */
    var TimePicker = function (elem, options) {
        this.el = elem;
        this.$el = $(elem);

        this.opts = $.extend(defaults, options);

        if(this.opts.startDate) {
            this.startDate = this.opts.startDate;
        }

        this.init();

    };

    timePicker = TimePicker;

    timePicker.prototype = {
        VERSION: VERSION,
        init: function () {
            console.log(123);
            this.bindBaseEvent();
        //    todo
        //    1.依据选项构建一个基础模版
        //    2.添加到元素相应的位置
        //    3.绑定事件: focus、afterClick
        },
        setPosition: function () {},

        // 实例的方法
        show: function () {},
        hide: function () {},
        clear: function () {},
        reset: function () {},
        update: function () {},
        date: function () {},
        destroy: function () {},

        bindBaseEvent: function () {
            console.log('bindBaseEvent');
        }
    };
    // Utils

    // return timePicker object instance
    $.fn.timePicker = function (options) {
        // 这里只能有一个元素传进来
        return new timePicker(this[0],options);
    };

    $.fn.timePicker.Constructor = TimePicker;

    // 语言
    $.fn.timePicker.lang = {
        zh: {
            days: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            daysShort: ['日', '一', '二', '三', '四', '五', '六'],
            daysMin: ['日', '一', '二', '三', '四', '五', '六'],
            months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            monthsShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            today: '今天',
            clear: '清除',
            dateFormat: 'yyyy-mm-dd',
            timeFormat: 'hh:ii',
            firstDay: 1
        }
    };

    // todo 自动给添加特定类初始化

    if ( typeof exports === 'object' ) {
        module.exports = timePicker;
    } else {
        window.classie = timePicker;
    }
})(window,jQuery);