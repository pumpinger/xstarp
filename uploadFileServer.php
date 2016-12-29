<?php
/*
Uploadify
Copyright (c) 2012 Reactive Apps, Ronnie Garcia
Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/

// Define a destination

$file_name = 'x-file';//这个是上传input的名字
saveFile($file_name);

function saveFile($file_name){

    $target_pathfile = dirname(__FILE__).DIRECTORY_SEPARATOR.'file';//目的绝对路劲 包括文件名
    if(_makeDir($target_pathfile)){
        $target_pathfile .= DIRECTORY_SEPARATOR.$_FILES[$file_name]['name'];
        if (isset($_FILES[$file_name])) {
            $status = move_uploaded_file($_FILES[$file_name]['tmp_name'],$target_pathfile);
        }
    }
    if($status){
        var_dump($target_pathfile);
    }else{
        var_dump('服务器错误');
    }
}



function _makeDir($dir) {
    if (!is_dir($dir)) {
        if(_makeDir(dirname($dir))) {
            return mkdir($dir);
        }
        return false;
    }
    return true;
}

?>