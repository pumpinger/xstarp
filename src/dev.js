/**
 * 测试入口
 * Created by Administrator on 2017/6/12.
 */




//   \$\((.*)\)\.click\(
//   \$('body').on('click',$1,


//css
require('./common/init.css');
require('./components/button.scss');
require('./components/alert.scss');
require('./vendor/iconfont/iconfont.css');

require('./components/page.scss');
require('./components/panel.scss');
require('./components/imgview/imgview.scss');


//style
require('./components/tab/tab.js');
require('./components/nav/nav.js');
require('./components/form/form.js');
require('./components/tip/tip.js');
require('./components/table/table.js');


//plug
require('./components/imgview/imgview.js');
require('./components/popup/popup.js');
require('./components/progress/progress.js');
require('./components/tree/tree.js');


//fun
require('./components/validate/validate.js');
require('./components/ajax/ajax.js');
require('./components/format/format.js');
require('./components/gettime/gettime.js');



//wraps
require('./components/time/time.js');
require('./components/upload/upload.js');















// require('./components/test/test.js');





// require('./components/test/ilovesass.scss');
// require('./components/test/ilovesass2.scss');



// var color=['red','blue','yellow','green','grey','orange','purple','black','white','green','purple'];
// setInterval(function (){
//     var i=Math.floor(Math.random()*10);
//     $('body').css({
//         'background-color':color[i]
//     });
// },2000);
