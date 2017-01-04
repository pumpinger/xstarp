/**
 * Created by fizz on 2017/12/30.
 *
 */
;(function(window, $){
    var VERSION = '0.9',
        defaults,
        template,
        $body, // 存放这个插件的容器
        $timepickerContainer, // 在 $body 中的容器。存在多个timePicker的实例时需要互斥
        timePicker;

    // 默认配置项
    defaults = {
        // type of timePicker
        // timePicker      : false, //  only pick time
        // timeDatePicker  : false, // pick time & date
        // datePicker      : false, // only pick date;default
        // dataRangePicker : false, // pick date range
        pickType: 'datePicker',
        //
        startTime: '',
        endTime: '',
        startDate: '',
        endDate: '',

        $container: '',
        view: 'days', // three type: days/months/years
        // other
        lang: 'zh',
        // events
        beforeShow: '',
        onShow: '',
        afterShow: '',

        beforeHide: '',
        onHide: '',
        afterHide: '',

        onChange: '',
        onApply: ''
    };

    template =  '<div class="timepicker">'+
                    '<div class="timepicker-nav"></div>'+
                    '<div class="timepicker-content"></div>'+
                '</div>';

    /**
     * 初始化一个timePicker，准备init之前的所有东西。
     * @constructor
     * @param {Object} elem : the dom element.
     * @param {Object} options : user-defined options
     * */
    var TimePicker = function (elem, options) {
        this.el = elem;
        this.$el = $(elem);
        this.$container = $('body');
        this.$instance = $('timepicker');

        this.opts = $.extend(defaults, options);

        if (this.opts.startDate) {
            this.startDate = this.opts.startDate;
        }

        if (this.el.nodeName == 'INPUT') {
            this.elIsInput = true;
        }

        $body = $('body');

        // 真正的初始化动作
        this.init();
    };

    timePicker = TimePicker;

    timePicker.prototype = {
        VERSION: VERSION,

        init: function () {
            this._buildBaseHtml();
            this._buildView();
            this.bindBaseEvent();
        },
        setPosition: function () {},

        // 实例的方法
        show: function () {
            $('.timepicker').css('display', 'block');
        },
        hide: function () {
            $('.timepicker').css('display', 'none');
        },
        clear: function () {},
        reset: function () {},
        update: function () {},
        date: function () {},
        destroy: function () {},

        _buildBaseHtml: function () {
            this._buildTimePickerContainer();
            this.$timePiacker = $(template).appendTo($timepickerContainer);
            this.$content = $('.timepicker-content', this.$timePiacker);
            this.$nav = $('.timepicker-nav', this.$timePiacker);
        },

        _buildView: function () {

            this.$content.append(content);
            this.$nav.append(nav);
        },

        _buildTimePickerContainer: function () {
            $body.append('<div class="time-picker-container" id="time-picker-container"></div>');
            $timepickerContainer = $('#time-picker-container');
        },

        bindBaseEvent: function () {
            console.log(this);
            var that = this;
            this.$content.on('click', '.timepicker-day-cell', function (e) {
                console.log(that.el.value);
                that.$content.find('.timepicker-day-cell').removeClass('active');
                this.classList.add('active');
                that.el.value = '2016-12-31';
            });
        }
    };
    // Utils
    function elemHide(elem) {
        elem.style.display = 'none';
    }
    function elemShow(elem, argu) {
        if(argu) {
            elem.style.display = argu;
        } else {
            elem.style.display = 'block';
        }
    }

    // return timePicker object instance
    $.fn.timePicker = function (options) {
        // 这里只能有一个元素传进来
        return new timePicker(this[0],options);
    };

    $.fn.timePicker.Constructor = TimePicker;

    // 语言
    $.fn.timePicker.lang = {
        zh: {
            days        : ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            daysShort   : ['日', '一', '二', '三', '四', '五', '六'],
            daysMin     : ['日', '一', '二', '三', '四', '五', '六'],
            months      : ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            monthsShort : ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            today       : '今天',
            clear       : '清除',
            dateFormat  : 'yyyy-mm-dd',
            timeFormat  : 'hh:ii',
            firstDay    : 1
        }
    };

    // todo 自动给添加特定类初始化

    if ( typeof exports === 'object' ) {
        module.exports = timePicker;
    } else {
        window.classie = timePicker;
    }

    var content =
        '<div class="timepicker-days" >'+
        '<div class="timepicker-days-titles">'+
        '<div class="timepicker-days-title weekend">日</div>'+
        '<div class="timepicker-days-title">一</div>'+
        '<div class="timepicker-days-title">二</div>'+
        '<div class="timepicker-days-title">三</div>'+
        '<div class="timepicker-days-title">四</div>'+
        '<div class="timepicker-days-title">五</div>'+
        '<div class="timepicker-days-title weekend">六</div>'+
        '</div>'+
        '<div class="timepicker-days-cells">'+
        '<div class="timepicker-day-cell">1</div>'+
        '<div class="timepicker-day-cell">2</div>'+
        '<div class="timepicker-day-cell">3</div'+
        '<div class="timepicker-day-cell">4</div>'+
        '<div class="timepicker-day-cell">5</div>'+
        '<div class="timepicker-day-cell">6</div>'+
        '<div class="timepicker-day-cell">7</div>'+
        '<div class="timepicker-day-cell">8</div>'+
        '<div class="timepicker-day-cell">9</div>'+
        '<div class="timepicker-day-cell">10</div>'+
        '<div class="timepicker-day-cell">11</div>'+
        '<div class="timepicker-day-cell">12</div>'+
        '<div class="timepicker-day-cell">13</div>'+
        '<div class="timepicker-day-cell">14</div>'+
        '<div class="timepicker-day-cell">15</div>'+
        '<div class="timepicker-day-cell">16</div>'+
        '<div class="timepicker-day-cell">17</div>'+
        '<div class="timepicker-day-cell">18</div>'+
        '<div class="timepicker-day-cell">19</div>'+
        '<div class="timepicker-day-cell">20</div>'+
        '<div class="timepicker-day-cell">21</div>'+
        '<div class="timepicker-day-cell">22</div>'+
        '<div class="timepicker-day-cell">23</div>'+
        '<div class="timepicker-day-cell">24</div>'+
        '<div class="timepicker-day-cell">25</div>'+
        '<div class="timepicker-day-cell">26</div>'+
        '<div class="timepicker-day-cell">27</div>'+
        '<div class="timepicker-day-cell">28</div>'+
        '<div class="timepicker-day-cell">29</div>'+
        '<div class="timepicker-day-cell">30</div>'+
        '<div class="timepicker-day-cell" data-day="31" data-month="11" data-year="2016">31</div>'+
        '</div>'+
        '</div>';
    var nav = '<div class="timepicker-nav-action action-left">'+
        '<i class="icon iconfont icon-xiangzuo1"></i>'+
        '</div>'+
        '<div class="timepicker-nav-title">'+
        '2016年12月'+
        '</div>'+
        '<div class="timepicker-nav-action action-right">'+
        '<i class="icon iconfont icon-xiangyou1"></i>'+
        '</div>';

})(window,jQuery);



