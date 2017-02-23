
# 文件上传
调用webuploader.js  百度上传插件

## 图片上传

````html

<script>

</script>

 <div class="x-uploader">
            <div class="x-queueList">
                <div  class="x-placeholder  x-dndArea">
                    <div class="x-filePicker"></div>
                </div>
            </div>
            <div class="x-imgFile"></div>
            <div class="x-statusBar" style="display:none;">
                <div class="x-progress-wrap x-progress-upload" style="width: 200px;" ></div>
                <div class="x-info"></div>
                <div class="x-upload-btns">
                    <div class="x-filePicker-add"></div><div class="x-uploadBtn">开始上传</div>
                </div>
            </div>
        </div>

````

````js


   var xP8 = xProgress({
            wrap: '.x-progress-upload',
            pclass: 'x-progress-bar x-progress-yellow x-progress-striped x-progress-animated',
            tclass: 'x-progress-text',
            percentage:'0%',
            onchange:function () {console.log('xP8',xP8.percentage);}
        });

console.log("222");

 var upload = xUpload({
            dom: $(".x-uploader"),
            fileType :1,                             //   1 头像     2 文件
            fileNumLimit: 300,                       //总共能上传多少个文件
            fileSizeLimit: 200 * 1024 * 1024,        //   多个文件大小
            fileSingleSizeLimit: 100 * 1024 * 1024,   //   单个文件大小
            formData: {
                uid: 123
            },                                       //传给后台的数据
            fileVal:'x-file',                        //input框 name
            fileButton: {
                id :'.x-filePicker',
                label: '批量上传',                     //按钮名字和id   可以点击的按钮的id和name
                multiple:true
            },
            addButton:{
                id: '.x-filePicker-add',
                label: '继续添加'
            },
            server: '_uploadFileServer.php',          //服务器地址
            success:function(file,data){
                console.log(data);
                console.log(file);
//            alert('上传成功');
            },
            progress:function(schedu){
                console.log('当前进度：',schedu);
                xP8.percentage = schedu;
            }
        })

````


## 多文件上传

