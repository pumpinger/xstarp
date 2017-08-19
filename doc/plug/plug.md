# 贴士

````html
<div class="x-tip" id="x-tip">
    <a class="x-tip-container" data-tips="这是提示内容" style="margin-top:80px;">点击显示提示信息</a>
</div>

````

````js

$("#x-tip").hoverTips();

````

````js
var i = 1234;
console.log(i);

````

````js
var i = 123456;
console.log(i);
````




# 树

## 示例
- 方法一
````html
<div class="tree-wrap">
    <div class="test_tree1">
    </div>
</div>
````

````js
var testTree1 = xTree({
    dom: $('.test_tree1'),
    only_child: false,
    is_multi: true,
    is_trigger: false,
    node_merge: false,
    has_search: false,
    sel_ids: '2,3,11,12,13',
    expand: 3,
    data: [
        {id: 1, name: '中国', nodeId: 0, is_node: true, is_check: false},
        {id: 2, name: '四川', nodeId: 1, is_node: true, is_check: false},
        {id: 3, name: '云南', nodeId: 1, is_node: true, is_check: false},
        {id: 4, name: '贵州', nodeId: 1, is_node: true, is_check: false},
        {id: 5, name: '广西', nodeId: 1, is_node: true, is_check: false},
        {id: 6, name: '成都', nodeId: 2, is_node: false, is_check: false},
        {id: 7, name: '泸州', nodeId: 2, is_node: true, is_check: false},
        {id: 8, name: '昆明', nodeId: 3, is_node: false, is_check: false},
        {id: 9, name: '大理', nodeId: 3, is_node: false, is_check: false},
        {id: 10, name: '贵阳', nodeId: 4, is_node: false, is_check: false},
        {id: 11, name: '遵义', nodeId: 4, is_node: false, is_check: false},
        {id: 12, name: '南宁', nodeId: 5, is_node: false, is_check: false},
        {id: 13, name: '桂林', nodeId: 5, is_node: false, is_check: false},

        {id: 26, name: '成都', nodeId: 7, is_node: false, is_check: false},
        {id: 27, name: '泸州', nodeId: 7, is_node: false, is_check: false},
        {id: 28, name: '昆明', nodeId: 7, is_node: false, is_check: false},
        {id: 29, name: '大理', nodeId: 7, is_node: true, is_check: false},
        {id: 30, name: '贵阳', nodeId: 29, is_node: false, is_check: false},
        {id: 31, name: '遵义', nodeId: 29, is_node: false, is_check: false},
        {id: 32, name: '南宁', nodeId: 29, is_node: false, is_check: false},
        {id: 33, name: '桂林', nodeId: 29, is_node: false, is_check: false}
    ],
    //        choose:{
    //            nodeId:[1],
    //            id:[1]
    //        },
    onInit: function () {
    },
    onOpen: function () {
    },
    onBeforeOpen: function () {
    },
    onClose: function (hasChange) {
        console.log(testTree1.getId());
    },
    onCheck: function (item, dom, childrenItem) {
//            console.log(this);
//            console.log(this.getId());
//            console.log(testTree1);
//            应该是  this.getId()比较规范  还是 testTree1.getId()比较规范   this可以做到 只暴漏该暴漏的方法
    },
    onCancel: function (item, dom, childrenItem) {
    }
});
````

- 方法二, 示例一
````html
<div class="tree-wrap">
    <div class="test_tree2">
        <input  placeholder="">
    </div>
</div>
````


````js
var testTree2 = xTree({
    dom: $('.test_tree2'),
    only_child: false,
    is_multi: true,
    is_trigger: true,
    node_merge: false,
    has_search: true,
    expand: 3,
    data: [
        {id: 1, name: '行政部', nodeId: 0, is_node: true, is_check: false},
        {id: 3, name: '财务部', nodeId: 1, is_node: true, is_check: false},
        {id: 8, name: '财务部2', nodeId: 3, is_node: true, is_check: false},
        {id: 5, name: '李职员', nodeId: 8, is_node: false, is_check: false},
        {id: 6, name: '孙职员', nodeId: 8, is_node: false, is_check: false},
        {id: 2, name: '张部长', nodeId: 1, is_node: false, is_check: false},
        {id: 4, name: '刘职员', nodeId: 3, is_node: false, is_check: false},
        {id: 1, name: '王经理', nodeId: 0, is_node: false, is_check: false}
    ],
    //        choose:{
    //            nodeId:[1],
    //            id:[1]
    //        },
    onInit: function () {
    },
    onOpen: function () {
    },
    onBeforeOpen: function () {
    },
    onClose: function (hasChange) {
        console.log(testTree2.getId());
        console.log(testTree2._makeSearch);
    },
    onCheck: function (item, dom, childrenItem) {
//            console.log(this);
//            console.log(this.getId());
//            console.log(testTree);
//            应该是  this.getId()比较规范  还是 testTree.getId()比较规范   this可以做到 只暴漏该暴漏的方法
    },
    onCancel: function (item, dom, childrenItem) {
    },
    onChange: function () {
        testTree2.dom.val(testTree2.getName());
    }
});
````

- 方法二, 示例二
````html
<div class="tree-wrap">
    <div class="test_tree3">
        <input  placeholder="">
    </div>
</div>
````

````js
var testTree3 = xTree({
    dom: $('.test_tree3'),
    only_child: false,
    is_multi: true,
    is_trigger: true,
    node_merge: false,
    has_search: true,
    sel_ids: '2,3,11,12,13',
    expand: 3,
    data: [
        {id: 1, name: '中国', nodeId: 0, is_node: true, is_check: false},
        {id: 2, name: '四川', nodeId: 1, is_node: true, is_check: false},
        {id: 3, name: '云南', nodeId: 1, is_node: true, is_check: false},
        {id: 4, name: '贵州', nodeId: 1, is_node: true, is_check: false},
        {id: 5, name: '广西', nodeId: 1, is_node: true, is_check: false},
        {id: 6, name: '成都', nodeId: 2, is_node: false, is_check: false},
        {id: 7, name: '泸州', nodeId: 2, is_node: true, is_check: false},
        {id: 8, name: '昆明', nodeId: 3, is_node: false, is_check: false},
        {id: 9, name: '大理', nodeId: 3, is_node: false, is_check: false},
        {id: 10, name: '贵阳', nodeId: 4, is_node: false, is_check: false},
        {id: 11, name: '遵义', nodeId: 4, is_node: false, is_check: false},
        {id: 12, name: '南宁', nodeId: 5, is_node: false, is_check: false},
        {id: 13, name: '桂林', nodeId: 5, is_node: false, is_check: false},

        {id: 26, name: '成都', nodeId: 7, is_node: false, is_check: false},
        {id: 27, name: '泸州', nodeId: 7, is_node: false, is_check: false},
        {id: 28, name: '昆明', nodeId: 7, is_node: false, is_check: false},
        {id: 29, name: '大理', nodeId: 7, is_node: true, is_check: false},
        {id: 30, name: '贵阳', nodeId: 29, is_node: false, is_check: false},
        {id: 31, name: '遵义', nodeId: 29, is_node: false, is_check: false},
        {id: 32, name: '南宁', nodeId: 29, is_node: false, is_check: false},
        {id: 33, name: '桂林', nodeId: 29, is_node: false, is_check: false}
    ],
    //        choose:{
    //            nodeId:[1],
    //            id:[1]
    //        },
    onInit: function () {
    },
    onOpen: function () {
    },
    onBeforeOpen: function () {
    },
    onClose: function (hasChange) {
        console.log(testTree3.getId());
        console.log(testTree3._makeSearch);
    },
    onCheck: function (item, dom, childrenItem) {
//            console.log(this);
//            console.log(this.getId());
//            console.log(testTree);
//            应该是  this.getId()比较规范  还是 testTree.getId()比较规范   this可以做到 只暴漏该暴漏的方法
    },
    onCancel: function (item, dom, childrenItem) {
    },
    onChange: function () {
        testTree3.dom.val(testTree3.getName());
    }
});
````

## API
````html
<table class="x-table x-table-interval">
    <thead>
    <tr>
        <th>属性</th>
        <th>类型</th>
        <th>说明</th>
        <th>默认值</th>
        <th>示例</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>is_trigger</td>
        <td>Boolean</td>
        <td>是否需要触发？否则直接显示</td>
        <td>false</td>
        <td></td>
    </tr>
    <tr>
        <td>has_search</td>
        <td>Boolean</td>
        <td>是否需要搜索功能</td>
        <td>false</td>
        <td></td>
    </tr>
    <tr>
        <td>only_child</td>
        <td>Boolean</td>
        <td>搜索结果是否只要叶子</td>
        <td>true</td>
        <td></td>
    </tr>
    <tr>
        <td>node_merge</td>
        <td>Boolean</td>
        <td>是否需要合并结果</td>
        <td>true</td>
        <td></td>
    </tr>
    <tr>
        <td>zIndex</td>
        <td>Number</td>
        <td>tree在视图中的层级</td>
        <td>1</td>
        <td></td>
    </tr>
    <tr>
        <td>choose</td>
        <td>Boolean或Object</td>
        <td>哪些是选中的？优先级高于data</td>
        <td>false</td>
        <td>{nodeId:[1,2,3],id:[1,2,3]}</td>
    </tr>
    <tr>
        <td>is_node_first</td>
        <td>Boolean</td>
        <td>是否需要Node排在前面 否则按照data的顺序</td>
        <td>false</td>
        <td></td>
    </tr>
    <tr>
        <td>is_multi</td>
        <td>Boolean</td>
        <td>是否多选</td>
        <td>true</td>
        <td></td>
    </tr>
    <tr>
        <td>expand</td>
        <td>Boolean或者Number</td>
        <td>是否展开，展开几层？</td>
        <td>false</td>
        <td></td>
    </tr>
    <tr>
        <td>width</td>
        <td>null或者Number</td>
        <td>tree的宽度</td>
        <td>null</td>
        <td></td>
    </tr>
    <tr>
        <td>maxHeight</td>
        <td>null或者Number</td>
        <td>tree的最大高度</td>
        <td>null</td>
        <td></td>
    </tr>
    <tr>
        <td>data</td>
        <td>Array</td>
        <td>数据，用来构建tree.</td>
        <td>[]</td>
        <td>[{id: 1, name: '王经理', nodeId: 0, is_node: false, is_check: false}]</td>
    </tr>
    <tr>
        <td>data[0].id</td>
        <td>Number</td>
        <td>item的ID</td>
        <td>无</td>
        <td></td>
    </tr>
    <tr>
        <td>data[0].name</td>
        <td>String</td>
        <td>item的名字</td>
        <td>无</td>
        <td></td>
    </tr>
    <tr>
        <td>data[0].nodeId</td>
        <td>Number</td>
        <td>item的父节点ID</td>
        <td>无</td>
        <td></td>
    </tr>
    <tr>
        <td>data[0].is_node</td>
        <td>Boolean</td>
        <td>表示是否是节点</td>
        <td>无</td>
        <td></td>
    </tr>
    <tr>
        <td>data[0].is_check</td>
        <td>Boolean</td>
        <td>表示item是否被选中</td>
        <td>无</td>
        <td></td>
    </tr>
    </tbody>
</table>
<table class="x-table x-table-interval">
    <thead>
    <tr>
        <th>事件</th>
        <th>触发</th>
        <th>默认函数</th>
        <th>示例</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>onInit</td>
        <td>数据初始化时触发</td>
        <td>function () {}</td>
        <td></td>
    </tr>
    <tr>
        <td>onBeforeOpen</td>
        <td>tree打开之前触发</td>
        <td>function () {}</td>
        <td></td>
    </tr>
    <tr>
        <td>onOpen</td>
        <td>tree打开之后触发</td>
        <td>function () {}</td>
        <td></td>
    </tr>
    <tr>
        <td>onClose</td>
        <td>tree关闭时触发</td>
        <td>function () {}</td>
        <td></td>
    </tr>
    <tr>
        <td>onCheck</td>
        <td>选中item时触发</td>
        <td>function () {}</td>
        <td></td>
    </tr>
    <tr>
        <td>onCancel</td>
        <td>取消选中item时触发</td>
        <td>function () {}</td>
        <td></td>
    </tr>
    </tbody>
</table>
<table class="x-table x-table-interval">
    <thead>
    <tr>
        <th>方法</th>
        <th>功能</th>
        <th>参数类型</th>
        <th>返回值</th>
        <th>示例</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>start()</td>
        <td>开始构建tree</td>
        <td>无</td>
        <td>无</td>
        <td></td>
    </tr>
    <tr>
        <td>end()</td>
        <td>移除tree</td>
        <td>无</td>
        <td>无</td>
        <td></td>
    </tr>
    <tr>
        <td>getItem()</td>
        <td>获取被选中的(checked)的item</td>
        <td>无</td>
        <td>返回Array,数组元素为Object</td>
        <td></td>
    </tr>
    <tr>
        <td>getId()</td>
        <td>获取被选中的(checked)item的ID</td>
        <td>无</td>
        <td>返回Object,Obj.id为叶子的id数组,Obj.nodeId为节点id数组</td>
        <td></td>
    </tr>
    <tr>
        <td>getName()</td>
        <td>获取被选中的(checked)item的Name</td>
        <td>无</td>
        <td>返回Array,数组元素为String</td>
        <td></td>
    </tr>
    <tr>
        <td>cancelAll()</td>
        <td>取消所有item</td>
        <td>无</td>
        <td>无</td>
        <td></td>
    </tr>
    <tr>
        <td>cancelItem(id, type)</td>
        <td>取消item,id是item的id,type是item的类型(true是节点,false是叶子)</td>
        <td>Number, Boolean</td>
        <td>无</td>
        <td></td>
    </tr>
    <tr>
        <td>checkAll()</td>
        <td>选中所有item</td>
        <td>无</td>
        <td>无</td>
        <td></td>
    </tr>
    <tr>
        <td>checkItem(id, type)</td>
        <td>选中item,id是item的id,type是item的类型(true是节点,false是叶子)</td>
        <td>Number, Boolean</td>
        <td>无</td>
        <td></td>
    </tr>
    <tr>
        <td>search(value)</td>
        <td>在tree中搜索包含value的item</td>
        <td>String</td>
        <td>无</td>
        <td></td>
    </tr>
    </tbody>
</table>
````



# 进度条

## 示例

- 1、默认样式
````html
<div class="x-progress-wrap x-progress-1" >
</div>
````

- 2、带进度提示
````html
<div class="x-progress-wrap x-progress-2" >
</div>
````

- 3、带条纹效果
````html
<div class="x-progress-wrap x-progress-3" >
</div>
````

- 4、条纹效果带动画
````html
<div class="x-progress-wrap x-progress-4" >
</div>
````

- 5、多个进度条堆叠
````html
<div class="x-progress-wrap x-progress-5" >
</div>
````


````js
//基础样式
var xP1 = xProgress2({
    wrap: '.x-progress-1',
    percentage:'10%',
    onchange:function () {console.log('xP1',xP1.percentage);}
});

//带进度提示
var xP2 = xProgress2({
    wrap: '.x-progress-2',
    pclass: 'x-progress-bar x-progress-green',
    tclass: 'x-progress-text',
    percentage:'20%',
    onchange:function () {console.log('xP2',xP2.percentage);}
});

//带条纹效果
var xP3 = xProgress2({
    wrap: '.x-progress-3',
    pclass: 'x-progress-bar x-progress-red x-progress-striped',
    percentage:'30%',
    onchange:function () {console.log('xP3',xP3.percentage);}
});

//条纹效果带动画
var xP4 = xProgress2({
    wrap: '.x-progress-4',
    pclass: 'x-progress-bar x-progress-yellow x-progress-striped x-progress-animated',
    percentage:'40%',
    onchange:function () {console.log('xP4',xP4.percentage);}
});

//多个进度条堆叠
var xP5 = xProgress2({
    wrap: '.x-progress-5',
    pclass: 'x-progress-bar x-progress-red',
    percentage:'10%',
    onchange:function () {console.log('xP5',xP5.percentage);}
});

var xP6 = xProgress2({
    wrap: '.x-progress-5',
    pclass: 'x-progress-bar x-progress-green',
    tclass: 'x-progress-text',
    percentage:'20%',
    onchange:function () {console.log('xP6',xP6.percentage);}
});

var xP7 = xProgress2({
    wrap: '.x-progress-5',
    pclass: 'x-progress-bar x-progress-blue x-progress-striped',
    tclass: 'x-progress-text',
    percentage:'20%',
    onchange:function () {console.log('xP7',xP7.percentage);}
});

var xP8 = xProgress2({
    wrap: '.x-progress-5',
    pclass: 'x-progress-bar x-progress-yellow x-progress-striped',
    tclass: 'x-progress-text',
    percentage:'0%',
    onchange:function () {}
});

$({property: 0}).animate({property: 500}, {
    duration: 10000,
    step: function() {
        var percentage = Math.round(this.property/10);
        xP8.percentage = percentage+"%";
    }
});
````


## API reference
````html
<table class="x-table x-table-interval">
    <thead>
    <tr>
        <th>option对象</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
        <th>示例</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>wrap</td>
        <td>进度条的父元素对应的选择器或者jQuery对象</td>
        <td>String Or Object</td>
        <td>'.x-progress-wrap'</td>
        <td>wrap:'.x-progress-5'或者wrap:$('.x-progress-5')</td>
    </tr>
    <tr>
        <td>pclass</td>
        <td>进度条的类名</td>
        <td>String</td>
        <td>'x-progress-bar'</td>
        <td>pclass:'x-progress-bar x-progress-yellow x-progress-striped x-progress-animated'</td>
    </tr>
    <tr>
        <td>tclass</td>
        <td>进度提示内容的类名</td>
        <td>String</td>
        <td>'x-progress-only'</td>
        <td>tclass:'x-progress-text'</td>
    </tr>
    <tr>
        <td>percentage</td>
        <td>初始进度百分比</td>
        <td>String</td>
        <td>'2%'</td>
        <td>percentage:'1%'</td>
    </tr>
    <tr>
        <td>onchange</td>
        <td>进度发生变化之后的回调函数</td>
        <td>Function</td>
        <td>function () {console.log('onchange')}</td>
        <td>onchange:function (hahaha) {console.log('hahaha',hahaha,'xP8',xP8.percentage);}</td>
    </tr>
    </tbody>
</table>

<table class="x-table x-table-interval">
    <thead>
    <tr>
        <th>样式(class名)</th>
        <th>适用元素</th>
        <th>说明</th>
        <th>示例</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>x-progress-wrap</td>
        <td>进度条的父元素</td>
        <td>基础样式(基础)</td>
        <td>&lt;div class="x-progress-wrap"&gt;&lt;/div&gt;</td>
    </tr>
    <tr>
        <td>x-progress-bar</td>
        <td>进度条</td>
        <td>基础样式(基础)</td>
        <td>pclass:'x-progress-bar'</td>
    </tr>
    <tr>
        <td>x-progress-red</td>
        <td>进度条</td>
        <td>red背景(添加)</td>
        <td>pclass:'x-progress-bar x-progress-red'</td>
    </tr>
    <tr>
        <td>x-progress-green</td>
        <td>进度条</td>
        <td>green背景(添加)</td>
        <td>pclass:'x-progress-bar x-progress-green'</td>
    </tr>
    <tr>
        <td>x-progress-blue</td>
        <td>进度条</td>
        <td>blue背景(添加)</td>
        <td>pclass:'x-progress-bar x-progress-blue'</td>
    </tr>
    <tr>
        <td>x-progress-yellow</td>
        <td>进度条</td>
        <td>yellow背景(添加)</td>
        <td>pclass:'x-progress-bar x-progress-yellow'</td>
    </tr>
    <tr>
        <td>x-progress-striped</td>
        <td>进度条</td>
        <td>条纹样式(添加)</td>
        <td>pclass:'x-progress-bar x-progress-striped'</td>
    </tr>
    <tr>
        <td>x-progress-animated</td>
        <td>进度条</td>
        <td>动画样式(添加)，背景向右移动</td>
        <td>pclass:'x-progress-bar x-progress-animated'</td>
    </tr>
    <tr>
        <td>x-progress-only</td>
        <td>进度提示</td>
        <td>隐藏进度提示(默认)</td>
        <td>tclass:'x-progress-only'</td>
    </tr>
    <tr>
        <td>x-progress-text</td>
        <td>进度提示</td>
        <td>显示进度提示</td>
        <td>tclass:'x-progress-text'</td>
    </tr>
    </tbody>
</table>

<table class="x-table x-table-interval">
    <thead>
    <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>操作示例</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>xProgress.option</td>
        <td>构建xProgress时的参数</td>
        <td>Object</td>
        <td></td>
    </tr>
    <tr>
        <td>xProgress.wrap</td>
        <td>进度条的父元素</td>
        <td>jQuery对象</td>
        <td></td>
    </tr>
    <tr>
        <td>xProgress.p</td>
        <td>进度条</td>
        <td>jQuery对象</td>
        <td></td>
    </tr>
    <tr>
        <td>xProgress.t</td>
        <td>进度提示</td>
        <td>jQuery对象</td>
        <td></td>
    </tr>
    <tr>
        <td>xProgress.percentage</td>
        <td>进度百分比</td>
        <td>String</td>
        <td>xProgress.percentage = '20%'</td>
    </tr>
    </tbody>
</table>
````





# 弹窗


## 提示

````html
<span class="pop-button pop-button-prompt1">提示1</span>
   
````

````js
    $('.pop-button-prompt1').click(function(){
            xPopUp('prompt',{
                p_width:200,
                content:'操作成功',
                btn:[{
                    name:'确定'
                }]
            });
        });
````
````html
    <span class="pop-button pop-button-prompt2">提示2</span>
````

````js
   
    $('.pop-button-prompt2').click(function(){
        xPopUp('prompt',{
            p_width:200,
            content:'操作成功'
        },2000);
    });

````

## 确定

````html
    <span class="pop-button pop-button-confirm">确定</span>
````

````js
   
    $('.pop-button-confirm').click(function(){
        xPopUp('confirm', {
            content:'确定删除吗',
            isClose:false,
            confirmfn:function(){
                xPopUp('prompt',{
                    p_width:200,
                    content:'操作成功'
                },2000);
            }
        });
    });

````

## 自定义

````html
   
    <span class="pop-button pop-button-define">自定义</span>
````

````js
    $(".pop-button-define").click(function(){
        var edit_con = $('<input type="text">');
        xPopUp('define',{
            p_width:300,
            title:'用户信息',
            content:edit_con,
            btn:[{
                name:'保存',
                classStr:'confirm',
                isClose:true,
                opra:function(){
                    xPopUp('prompt',{
                        p_width:200,
                        content:'保存成功'
                    },2000);
                }

            },{
                name:'取消',
                classStr:'cancel',
                isClose:true
            },{
                name:'重置',
                classStr:'reset',
                isClose:false,
                opra:function(){
                    $('input').val("");
                }
            }]


        });
    });
````

````css
    .pop-button{display:inline-block;height:36px;line-height:36px;width:60px;text-align:center;border-radius:4px;color:#fff;background:#1AB394;cursor:pointer;}
````

### 用法说明

1、xPopUp方法来调用
2、xPopUp共有三个参数，type、option、time

| 参数 | 说明 | 值  |
| ------------- |:-------------:| -----:|
| type | 弹窗类型 | 'prompt','confirm','define' |
| option | 弹窗属性 |  |
| time | 弹窗自动关闭时间 |   ||


| option属性| 类型 | 说明 | 示例 |
| ------------- |:-------------:| -----:|
| p_width | Number | 弹窗宽度 | |
| p_height | Number | 弹窗高度 | |
| title | String | 弹窗标题 | '提示' |
| content | String | 弹窗内容 |  |
| btn | Array | 弹窗按钮 | '确认' '取消' |
| confirmfn | Function | 点击确定按钮后进行的操作 |  |
| closefn | Function | 点击取消按钮后进行的操作 |  | |

| btn属性 | 类型 | 说明  | 示例 |
| ------------- |:-------------:| -----:|
| name | String | 按钮名称 | '保存' '重置' |
| classStr | String | 按钮的class类名 | ‘save |
| isClose | Boolean | 点击按钮是否关闭弹窗 |默认值为true|
| opra | Function |点击按钮后进行的操作 ||






# placeholder

A jQuery plugin that enables HTML5 placeholder behavior for browsers that aren’t trying hard enough yet

## 说明
为input、textarea元素启用jQuery.placeholder.js插件。
````js
$('input, textarea').placeholder();//默认class为"placeholder"
$('input, textarea').placeholder({customClass: 'xstrap-placeholder-for-ie'});
````

## 示例
````html
<style>
input, textarea {
    display: block;
    color: #EA4335;
}

.xstrap-placeholder-for-ie {
    color: #4285F4;
}
</style>
<form action="">
    <input type="text" class="a" placeholder="狼人杀12人局" value="这ie有毒">
    <input type="text" class="b" placeholder="预言家" value="">
    <input type="text" class="c" placeholder="女巫" value="">
    <input type="text" class="d" placeholder="猎人" value="">
    <input type="text" class="e" placeholder="守卫" value="">
    <input type="text" class="f" placeholder="白狼王" value="">
    <input type="text" class="g" placeholder="狼人x3" value="">
    <input type="text" class="h" placeholder="村民x4" value="">
    <textarea name="" id="" cols="30" rows="10" placeholder="角色">预女猎守+白狼王</textarea>
    <textarea name="" id="" cols="30" rows="10" placeholder="规则"></textarea>
</form>
````

````js
$(document).ready(function () {
    $('input, textarea').placeholder({customClass: 'xstrap-placeholder-for-ie'});
});
````







# 图片查看器

## 示例

````html

<span class="x-button-middle x-button x-button-cadetblue imgview_button">
   查看图片
</span>

<span class="x-button-middle x-button x-button-orange imgview_button2">
    查看图片2
</span>

<div class="imgview_content" style="display: none">
    内容：
    <p>这里可以是 任何自定义的html</p>
    <p>这里可以是 任何自定义的html</p>
    <p>这里可以是 任何自定义的html</p>
    <p>这里可以是 任何自定义的html</p>
</div>
````

````js
var option1={
    imgs:['./img/a1.png','./img/a2.png','./img/a3.png']
};
/*加一个 主题的宿主  的 option*/
var option2={
    imgs:['./img/a1.png','./img/a2.png','./img/a3.png'],
    infoDom:$('.imgview_content')
};

$('.imgview_button').click(function(){
    xImgView(option1);
});

$('.imgview_button2').click(function(){
    xImgView(option2);
});
````



































