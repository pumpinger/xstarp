# 时间选择器



## 1.html标签
> 推荐自己定义id，避免重复（我会自动生成id）


> x-date  x-time   x-datetime

````html

<input type="text" class="x-time" x-time-format="yyyy年MM月dd日"  x-time-max='2018-01-01'  x-time-min=""  x-time-input=".value" x-time-value="2017-%M-{%d+2}"/>

````


下面是格式后的input，往往是hidde的，用于传递给服务器
````html

<input type="text"  class="value"  placeholder="">
````



<br>
<br>


选项 | 说明 |格式
- | - | -
x-time-min | |'1900-01-01 00:00:00'  or  '1900-01-01' or '00:00:00'
x-time-max | | 同x-time-min
x-time-input | 往哪一个input计算值 | .value   or  #xxx
x-time-value | 默认计算值 | 同x-time-min  有默认表现值的时候失效
x-time-format | 表现值的格式 |   具体看下表2
value | 默认表现值 | 格式同x-time-format  填写具体值



### 表1

min  max  value  可以使用动态变量

变量 | 说明 
- | -
%y	| 当前年
%M	| 当前月
%d	| 当前日
%ld	| 本月最后一天
%H	| 当前时
%m	| 当前分
%s	| 当前秒
{}	| 运算表达式,如:{%d+1}:表示明天
F{} | 	{}之间是函数可写自定义JS代码


### 表2
x-time-format | mean
-| - 
y	| 将年份表示为最多两位数字。如果年份多于两位数，则结果中仅显示两位低位数。
yy	| 同上，如果小于两位数，前面补零。
yyy	| 将年份表示为三位数字。如果少于三位数，前面补零。
yyyy|	将年份表示为四位数字。如果少于四位数，前面补零。
M	| 将月份表示为从 1 至 12 的数字
MM	| 同上，如果小于两位数，前面补零。
MMM	| 返回月份的缩写 一月 至 十二月 (英文状态下 Jan to Dec) 。
MMMM| 	返回月份的全称 一月 至 十二月 (英文状态下 January to December) 。
d	| 将月中日期表示为从 1 至 31 的数字。
dd	| 同上，如果小于两位数，前面补零。
H	| 将小时表示为从 0 至 23 的数字。
HH	| 同上，如果小于两位数，前面补零。
m	| 将分钟表示为从 0 至 59 的数字。
mm	| 同上，如果小于两位数，前面补零。
s	| 将秒表示为从 0 至 59 的数字。
ss	| 同上，如果小于两位数，前面补零。
w	| 返回星期对应的数字 0 (星期天) - 6 (星期六) 。
D	| 返回星期的缩写 一 至 六 (英文状态下 Sun to Sat) 。
DD	| 返回星期的全称 星期一 至 星期六 (英文状态下 Sunday to Saturday) 。
W	| 返回周对应的数字 (1 - 53) 。
WW	| 同上，如果小于两位数，前面补零 (01 - 53) 。




## 2.js方法




````js

// xTime();


````

