


<style>
    .x-imgView img{width:50px;height:50px;}
    
    .imgview_content {display:none;}
    
</style>


# 图片查看器

## 方法1

````html

<div class="x-tab-content x-active">
    <div class="x-imgView">
        <img src="../file/a1.png"  x-imgView-src="../file/a1.png" class="x-imgView-item" />
        <img src="../file/a2.png"  x-imgView-src="../file/a2.png" class="x-imgView-item" />
        <img src="../file/a3.png"  x-imgView-src="../file/a3.png" class="x-imgView-item" />
    </div>
</div>
````


## 方法2



````html
<span class="x-button-middle x-button x-button-cadetblue imgview_button">
               查看图片
</span>
<div class="imgview_content" >
    内容：
    <p>这里可以是 任何自定义的html</p>
    <p>这里可以是 任何自定义的html</p>
    <p>这里可以是 任何自定义的html</p>
    <p>这里可以是 任何自定义的html</p>
</div>
````

````js


var option={
    imgs:['../file/a1.png','../file/a2.png','../file/a3.png'],
    infoDom:$('.imgview_content')
};

$('.imgview_button').click(function(){
    xImgView(option);
});


````



































