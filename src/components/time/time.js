/**
 * Created by Administrator on 2017/1/9.
 */



// require('../../vendor/wdatepicker/WdatePicker.js');



$('body').on('click','.x-time',function(){



    var id = $(this).prop('id');

    if(  ! id ){

        id =  (new Date()).valueOf();
        id += '_'+$(this).index();

        $(this).prop('id',id);
    }

    WdatePicker({
        el:id,
        dateFmt:'yyyy-MM-dd HH:mm:ss'

    });
});

window.XTime=function (option){

    init(option);



};

function init(){

}
