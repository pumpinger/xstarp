/**
 * Created by Administrator on 2017/1/6.
 */


// require('../format/format.js');



;(function () {

    window.getDomId = function (dom) {

        var id = $(dom).prop('id');

        if(  ! id ){

            id =  (new Date()).valueOf();
            id += '_'+$(dom).index();

            $(dom).prop('id',id);
        }

        return id;

    };



    window.xCommon = {
        getDomId: getDomId
    };

})();








