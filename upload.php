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
                            fileType :1,
                            fileNumLimit: 300,
                            fileSizeLimit: 200 * 1024 * 1024,
                            fileSingleSizeLimit: 100 * 1024 * 1024,
                            formData: {
                                uid: 123
                            },
                            accept:{}
                            fileVal:'x-file',
                            fileButton: {
                                id :'#x-filePicker',
                                label: '批量上传',
                                multiple:false
                            },
                            addButton:{
                                id: '#x-filePicker-add',
                                label: '继续添加'
                            },
                            server: 'uploadFile_Server.php',
                            success:function(file,data){
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
        <table class="x-table x-table-interval">
            <thead>
            <tr><th>属性</th><th>类型</th><th>说明</th><th>默认值</th></tr></thead>
            <tbody>
            <tr>
                <td>fileType</td>
                <td>Number</td>
                <td>区分文件上传和头像上传，1、头像上传(单张)，2、文件上传（批量）,优先级高于accept属性，如果为1的话默认支持gif,jpg,jpeg,bmp,png等格式</td>
                <td>2</td>
            </tr>
            <tr>
                <td>fileNumLimit</td>
                <td>Number</td>
                <td>验证文件总数量的值，超出不能加入队列（多文件上传）</td>
                <td>300</td>
            </tr>
            <tr>
                <td>fileSizeLimit</td>
                <td>number  单位：字节</td>
                <td>所有文件的大小限制</td>
                <td>200M</td>
            </tr>
            <tr>
                <td>fileSingleSizeLimit</td>
                <td>number  单位：字节</td>
                <td>单个文件的大小</td>
                <td>50M</td>
            </tr>
            <tr>
                <td>formData</td>
                <td>Array</td>
                <td>传递给服务器的参数</td>
                <td>无</td>
            </tr>
            <tr>
                <td>fileVal</td>
                <td>String</td>
                <td>上传文件input框的name</td>
                <td>file</td>
            </tr>
            <tr>
                <td>accept</td>
                <td>Array</td>
                <td>允许上传的文件类型，1、title： 文字描述
                    2、extensions： 允许的文件后缀，不带点，多个用逗号分割。
                </td>
                <td>无（所有类型）</td>
            </tr>
            <tr>
                <td>fileButton</td>
                <td>Array</td>
                <td>文件上传按钮属性 ，1、id:dom //按钮ID/DOM 2、label:String //按钮文本内容,3、multiple:Boolean //是否开起同时选择多个文件能力</td>
                <td> {
                     id: '#x-filePicker',
                     label: '批量上传'
                     multiple:true,
                     }
                </td>
            </tr>
            <tr>
                <td>addButton</td>
                <td>Array</td>
                <td>添加文件按钮属性 ，1、id:dom：//按钮ID/DOM 、label:String //按钮文本内容</td>
                <td> {
                     id: '#x-filePicker-add',
                     label: '继续添加'
                     }
                </td>
            </tr>
            <tr>
                <td>servers</td>
                <td>String</td>
                <td>服务器地址</td>
                <td> 无</td>
            </tr>


            </tbody>


        </table>
        <table class="x-table x-table-interval">
            <thead>
            <tr><th>方法</th><th>返回值</th><th>参数</th><th>说明</th></tr></thead>
            <tbody>
            <tr>
                <td>success</td>
                <td>无</td>
                <td>1、file: file对象， 2、data:服务返回的数据 </td>
                <td>上传成功后的回调</td>
            </tr>
            <tr>
                <td>progress</td>
                <td>无</td>
                <td>1、schedu:当前上传进度 ,  多文件时表示当前总进度</td>
                <td>文件上传时进度的实时返回</td>
            </tr>


            </tbody>
        </table>
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
            fileButton: {
                id :'#x-filePicker',
                label: '批量上传',                     //按钮名字和id   可以点击的按钮的id和name
                multiple:false
            },
            addButton:{
                id: '#x-filePicker-add',
                label: '继续添加'
            },
            server: 'uploadFile_Server.php',          //服务器地址
            success:function(file,data){
            console.log(data);
            console.log(file);
//            alert('上传成功');
            },
            progress:function(schedu){
                console.log('当前进度：',schedu);
            }
        })
    </script>