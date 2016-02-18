<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>title</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"/>
    <meta content="telephone=no,email=no" name="format-detection" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1"/>
    <meta name="renderer" content="webkit">
    <script type="text/javascript" src="lib/jquery-2.1.4.js"></script>
    <link rel="stylesheet" href="css/init.css"/>
    <link rel="stylesheet" href="lib/iconfont/iconfont.css"/>
    <link rel="stylesheet" href="src/scss/global.css"/>
    <style>

        /*后期改用 scss  且解决 基础色问题*/
        header {background: #000;color: #ffffff;}
        header h2{padding: 10px 0 10px 10px;}

        nav {background: #000;color: #ffffff}
        nav ul {overflow: auto;}
        nav li {float: left}


        aside {display: inline-block;width: 100px;position: absolute; }
        .aside_1 {border: 1px solid #ff9aa9;cursor: pointer; }
        aside .active .aside_2{display: block;}
        .aside_2 {display: none;}


        footer {background: #000;color: #ffffff;position: fixed;bottom: 0;width: 100%;text-align: center;}
        footer p{padding: 3px 0;}


        article {padding-left: 100px;}
    </style>
</head>
<body>
<header>
    <h2>Xstarp</h2>
</header>


<aside>
    <div class="aside_1">
        <a href="index.php">首页</a>
    </div>
    <div class="aside_1">
        <p>样式</p>
        <a href="base.php" class="aside_2">基础css</a>
        <a href="text.php" class="aside_2">文字</a>
        <a href="icon.php" class="aside_2">图标</a>
        <a class="aside_2">按钮</a>
        <a class="aside_2">tip</a>
        <a class="aside_2">表单元素</a>
        <a class="aside_2">面板</a>
    </div>
    <div class="aside_1">
        <p>组件</p>
        <a class="aside_2">header</a>
        <a class="aside_2">侧边栏</a>
        <a class="aside_2">tab</a>
        <a class="aside_2">表格</a>
        <a class="aside_2">表单</a>

    </div>
    <div class="aside_1">
        <p>插件</p>
        <a class="aside_2">loading</a>
        <a class="aside_2">图片</a>
        <a class="aside_2">树</a>
        <a class="aside_2">弹窗</a>
        <a class="aside_2">表格</a>
        <a class="aside_2">页面控制台</a>
    </div>
    <div class="aside_1">
        <p>封装</p>
        <a class="aside_2">地图</a>
        <a class="aside_2">图表</a>
        <a class="aside_2">时间选择器</a>
    </div>
    <div class="aside_1">
        <a>文档</a>
    </div>
</aside>


<article>


