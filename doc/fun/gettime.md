


# 获取时间

## 结果
> 看控制台

````js
var xttt = xTime();

console.log(xttt);


showTime('',xttt);

function showTime(key,time) {
    if(typeof time === 'object'){
        $.each(time,function (index,item) {
            showTime(key+index,item);
        })
    }else{
        console.log(key,(new Date(time)));
    }
}
````

