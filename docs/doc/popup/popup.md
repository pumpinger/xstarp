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

| 参数 | 书名 | Cool  |
| ------------- |:-------------:| -----:|
| type      | 弹窗类型 | 'prompt','confirm','define' |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

````html
````

