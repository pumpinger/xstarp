

# 弹窗


## 提示

````html
<span class="x-button x-button-success pop-button-prompt1">提示1</span>
   
````

````js
    $('.pop-button-prompt1').click(function(){
            xPopup('prompt',{
                width:200,
                content:'操作成功',
                btn:[{
                    name:'确定'
                }]
            });
        });
````
````html
    <span class="x-button x-button-success pop-button-prompt2">提示2</span>
````

````js
   
    $('.pop-button-prompt2').click(function(){
        xPopup('prompt',{
            width:200,
            content:'操作成功'
        },2000);
    });

````

## 确定

````html
    <span class="x-button x-button-success pop-button-confirm">确定</span>
````

````js
   
    $('.pop-button-confirm').click(function(){
        xPopup('confirm', {
            content:'确定删除吗',
            isClose:true,
            confirmfn:function(){
                xPopup('prompt',{
                    width:200,
                    content:'操作成功'
                },2000);
            }
        });
    });

````

## 自定义

````html
   
    <span class="x-button x-button-success pop-button-define">自定义</span>
````

````js
    $(".pop-button-define").click(function(){
        var edit_con = $('<input type="text">');
        xPopup('define',{
            width:300,
            title:'用户信息',
            content:edit_con,
            btn:[{
                name:'保存',
                classStr:'confirm',
                isClose:true,
                opra:function(){
                    xPopup('prompt',{
                        width:200,
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



### 用法说明

1、xPopup方法来调用
2、xPopup共有三个参数，type、option、time

| 参数 | 说明 | 值  |
| ------------- |:-------------:| -----:|
| type | 弹窗类型 | 'prompt','confirm','define' |
| option | 弹窗属性 |  |
| time | 弹窗自动关闭时间 |   ||

#### option

| option属性| 类型 | 说明 | 示例 |
| ------------- |:-------------:| -----:|
| width | Number | 弹窗宽度 | |
| height | Number | 弹窗高度 | |
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





