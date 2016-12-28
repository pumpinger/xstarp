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
    /*ol, ul { list-style: none; }*/
    /*#x-uploader .x-queueList { display: inline-block; }*/

    /*#x-uploader .element-invisible { position: absolute !important; clip: rect(1px 1px 1px 1px); !* IE6, IE7 *! clip: rect(1px,1px,1px,1px); }*/

    /*#x-uploader .x-placeholder .webuploader-pick { font-size: 18px; background: #00b7ee; border-radius: 3px; line-height: 44px; padding: 0 30px; color: #fff; display: inline-block; margin: 20px auto; cursor: pointer; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1); }*/
    /*#x-uploader .x-placeholder .webuploader-pick-hover { background: #00a2d4; }*/
    /*#x-uploader .x-placeholder .flashTip { color: #666666; font-size: 12px; position: absolute; width: 100%; text-align: center; bottom: 20px; }*/
    /*#x-uploader .x-placeholder .flashTip a { color: #0785d1; text-decoration: none; }*/
    /*#x-uploader .x-placeholder .flashTip a:hover { text-decoration: underline; }*/
    /*#x-uploader .x-placeholder.webuploader-dnd-over { border-color: #999999; }*/
    /*#x-uploader .x-placeholder.webuploader-dnd-over.webuploader-dnd-denied { border-color: red; }*/
    /*#x-uploader .x-filelist { list-style: none; margin: 0; padding: 0; }*/
    /*#x-uploader .x-filelist:after { content: ''; display: block; width: 0; height: 0; overflow: hidden; clear: both; }*/
    /*#x-uploader .x-filelist li { width: 110px; height: 110px; background: url(./img/bg.png) no-repeat; text-align: center; margin: 0 8px 20px 0; position: relative; display: inline; float: left; overflow: hidden; font-size: 12px; }*/
    /*#x-uploader .x-filelist li p.log { position: relative; top: -45px; }*/
    /*#x-uploader .x-filelist li p.title { position: absolute; left: 0; width: 100%; overflow: hidden; white-space: nowrap; text-overflow : ellipsis; top: 5px; color: #000; font-size: 16px; text-indent: 5px; text-align: center; }*/
    /*#x-uploader .x-imgFile{display: inline-block;}*/
    /*@-webkit-keyframes progressmove {*/
        /*0% {*/
            /*background-position: 0 0;*/
        /*}*/
        /*100% {*/
            /*background-position: 17px 0;*/
        /*}*/
    /*}*/
    /*@-moz-keyframes progressmove {*/
        /*0% {*/
            /*background-position: 0 0;*/
        /*}*/
        /*100% {*/
            /*background-position: 17px 0;*/
        /*}*/
    /*}*/
    /*@keyframes progressmove {*/
        /*0% {*/
            /*background-position: 0 0;*/
        /*}*/
        /*100% {*/
            /*background-position: 17px 0;*/
        /*}*/
    /*}*/
    /*#x-uploader .x-filelist li p.imgWrap { position: relative; z-index: 2; line-height: 110px; vertical-align: middle; overflow: hidden; width: 110px; height: 110px; -webkit-transform-origin: 50% 50%; -moz-transform-origin: 50% 50%; -o-transform-origin: 50% 50%; -ms-transform-origin: 50% 50%; transform-origin: 50% 50%; -webit-transition: 200ms ease-out; -moz-transition: 200ms ease-out; -o-transition: 200ms ease-out; -ms-transition: 200ms ease-out; transition: 200ms ease-out; }*/
    /*#x-uploader .x-filelist li img { width: 100%; }*/
    /*#x-uploader .x-filelist li p.error { background: #f43838; color: #fff; position: absolute; bottom: 0; left: 0; height: 28px; line-height: 28px; width: 100%; z-index: 100; }*/
    /*#x-uploader .x-filelist li .success { display: block; position: absolute; left: 0; bottom: 0; height: 40px; width: 100%; z-index: 200; background: url(./img/success.png) no-repeat right bottom; }*/
    /*#x-uploader .x-filelist div.file-panel { position: absolute; height: 0; filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#80000000', endColorstr='#80000000')\0; background: rgba( 0, 0, 0, 0.5 ); width: 100%; top: 0; left: 0; overflow: hidden; z-index: 300; }*/
    /*#x-uploader .x-filelist div.file-panel span { width: 24px; height: 24px; display: inline; float: right; text-indent: -9999px; overflow: hidden;background: url(./img/icons.png) no-repeat; margin: 5px 1px 1px; cursor: pointer; }*/
    /*#x-uploader .x-filelist div.file-panel span.rotateLeft { background-position: 0 -24px; }*/
    /*#x-uploader .x-filelist div.file-panel span.rotateLeft:hover { background-position: 0 0; }*/
    /*#x-uploader .x-filelist div.file-panel span.rotateRight { background-position: -24px -24px; }*/
    /*#x-uploader .x-filelist div.file-panel span.rotateRight:hover { background-position: -24px 0; }*/
    /*#x-uploader .x-filelist div.file-panel span.cancel { background-position: -48px -24px; }*/
    /*#x-uploader .x-filelist div.file-panel span.cancel:hover { background-position: -48px 0; }*/

    /*#x-uploader .x-statusBar div{display: inline-block;vertical-align: middle;}*/
    /*#x-uploader #x-filePicker-add{display: inline-block;}*/
    /*#x-uploader .x-uploadBtn{ margin-left: 10px; position: relative; display: inline-block; cursor: pointer; background: #00b7ee; padding: 10px 15px; color: #fff; text-align: center; border-radius: 3px; overflow: hidden; }*/

    /*#x-uploader .retry{color: red;}*/
    /*#x-uploader .ignore{color: red;}*/


    /*#x-uploader .webuploader-container {*/
        /*position: relative;*/
    /*}*/
    /*#x-uploader .webuploader-element-invisible {*/
        /*position: absolute !important;*/
        /*clip: rect(1px 1px 1px 1px); !* IE6, IE7 *!*/
        /*clip: rect(1px,1px,1px,1px);*/
    /*}*/
    /*#x-uploader .webuploader-pick {*/
        /*position: relative;*/
        /*display: inline-block;*/
        /*cursor: pointer;*/
        /*background: #00b7ee;*/
        /*padding: 10px 15px;*/
        /*color: #fff;*/
        /*text-align: center;*/
        /*border-radius: 3px;*/
        /*overflow: hidden;*/
    /*}*/
    /*#x-uploader  .webuploader-pick-hover {*/
        /*background: #00a2d4;*/
    /*}*/

    /*#x-uploader .webuploader-pick-disable {*/
        /*opacity: 0.6;*/
        /*pointer-events:none;*/
    /*}*/



    #x-uploader .x-filelist li p.progress { position: absolute; width: 100%; bottom: 0; left: 0; height: 8px; overflow: hidden; z-index: 50; }
    #x-uploader .x-filelist li p.progress span { display: none; overflow: hidden; width: 0; height: 100%; background: #1483d8 url(./img/progress.png) repeat-x; -webit-transition: width 200ms linear; -moz-transition: width 200ms linear; -o-transition: width 200ms linear; -ms-transition: width 200ms linear; transition: width 200ms linear; -webkit-animation: progressmove 2s linear infinite; -moz-animation: progressmove 2s linear infinite; -o-animation: progressmove 2s linear infinite; -ms-animation: progressmove 2s linear infinite; animation: progressmove 2s linear infinite; -webkit-transform: translateZ(0); }
    #x-uploader .x-statusBar .progress { border: 1px solid #1483d8; width: 198px; background: #fff;  position: relative; display: inline-block; text-align: center;  color: #6dbfff; margin-right: 10px; }
    #x-uploader .x-statusBar .progress span.percentage { width: 0; height: 100%; left: 0; top: 0; background: #1483d8; position: absolute; }
    #x-uploader .x-statusBar .progress span.text { position: relative; z-index: 10; }




</style>

<div class="x-panel">
    <div class="x-panel-title">标签</div>
    <div class="x-panel-content">

        <p>示例：</p>
        <pre><code class="language-html"><textarea>
                    <div id="x-uploader">
                        <div class="x-queueList">
                            <div id="x-dndArea" class="x-placeholder">
                                <div id="x-filePicker"></div>
                            </div>
                        </div>
                        <div class="x-imgFile"></div>
                        <div class="x-statusBar" style="display:none;">
                            <div class="progress">
                                <span class="text">0%</span>
                                <span class="percentage"></span>
                            </div><div class="x-info"></div>
                            <div class="x-upload-btns">
                                <div id="x-filePicker-add"></div><div class="x-uploadBtn">开始上传</div>
                            </div>
                        </div>
                    </div>
                    <script >
                        var upload = xUpload({
                            dom: $("#x-uploader"),
                            fileType :1,                             //   1 头像     2 文件
                            fileNumLimit: 300,                       //总共能上传多少个文件
                            fileSizeLimit: 200 * 1024 * 1024,        //   多个文件大小
                            fileSingleSizeLimit: 100 * 1024 * 1024,   //   单个文件大小
                            formData: {
                                uid: 123
                            },                                       //传给后台的数据
                            fileVal:'x-file',                        //input框 name
                            chunked: false,                           //是否分片传送
                            chunkSize: 512 ,                         //分片大小  字节
                            pick: {
                                id :'#x-filePicker',
                                label: '批量上传'                     //按钮名字和id   可以点击的按钮的id和name
                            },
                            server: '?m=Admin&c=User&a=uploadPhoto',          //服务器地址
                            success:function(data,ret){
                                //成功后做的事情
                            },
                            progress:function(schedu){
                                //当前进度
                                console.log('当前进度：',schedu);
                            }
                        })
                    </script>
                </textarea></code></pre>
        <p>效果:</p>

        <div id="x-uploader">
            <div class="x-queueList">
                <div id="x-dndArea" class="x-placeholder">
                    <div id="x-filePicker"></div>
                </div>
            </div>
            <div class="x-imgFile"></div>
            <div class="x-statusBar" style="display:none;">
                <div class="progress">
                    <span class="text">0%</span>
                    <span class="percentage"></span>
                </div><div class="x-info"></div>
                <div class="x-upload-btns">
                    <div id="x-filePicker-add"></div><div class="x-uploadBtn">开始上传</div>
                </div>
            </div>
        </div>

        <p>规则:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileType : 1          //是上传头像还是批量上传文件  1、头像  2、文件上传(批量)</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileVal : 'x-file',   //上传文件的input框name</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;formData: {uid: 123},     //传给后台的数据</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;server: 'uploadFileServer.php', //后台处理上传事件的地址</p>
    </div>




    <?php

    include "layout_footer.php";
    ?>
    <script type="text/javascript" src="src/js/upload.js"></script>

    <script >
        var upload = xUpload({
            dom: $("#x-uploader"),
            fileType :2,                             //   1 头像     2 文件
            fileNumLimit: 300,                       //总共能上传多少个文件
            fileSizeLimit: 200 * 1024 * 1024,        //   多个文件大小
            fileSingleSizeLimit: 100 * 1024 * 1024,   //   单个文件大小
            formData: {
                uid: 123
            },                                       //传给后台的数据
            fileVal:'x-file',                        //input框 name
            pick: {
                id :'#x-filePicker',
                label: '批量上传'                     //按钮名字和id   可以点击的按钮的id和name
            },
            server: '?m=Admin&c=User&a=uploadPhoto',          //服务器地址
            success:function(data,ret){
            console.log(data);
            console.log(ret);
//            alert('上传成功');
            },
            progress:function(schedu){
                console.log('当前进度：',schedu);
            }
        })
    </script>