/**
 * Created by Administrator on 2017/1/9.
 */



// require('../../vendor/wdatepicker/WdatePicker.js');
require('../../common/common.js');



$('body').on('click','.x-time',function(){



    var format = $(this).attr('x-time-format')?  $(this).attr('x-time-format') : 'yyyy-MM-dd HH:mm:ss' ;
    var max = $(this).attr('x-time-max')?  $(this).attr('x-time-max') : '' ;
    var min = $(this).attr('x-time-max')?  $(this).attr('x-time-min') : '' ;
    var input = $(this).attr('x-time-input')?  $(this).attr('x-time-input') : '' ;
    var value = $(this).attr('x-time-value')?  $(this).attr('x-time-value') : '' ;



    WdatePicker({
        el: xCommon.getDomId(this),
        vel:$(input).get(0),
        dateFmt:format,
        maxDate:max,
        minDate:min,
        startDate:value,
        // doubleCalendar:true,

    });
});





window.xTime=function (dom,option){


    option.el = xCommon.getDomId(dom);


    WdatePicker(option);

};

