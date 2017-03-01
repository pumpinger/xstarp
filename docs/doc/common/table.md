# 表格



````html
<table class="x-table">
        <thead align="center">
        <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>类型</th>
            <th>日期</th>
            <th>部门<i class="x-table-arrowDown"></i></th>
            <th>操作<i class="x-table-arrowDown"></i></th>
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
$('.x-table th').click(function(){
    $(this).find('i').toggleClass('x-table-arrowUp');
    $(this).find('i').toggleClass('x-table-arrowDown');
});
````