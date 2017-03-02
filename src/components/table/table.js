/**
 * Created by Administrator on 2017/2/28.
 */

require('./table.scss');

$('.x-table th').click(function(){
    $(this).find('i').removeClass('x-table-arrow').addClass('x-table-arrowUp');
});