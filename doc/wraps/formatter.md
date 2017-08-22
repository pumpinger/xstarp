


# 获取时间


## 示例
````html

````

````js
var xttt = xTime();
toDate('',xttt);

function toDate(key,time) {
    if(typeof time === 'object'){
        $.each(time,function (index,item) {
            toDate(key+index,item);
        })
    }else{
        console.log(key,(new Date(time)));
    }
}
````






# 格式化


## 示例
console.log(     xFormat.str2time('2016-06-06 11:11:11')   );

console.log(     xFormat.str2time('2016-06-06')   );

console.log(     xFormat.str2time('16/06/06 11:11')   );

console.log(     xFormat.str2time('20160606')   );

console.log(     xFormat.str2time('160606')   );

console.log(     xFormat.str2time('11:11')   );

console.log(     xFormat.time2str(1465182671)   );

console.log(     xFormat.number2money(1231234.123)   );

## 结果

````html
<div>
1465182671
</div>
````

````js
console.log(     xFormat.str2time('2016-06-06 11:11:11')   );
console.log(     xFormat.str2time('2016-06-06')   );
console.log(     xFormat.str2time('16/06/06 11:11')   );
console.log(     xFormat.str2time('20160606')   );
console.log(     xFormat.str2time('160606')   );
console.log(     xFormat.str2time('11:11')   );
console.log(     xFormat.time2str(1465182671)   );
console.log(     xFormat.number2money(1231234.123)   );
````