/**
 * Created by fizz on 2017/2/6.
 * @output develop entry.
 */
// 开启热更新
if(module.hot) {
	module.hot.accept();
}

require('./components/demo/demo');

require('./components/datepicker/jquery.daterangepicker');

require('./components/popup/popup');

require('./components/map/index.js');

