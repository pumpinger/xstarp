


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
