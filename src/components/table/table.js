/**
 * Created by Administrator on 2017/2/28.
 */

require('./table.scss');

$('.x-table th').click(function(){
    $(this).find('i').toggleClass('x-table-arrowUp');
    $(this).find('i').toggleClass('x-table-arrowDown');
});