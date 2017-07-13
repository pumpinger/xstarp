# 按钮

> .x-button 

## 主题
````html

<div class="x-button">常规</div>
<div class="x-button x-button-success">成功</div>
<div class="x-button x-button-serious">正儿八经</div>
<div class="x-button x-button-warning">注意</div>
<div class="x-button x-button-danger">警告</div>
<div class="x-button x-button-ban">禁用</div>


````

## 尺寸

````html
<div class="x-button x-button-large">大号</div>
<div class="x-button">默认</div>
<div class="x-button x-button-small">小号</div>
````


## 组合

````html
<div class="x-button-group">
    <div class="x-button x-button-serious">正儿八经</div>
    <div class="x-button x-button-ban">禁用</div>
</div>

````


## 图标

> 需要icon样式.

````html
<div class="x-button"><i class="iconfont icon-baobei"></i>带符号</div>
````

## 下拉菜单
## 单选

<br>
<br>
<br>
<br>
___




# 标签页

> .x-tab  .x-tab-nav  .x-tab-contents

````html
<div class="x-tab">
    <ul class="x-tab-nav">
        <li class="x-active"><a>Section 1</a></li>
        <li class=""><a >Section 2</a></li>
        <li class=""><a >Section 3</a></li>
    </ul>
    <div class="x-tab-contents">
        <div class="x-tab-content x-active">
            <p>I'm in Section 1.</p>
        </div>
        <div class="x-tab-content">
            <p>Howdy, I'm in Section 2.</p>
        </div>
        <div class="x-tab-content">
            <p>What up girl, this is Section 3.</p>
        </div>
    </div>
</div>
````




# 导航

> .x-nav  .x-nav-cross   .x-nav-sidebar

````html
<div class="x-tab">
    <ul class="x-tab-nav">
        <li class="x-tab-li  x-active"><a>水平导航</a></li>
        <li class="x-tab-li"><a>侧边导航</a></li>
    </ul>
    <div class="x-tab-contents">
        <div class="x-tab-content x-active">
            <ul class="x-nav x-nav-cross">
                <li class="x-nav-item x-active"><a href="javascript:void(0)">最新活动</a></li>
                <li class="x-nav-item"><a href="javascript:void(0)">最新活动</a></li>
                <li class="x-nav-item"><a href="javascript:void(0)">最新活动</a></li>
                <li class="x-nav-item"><a href="javascript:void(0)">最新活动</a></li>
                <li class="x-nav-item"><a href="javascript:void(0)">最新活动</a></li>
            </ul>
        </div>

        <div class="x-tab-content">
            <ul class="x-nav x-nav-sidebar">
                <li class="x-nav-item">
                    <a class="x-nav-head">主菜单1<i class="iconfont icon-xiangxia1"></i></a>
                    <ul class="x-nav-child" style="display:none">
                        <li><a href="javascript:void(0)">选项1</a></li>
                        <li><a href="javascript:void(0)">选项1</a></li>
                        <li><a href="javascript:void(0)">选项1</a></li>
                    </ul>
                </li>
                <li class="x-nav-item">
                    <a class="x-nav-head">主菜单2<i class="iconfont icon-xiangxia1"></i></a>
                    <ul class="x-nav-child" style="display:none">
                        <li><a href="javascript:void(0)">选项1</a></li>
                        <li><a href="javascript:void(0)">选项1</a></li>
                        <li><a href="javascript:void(0)">选项1</a></li>
                    </ul>
                </li>
                <li class="x-nav-item">
                    <a class="x-nav-head">主菜单3<i class="iconfont icon-xiangxia1"></i></a>
                    <ul class="x-nav-child" style="display:none">
                        <li><a href="javascript:void(0)">选项1</a></li>
                        <li><a href="javascript:void(0)">选项1</a></li>
                        <li><a href="javascript:void(0)">选项1</a></li>
                    </ul>
                </li>
                <li class="x-nav-item">
                    <a class="x-nav-head">主菜单4<i class="iconfont icon-xiangxia1"></i></a>
                    <ul class="x-nav-child" style="display:none">
                        <li><a href="javascript:void(0)">选项1</a></li>
                        <li><a href="javascript:void(0)">选项1</a></li>
                        <li><a href="javascript:void(0)">选项1</a></li>
                    </ul>
                </li>
            </ul>
        </div>

    </div>
</div>
````


# 表单

````html
<div class="x-form">
    <h4 class="x-form-title">基本信息</h4>
    <form class="x-form-content">
        <div class="x-form-item">
            <span class="x-form-key">输入框: </span>
            <div class="x-form-value"><input type="text" name="userName"></div>
        </div>
        <div  class="x-form-item">
            <span class="x-form-key">密码:</span>
            <div class="x-form-value"><input type="password" name="passWord"></div>
        </div>
        <div  class="x-form-item">
            <span class="x-form-key">文本框:</span>
            <div class="x-form-value"><textarea></textarea></div>
        </div>
        <div  class="x-form-item">
            <span class="x-form-key">单选框:</span>
            <div class="x-form-value">
                <label class="x-form-input"><input name="radio" type="radio" value="1" checked="checked"><span>男</span></label>
                <label class="x-form-input"><input name="radio" type="radio" value="2"><span>女</span></label>
            </div>
        </div>
        <div  class="x-form-item">
            <span class="x-form-key">多选框:</span>
            <div class="x-form-value">
                <label class="x-form-input"><input name="checkbox" type="checkbox" value="1" checked="checked">1</label>
                <label class="x-form-input"><input name="checkbox" type="checkbox" value="2">2</label>
                <label class="x-form-input"><input name="checkbox" type="checkbox" value="3">3</label>
            </div>
        </div>

        <div class="x-form-item">
            <span class="x-form-key">开关:</span>
            <div class="x-form-value">
                <label class="x-form-switch x-form-onswitch">
                    <input type="checkbox" name="switch" value="on" checked="checked">
                    <span>ON</span>
                    <i></i>
                </label>
            </div>
        </div>

        <div class="x-form-item">
            <span class="x-form-key">选择框:</span>
            <div class="x-form-value">
                <select class="x-form-select" name="select">
                    <option value="1">普通用户</option>
                    <option value="2">特殊用户</option>
                    <option value="3">VIP</option>
                </select>
                <span>~</span>
                <select class="x-form-select" name="select">
                    <option value="1">普通用户</option>
                    <option value="2">特殊用户</option>
                    <option value="3">VIP</option>
                </select>
            </div>
        </div>
        <div class="x-form-item">
            <span class="x-form-key">品牌类型: </span>
            <div class="x-form-value">
                <lable class="x-form-radio x-checked">
                    <input type="radio" name="radio1" value="选项1" checked="checked">选项1
                </lable>
                <lable class="x-form-radio">
                    <input type="radio" name="radio1" value="选项2">选项2
                </lable>
            </div>
        </div>
        <div class="x-form-item">
            <span class="x-form-key">价格范围: </span>
            <div class="x-form-value">
                <label class="x-form-checkbox x-checked">
                    <input type="checkbox" name="checkbox1" value="选项1" checked="checked">选项1
                </label>
                <label class="x-form-checkbox">
                    <input type="checkbox" name="checkbox1" value="选项2">选项2
                </label>
                <label class="x-form-checkbox x-checked">
                    <input type="checkbox" name="checkbox1" value="选项3" checked="checked">选项3
                </label>

            </div>
        </div>
        <div class="x-form-item">
            <span class="x-form-key"></span>
            <div class="x-form-value">
                <a class="x-form-submit">提交</a>
                <a class="x-form-cancel">取消</a>
            </div>

        </div>
    </form>
</div>
````




# 提示

````html
 <div class="x-alert-base">默认提示框</div>
    <div class="x-alert-darkseagreen">Congratulation</div>
    <div class="x-alert-cadetblue">信息框</div>
    <div class="x-alert-darkorange">警告框</div>
    <div class="x-alert-red">危险</div>

    <div class="x-alert-quote">这是引用</div>
````




# dmeo

## xpopup
````html
<div id="button">点我呀点我呀，你倒是点我呀！</div>
````

````js
console.log(2);
$('#button').click(function(){
    xPopUp('prompt',{
        p_width:200,
        content:'操作成功',
        btn:[{
            name:'确定'
        }]
    });
});
````

## date picker
````html
<input type="text" class="date-picker" style="border: 1px solid #999;">
````
````js
console.log('datepicker');
// $('.date-picker').dateRangePicker();
````

## 1234
- asdf
- asdf

- asdflk


# 图标

```规则
    添加基础类名 iconfont
    并加上具体的名字 icon-*
```

````html
    <ul class="x-icon-list">
        <li><i class="iconfont icon-yangshengqi"></i><span>icon-yangshengqi</span></li>
        <li><i class="iconfont icon-tishi"></i><span>icon-tishi</span></li>
        <li><i class="iconfont icon-jianqie"></i><span>icon-jianqie</span></li>
        <li><i class="iconfont icon-bianjiwenjian"></i><span>icon-bianjiwenjian</span></li>
        <li><i class="iconfont icon-dengdaiwenjian"></i><span>icon-dengdaiwenjian</span></li>
        <li><i class="iconfont icon-shanchuwenjian"></i><span>icon-shanchuwenjian</span></li>
        <li><i class="iconfont icon-jianqiewenjian"></i><span>icon-jianqiewenjian</span></li>
        <li><i class="iconfont icon-fuzhiwenjian"></i><span>icon-fuzhiwenjian</span></li>
        <li><i class="iconfont icon-sousuowenjian"></i><span>icon-sousuowenjian</span></li>
        <li><i class="iconfont icon-dengdai"></i><span>icon-dengdai</span></li>
    
        <li><i class="iconfont icon-wenjianjia"></i><span>icon-wenjianjia</span></li>
        <li><i class="iconfont icon-xinzengwenjianjia"></i><span>icon-xinzengwenjianjia</span></li>
        <li><i class="iconfont icon-shanchuwenjianjia"></i><span>icon-shanchuwenjianjia</span></li>
        <li><i class="iconfont icon-paixu"></i><span>icon-paixu</span></li>
        <li><i class="iconfont icon-xiangzuo"></i><span>icon-xiangzuo</span></li>
        <li><i class="iconfont icon-xiangshang"></i><span>icon-xiangshang</span></li>
        <li><i class="iconfont icon-xiangyou"></i><span>icon-xiangyou</span></li>
        <li><i class="iconfont icon-biaoqian"></i><span>icon-biaoqian</span></li>
        <li><i class="iconfont icon-shouye"></i><span>icon-shouye</span></li>
        <li><i class="iconfont icon-sousuo"></i><span>icon-sousuo</span></li>
        <li><i class="iconfont icon-jian"></i><span>icon-jian</span></li>
        <li><i class="iconfont icon-jia"></i><span>icon-jia</span></li>
        <li><i class="iconfont icon-cuowu"></i><span>icon-cuowu</span></li>
        <li><i class="iconfont icon-zhengque"></i><span>icon-zhengque</span></li>
        <li><i class="iconfont icon-shuaxin"></i><span>icon-shuaxin</span></li>
        <li><i class="iconfont icon-xiangyou1"></i><span>icon-xiangyou1</span></li>
        <li><i class="iconfont icon-xiangzuo1"></i><span>icon-xiangzuo1</span></li>
        <li><i class="iconfont icon-xiangshang1"></i><span>icon-xiangshang1</span></li>
        <li><i class="iconfont icon-xiangxia"></i><span>icon-xiangxia</span></li>
        <li><i class="iconfont icon-jia1"></i><span>icon-jia1</span></li>
        <li><i class="iconfont icon-jian1"></i><span>icon-jian1</span></li>
        <li><i class="iconfont icon-zuoshang"></i><span>icon-zuoshang</span></li>
        <li><i class="iconfont icon-xiangshang2"></i><span>icon-xiangshang2</span></li>
        <li><i class="iconfont icon-youshang"></i><span>icon-youshang</span></li>
        <li><i class="iconfont icon-zuoxia"></i><span>icon-zuoxia</span></li>
        <li><i class="iconfont icon-xiangxia1"></i><span>icon-xiangxia1</span></li>
        <li><i class="iconfont icon-youxia"></i><span>icon-youxia</span></li>
        <li><i class="iconfont icon-xiangzuo2"></i><span>icon-xiangzuo2</span></li>
        <li><i class="iconfont icon-xiangyou2"></i><span>icon-xiangyou2</span></li>
        <li><i class="iconfont icon-suoxiao"></i><span>icon-suoxiao</span></li>
        <li><i class="iconfont icon-fangda"></i><span>icon-fangda</span></li>
        <li><i class="iconfont icon-yidong"></i><span>icon-yidong</span></li>
        <li><i class="iconfont icon-suoxiao1"></i><span>icon-suoxiao1</span></li>
        <li><i class="iconfont icon-fangda1"></i><span>icon-fangda1</span></li>
        <li><i class="iconfont icon-ditu"></i><span>icon-ditu</span></li>
        <li><i class="iconfont icon-caijian"></i><span>icon-caijian</span></li>
        <li><i class="iconfont icon-shoucang"></i><span>icon-shoucang</span></li>
        <li><i class="iconfont icon-gengduo"></i><span>icon-gengduo</span></li>
        <li><i class="iconfont icon-baobei"></i><span>icon-baobei</span></li>
        <li><i class="iconfont icon-paixu1"></i><span>icon-paixu1</span></li>
        <li><i class="iconfont icon-tuiguangzhong"></i><span>icon-tuiguangzhong</span></li>
        <li><i class="iconfont icon-zanting"></i><span>icon-zanting</span></li>
        <li><i class="iconfont icon-shanchu"></i><span>icon-shanchu</span></li>
        <li><i class="iconfont icon-shequ"></i><span>icon-shequ</span></li>
        <li><i class="iconfont icon-tupian2222"></i><span>icon-tupian2222</span></li>
        <li><i class="iconfont icon-jine"></i><span>icon-jine</span></li>
        <li><i class="iconfont icon-xiaoxi"></i><span>icon-xiaoxi</span></li>
        <li><i class="iconfont icon-jinggao"></i><span>icon-jinggao</span></li>
        <li><i class="iconfont icon-xiangyou3"></i><span>icon-xiangyou3</span></li>
        <li><i class="iconfont icon-xiangzuo3"></i><span>icon-xiangzuo3</span></li>
        <li><i class="iconfont icon-xiazai"></i><span>icon-xiazai</span></li>
        <li><i class="iconfont icon-gongzuoliuchengtu"></i><span>icon-gongzuoliuchengtu</span></li>
        <li><i class="iconfont icon-xinrenkaohebiaozhun"></i><span>icon-xinrenkaohebiaozhun</span></li>
        <li><i class="iconfont icon-bianji"></i><span>icon-bianji</span></li>
        <li><i class="iconfont icon-tuichubianji"></i><span>icon-tuichubianji</span></li>
        <li><i class="iconfont icon-shejiguifan"></i><span>icon-shejiguifan</span></li>
        <li><i class="iconfont icon-dengdaiqueren"></i><span>icon-dengdaiqueren</span></li>
    </ul>
````




# 分页

````html
    <div class="x-page">
        <div class="x-page-total">共有17条信息</div>
        <div class="x-page-pages">
            <ul>
                <select>
                    <option value="" selected="selected">10行</option>
                    <option value="">20行</option>
                    <option value="">50行</option>
                    <option value="">100行</option>
                </select>
                <li>&lt;&lt;首页</li>
                <li class="x-active"><a>1</a></li>
                <li><a>2</a></li>
                <li><a>3</a></li>
                <li>尾页>></li>
            </ul>
        </div>
    </div>
    
````



# 面板

```

```

````html
<div class="x-panel">
        <div class="x-panel-title">标题1</div>
        <div class="x-panel-content">内容详情</div>
    </div>

````



# 表格



````html
<table class="x-table">
        <thead align="center">
        <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>类型</th>
            <th>日期<i class="x-table-arrow"></i></th>
            <th>部门<i class="x-table-arrow"></i></th>
            <th>操作<i class="x-table-arrow"></i></th>
        </tr>
        </thead>
        <tbody align="center">
        <tr>
            <td>1</td>
            <td>Alisa</td>
            <td>Write</td>
            <td>2016-1-1</td>
            <td>小步创想科技</td>
            <td>
                <div class="x-button">编辑</div>
                <div class="x-button">删除</div>
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>Alisa</td>
            <td>Write</td>
            <td>2016-1-1</td>
            <td>小步创想科技</td>
            <td>
                <div class="x-button">编辑</div>
                <div class="x-button">删除</div>
            </td>
        </tr>
        <tr>
            <td>3</td>
            <td>Alisa</td>
            <td>Write</td>
            <td>2016-1-1</td>
            <td>小步创想科技</td>
            <td>
                <div class="x-button">编辑</div>
                <div class="x-button">删除</div>
            </td>
        </tr>
        </tbody>
    </table>

````

````js
var count = 0;
$('.x-table th').click(function(){
    var iconDom = $(this).find('i');
    if(count % 3 == 0){
        iconDom.removeClass('x-table-arrow').addClass('x-table-arrowUp')
    }else if(count % 3 == 1){
        iconDom.removeClass('x-table-arrowUp').addClass('x-table-arrowDown');
    }else{
        iconDom.removeClass('x-table-arrowDown').addClass('x-table-arrow')
    }
    count++;
});
````
