<?php
/**
 * Created by PhpStorm.
 * User: @van
 * Date: 2016/1/20
 * Time: 15:49
 */
include "layout_header.php";
?>

<style>
    .tree-wrap {
        display: inline-block;
        min-width: 330px;
        min-height: 330px;
        padding: 5px;
        border: 1px solid #06c;
        vertical-align: top;
    }

    .x-tree-h3 {
         color: #2e8596;
     }

    .api-wrap {
        min-width: 300px;
        padding: 5px;
        border-left: 1px solid #06c;
    }
    .api-wrap li {
        display: list-item;
        list-style-type: disc;
    }

</style>

<div class="x-panel">
    <div class="x-panel-title">树型选择器</div>
    <div class="x-panel-content">
        <p class="x-color-blue">示例：</p>

<pre><code class="language-html"><textarea>
    <div class="tree-wrap">
        <p>方法一</p>
        <div class="test_tree1"></div>
    </div>
    <div class="tree-wrap">
        <p>方法二</p>
        <input class="test_tree2" placeholder="">
    </div>
    <script>
        var testTree1 = xTree({
            dom: $('.test_tree1'),
            only_child: false,
            is_multi: true,
            is_trigger: false,
            node_merge: false,
            has_search: false,
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
            onInit: function () {},
            onOpen: function () {},
            onBeforeOpen: function () {},
            onClose: function (hasChange) {console.log(testTree1.getId());},
            onCheck: function (item, dom, childrenItem) {},
            onCancel: function (item, dom, childrenItem) {}
        });

        var testTree2 = xTree({
            dom: $('.test_tree2'),
            only_child: false,
            is_multi: true,
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
            onInit: function () {},
            onOpen: function () {},
            onBeforeOpen: function () {},
            onClose: function (hasChange) {
                console.log(testTree.getId());
                console.log(testTree._makeSearch);
            },
            onCheck: function (item, dom, childrenItem) {
                //console.log(this);
                //console.log(this.getId());
                //console.log(testTree);
            },
            onCancel: function (item, dom, childrenItem) {}
        });
    </script>
</textarea></code></pre>

        <p class="x-color-blue">效果:</p>
        <div class="tree-wrap">
            <p>方法一</p>
            <div class="test_tree1"></div>
        </div>
        <div class="tree-wrap">
            <p>方法二</p>
            <input class="test_tree2" placeholder="">
        </div>

        <p class="x-color-blue">规则:</p>
        <table class="x-table x-table-interval">
            <thead>
            <tr>
                <th>属性</th>
                <th>类型</th>
                <th>作用</th>
                <th>默认值</th>
                <th>示例</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>is_trigger</td>
                <td>Bool</td>
                <td>['./img/a1.png','./img/a2.png','./img/a3.png']</td>
                <td>是否需要触发，否则直接显示</td>
                <td></td>
            </tr>
            <tr>
                <td>infoDom</td>
                <td>html/string</td>
                <td>&lt;p&gt;123&lt;/p&gt;</td>
                <td>左边的图片简介</td>
                <td></td>
            </tr>
            <tr>
                <td>onSwitch</td>
                <td>函数</td>
                <td>function(index){}</td>
                <td>点击图片时会触发</td>
                <td></td>
            </tr>
            </tbody>


        </table>
        <table class="x-table x-table-interval">
            <thead>
            <tr>
                <th>属性</th>
                <th>类型</th>
                <th>实例</th>
                <th>作用</th>
                <th>默认值</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>imgs</td>
                <td>数组</td>
                <td>['./img/a1.png','./img/a2.png','./img/a3.png']</td>
                <td>要播放的图片</td>
                <td></td>
            </tr>
            <tr>
                <td>infoDom</td>
                <td>html/string</td>
                <td>&lt;p&gt;123&lt;/p&gt;</td>
                <td>左边的图片简介</td>
                <td></td>
            </tr>
            <tr>
                <td>onSwitch</td>
                <td>函数</td>
                <td>function(index){}</td>
                <td>点击图片时会触发</td>
                <td></td>
            </tr>
            </tbody>


        </table>
        <table class="x-table x-table-interval">
            <thead>
            <tr>
                <th>属性</th>
                <th>类型</th>
                <th>实例</th>
                <th>作用</th>
                <th>默认值</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>imgs</td>
                <td>数组</td>
                <td>['./img/a1.png','./img/a2.png','./img/a3.png']</td>
                <td>要播放的图片</td>
                <td></td>
            </tr>
            <tr>
                <td>infoDom</td>
                <td>html/string</td>
                <td>&lt;p&gt;123&lt;/p&gt;</td>
                <td>左边的图片简介</td>
                <td></td>
            </tr>
            <tr>
                <td>onSwitch</td>
                <td>函数</td>
                <td>function(index){}</td>
                <td>点击图片时会触发</td>
                <td></td>
            </tr>
            </tbody>


        </table>

        <div class="api-wrap">
            <p class="x-tree-h3">属性</p>
            <li>is_trigger:true, //是否需要触发? 否则直接显示</li>
            <li>has_search:false,</li>
            <li>only_child:true,//是否结果只要 child</li>
            <li>node_merge:true,//是否需要合并结果</li>
            <li>zIndex:1,</li>
            <li>choose:false, //哪些是选中的？优先级高于data</li>
            <li>is_node_first:false,//是否需要节点排在前面 否则按照data的顺序</li>
            <li>is_multi:true,//是否多选</li>
            <li>expand:false, //是否展开 todo</li>
            <li>rootId:0,</li>
            <li>width:null,</li>
            <li>maxHeight:null,</li>
            <li>data:[],</li>
        </div>

        <div class="api-wrap">
            <p class="x-tree-h3">事件</p>
            <li>onInit: function () {},</li>
            <li>onOpen: function () {}, //触发时</li>
            <li>onBeforeOpen: function () {},</li>
            <li>onClose: function (has_chg) {
                console.log('是否产生变化：'+has_chg);
                },</li>
            <li>onCheck: function (item,dom,childItem) {}</li>
            <li>onCancel: function (item,dom,childItem) {}</li>
        </div>

        <div class="api-wrap">
            <li class="x-tree-h3">方法</li>
            <li>start:function(){},</li>
            <li>end:function(){},</li>
            <li>getName:function(){},</li>
            <li>getId:function(){},</li>
            <li>cancelItem:function(){},</li>
            <li>checkItem:function(){},</li>
            <li>getItem:function(){},</li>
            <li>search:function(){},</li>
        </div>
    </div>
</div>

<script type="text/javascript" src="src/js/tree.js"></script>

<script>
    var testTree1 = xTree({
        dom: $('.test_tree1'),
        only_child: false,
        is_multi: true,
        is_trigger: false,
        node_merge: false,
        has_search: false,
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
</script>

<script>
    var testTree2 = xTree({
        dom: $('.test_tree2'),
        only_child: false,
        is_multi: true,
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
            console.log(testTree.getId());
            console.log(testTree._makeSearch);
        },
        onCheck: function (item, dom, childrenItem) {
//            console.log(this);
//            console.log(this.getId());
//            console.log(testTree);
//            应该是  this.getId()比较规范  还是 testTree.getId()比较规范   this可以做到 只暴漏该暴漏的方法
        },
        onCancel: function (item, dom, childrenItem) {
        }
    });
</script>

<?php

include "layout_footer.php";
?>
