## 简介
- datepicker是一个选择日期、日期范围的jQuery插件。
- 依赖于jQuery和moment
- 支持IE8+, Firefox, Chrome, Safari 和其他主流html5浏览器

## 安装
```html
<link rel="stylesheet" href="dist/daterangepicker.min.css">
<script type="text/javascript" src="moment.min.js"></script>
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="dist/jquery.daterangepicker.min.js"></script>
```

## 使用
```html
    <input type="text" id="dom-id" placeholder="选个好日子吧~">
```

```js
  // 如果没有选项，则使用默认选项
  $('#dom-id').dateRangePicker(option);
```
## 默认选项
```js 
{
	autoClose: false,
	format: 'YYYY-MM-DD',
	separator: ' to ',
	language: 'auto',
	startOfWeek: 'sunday',// 或者 monday
	getValue: function()
	{
		return $(this).val();
	},
	setValue: function(s)
	{
		if(!$(this).attr('readonly') && !$(this).is(':disabled') && s != $(this).val())
		{
			$(this).val(s);
		}
	},
	startDate: false,
	endDate: false,
	time: {
		enabled: false
	},
	minDays: 0,
	maxDays: 0,
	showShortcuts: false,
	shortcuts:
	{
		//'prev-days': [1,3,5,7],
		//'next-days': [3,5,7],
		//'prev' : ['week','month','year'],
		//'next' : ['week','month','year']
	},
	customShortcuts : [],
	inline:false,
	container:'body',
	alwaysOpen:false,
	singleDate:false,
	lookBehind: false,
	batchMode: false,
	duration: 200,
	stickyMonths: false,
	dayDivAttrs: [],
	dayTdAttrs: [],
	applyBtnClass: '',
	singleMonth: 'auto',
	hoveringTooltip: function(days, startTime, hoveringTime)
	{
		return days > 1 ? days + ' ' + lang('days') : '';
	},
	showTopbar: true,
	swapTime: false,
	selectForward: false,
	selectBackward: false,
	showWeekNumbers: false,
	getWeekNumber: function(date) //date will be the first day of a week
	{
		return moment(date).format('w');
	}
}
```

## options

#### format

指定Moment使用的日期格式，详情点击这里：[moment日期格式](http://momentjs.com/docs/#/displaying/format/)
- type: String
- default: 


#### separator

date字符串中间的分割字符
- type: String
- default: 'to'

#### language

指定你使用的语言，'es' 或者 'cn'
- type: String
- default: 'auto',会自动判别你的local语言

#### startOfWeek

星期从哪一天开始，'sunday' 或者 'monday'
- type: String
- default: 'sunday'

#### getValue

传入一个函数，从DOM处获取date range 字符串的时候，将会触发这个函数
This function is called when get date range string from DOM
When it is called, the context of this function is set to the datepicker DOM
- type: Function
- default: 

#### setValue

传入一个函数，这个函数会在给DOM设置date range string的时候调用
- type: function
- default: 

#### startDate

设置最早可选择的日期，**之前**的日期将置灰，格式为 **format**
- type: string | false
- default: false

#### endDate

设置最晚可选择的日期，**之后**的日期将置灰，格式为 **format**
- type: String | false
- default: false

#### minDays

定义最小需选择的范围，0表示无限制
- type: Number
- default: 0

#### maxDays

定义最大需选择的范围，0表示无限制
- type: Number
- default: 

#### showShortcuts

显示快捷键区域
- type: Boolean
- default: false 

#### shortcuts

定义快捷按钮
define the shortcuts buttons. there are some built in shortcuts, see source code
- type: Object
- default: 

#### time

If enabled adds time selection controls.

- type: Object
- default:
```js
{
    enabled: false
}
```

#### customShortcuts

自定义快捷按钮，详情请查看这个[demo.js](https://gist.github.com/hifizz/6d24c5cc3d8449ba5bf8955fe341595c)
- type: Array
- default: []

#### inline

行内模式。渲染插件的dom在行内，而不是layer层的形式。如果设置为true，则'container'也要设置为相应的父容器
- type: Boolean
- default: false

#### container

存放dateRangePicker生成的DOM的容器
- type: String, css selector || DOM Object
- default: 'body'

#### alwaysOpen

inline模式下，你需要保持这个dom的显示，同时隐藏close按钮
- type: Boolean
- default: false

#### singleDate

选择单个日期时启用。如果'singleMonth'也设置为true，将会只显示一个月的视图。
- type: Boolean
- default: false

#### batchMode

批量模式。（一次性选择一个周、周范围、月范围；week, month, week-range, month-range）
- type: false | 'week' | 'month'
- default: false

#### beforeShowDay

A function that takes a date as a parameter and must return an array with:
	[0]: true/false indicating whether or not this date is selectable
	[1]: a CSS class name to add to the date's cell or "" for the default presentation
	[2]: an optional popup tooltip for this date
	The function is called for each day in the datepicker before it is displayed.
- type: Function 
- default: 

#### stickyMonths

If true, there will only be one previous and one next button. Clicking them will change
	both the months. This setting will have no effect if singleDate option is set to true
- type: Boolean
- default: false

#### singleMonth

是否显示单月。
If true, it will show only one month instead of two months. You can select date range
	in the one month view. If this is set to 'auto', it will be changed to true if the screen width
	is lower than 480.
- type: Boolean
- default: 'auto'

#### showDateFilter

This is a callback function when creating each date element in the calendar. First paramter will
	be the timestamp of that day. Second parameter will be the date of that month.
- type: Function(Int time, Int date)

#### customTopBar

自定义top bar。
If you set this parameter, it will use this value in the top bar.
- type: Function | String
- default: 

#### extraClass

给date range picker dom添加额外的class。
用于定制自己的样式，比如常见的是控制view的位置。
- type: String
- default: 

#### customArrowPrevSymbol

定制前一个箭头。
- type: String | String HTML
- default: 

#### customArrowNextSymbol

定制下一个箭头。
- type: String | String HTML
- default: 

#### showTopBar

是否显示top bar。
- type: Boolean
- default: true

#### swapTime

If true and if time is enabled, on choosing first enddate and than startdate, endtime and starttime will be swapped.
        If this configkey is false, only date will be swapped, time will stay constant.
        If time is disabled, this config key is not used.
- type: Boolean
- default: false

#### selectForward

只可以选择第一个选择之后的日期。
- type: Boolean
- default: false

#### selectBackward

只可以选择第一个选择之前的日期。
- type: Boolean
- default: false

#### showWeekNumbers

是否显示星期数。设置为true，则会在日历上显示当前是当你第几周。
- type: Boolean
- default: false

#### getWeekNumber

获取周数。
- type: Function(Date object)
- default: 
```js
function(date) //date will be the first day of a week
{
    return moment(date).format('w');
}
```


## 事件
dateRangePicker 可以连续绑定事件
```js
    $('#dom-id')
    .dateRangePicker()
    .bind('datepicker-first-date-selected', function(event, obj){
        // 在第一个日期选择的时候触发 
        console.log(obj);
        // obj 的格式是下面这样的：        
        // {
        //     date1: date object, // 先选择的date
        // }
    })
    .bind('datepicker-change',function(event,obj)
    {
    	/* 当用户再次点击的时候触发 */
    	console.log(obj);
    	// obj 的格式是下面这样的:
    	// {
    	// 		date1: Date object (先选择的日期值), 
    	// 		date2: Date object (后选择的日期值),
    	//	 	value: "2013-06-05 to 2013-06-07"
    	// }
    })
    .bind('datepicker-apply',function(event,obj){
    	/* 这个事件将会在用户点击应用按钮的时候触发 */
    	console.log(obj);
    })
    .bind('datepicker-close',function(){
    	/* 这个事件将会在close动画执行之前触发 */
    	console.log('before close');
    })
    .bind('datepicker-closed',function(){
    	/* 这个事件将会在close动画执行之后触发 */
    	console.log('after close');
    })
    .bind('datepicker-open',function(){
    	/* 这个事件将会在open动画执行之前触发 */
    	console.log('before open');
    })
    .bind('datepicker-opened',function(){
    	/* 这个事件将会在open动画执行之后触发 */
    	console.log('after open');
    })
```

#### first-date-selected
在第一个日期点击选择的时候触发 
- callback(event, obj)
    - event
    - obj: object
    
```js
    // obj 格式
    {
        date1: date object
    }
```

#### change
当用户再次点击的时候触发
- callback(event, obj)
    - event
    - obj 
    
```js
// obj 的格式是下面这样的:
{
    date1: DateObject, // object (先选择的日期值)
    date2: DateObject, // object (后选择的日期值)
    value: "2013-06-05 to 2013-06-07"
}
```

#### apply
这个事件将会在用户点击应用按钮的时候触发
-callback(event, obj)

#### close
这个事件将会在close动画执行之前触发
#### closed
这个事件将会在close动画执行之后触发
#### open
这个事件将会在open动画执行之前触发
#### opened
这个事件将会在open动画执行之后触发


## 方法(API)
```js
$(dom).data('dateRangePicker')
    //set date range, two date strings should follow the `format` in config object,
    //set the third argument to be `true` if you don't want this method to trigger a `datepicker-change` event.
	.setDateRange('2013-11-20','2013-11-25')
	//set the start date to the specified date
	.setStart('2013-11-20')
	//set the end date to the specified date
	//set the second argument to `true` if you don't want this method to trigger a `datepicker-change` event.
	.setEnd('2013-11-25')
	.clear()		// clear date range
	.close()		// close date range picker overlay
	.close()		// close date range picker overlay
	.open()		// open date range picker overlay
	.resetMonthsView()	// reset to default months
	.destroy();		// destroy all date range picker related things
```

#### setDateRange
**设置日期范围**

setDateRange('yyyy-mm-dd', 'yyyy-mm-dd');

e.g.
```js
$(dom).data('dateRangePicker').setDateRange('2013-11-20','2013-11-25');
```

#### setStart
设置开始日期

setStart('yyyy-mm-dd');

e.g.
```js
$(dom).data('dateRangePicker').setStart('2016-1-10');
```

#### setEnd
设置结束日期

setEnd('yyyy-mm-dd');

```js
$(dom).data('dateRangePicker').setEnd('2016-1-10');
```

#### clear
清除日期范围

```js
$(dom).data('dateRangePicker').clear();
```


#### close
关闭选择器的显示

```js
$(dom).data('dateRangePicker').close();
```

#### open

```js
$(dom).data('dateRangePicker').open();
```

#### resetMonthsView
重置视图到默认月份

```js
$(dom).data('dateRangePicker').resetMonthsView();
```

#### destroy
销毁datepicker实例和内存引用（以及所有dateRangePicker插件产生的引用）

```js
$(dom).data('dateRangePicker').destroy();
```


