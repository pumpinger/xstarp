/**
 * Created by fizz on 2017/2/6.
 * @output develop entry.
 */
// 开启热更新
if(module.hot) {
  module.hot.accept();
}

// require('./components/demo/demo');
//
require('./components/datepicker/jquery.daterangepicker');
//
// require('./components/popup/popup.js');

// require('./components/map/index.js');

require('./common/styles/index.scss');
require('./components/tip/tip.js');
require('./components/tab/tab.js');
require('./components/form/form.js');
require('./components/nav/nav.js');

require('./components/map/amap/MapSDK.js');

console.log(XMapSdk);


