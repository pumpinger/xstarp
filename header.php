<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>title</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"/>
    <meta content="telephone=no,email=no" name="format-detection" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1"/>
    <meta name="renderer" content="webkit">
    <script type="text/javascript" src="dest/lib/jquery-2.1.4.js"></script>
    <link rel="stylesheet" href="dest/css/init.css"/>
    <link rel="stylesheet" href="dest/lib/iconfont/iconfont.css"/>
    <link rel="stylesheet" href="dest/css/global.css"/>
    <style>

        /*后期改用 scss  且解决 基础色问题*/
        header {background: #000;color: #ffffff;}
        header h2{padding: 10px 0 10px 10px;}

        nav {background: #000;color: #ffffff}
        nav ul {overflow: auto;}
        nav li {float: left}


        aside {display: inline-block;width: 100px;position: absolute; }
        .aside_level1 {border: 1px solid #ff9aa9;cursor: pointer; }
        aside .active .aside_level2{display: block;}
        .aside_level2 {display: none;}


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
    <div class="aside_level1">
        <a href="index.php">首页</a>
    </div>
    <div class="aside_level1">
        <p>样式</p>
        <a href="base.php" class="aside_level2">基础css</a>
        <a href="text.php" class="aside_level2">文字</a>
        <a href="icon.php" class="aside_level2">图标</a>
        <a href="button.php" class="aside_level2">按钮</a>
        <a href="tip.php" class="aside_level2">提示</a>
        <a href="from.php" class="aside_level2">表单元素</a>
        <a href="progress.php" class="aside_level2">进度条</a>
    </div>
    <div class="aside_level1">
        <p>结构</p>
        <a href="header.php" class="aside_level2">header</a>
        <a href="asdie.php" class="aside_level2">侧边栏</a>
        <a href="nav.php" class="aside_level2">导航</a>
        <a href="tab.php" class="aside_level2">标签页</a>
        <a href="panel.php" class="aside_level2">面板</a>
    </div>
    <div class="aside_level1">
        <p>插件</p>
        <a href="loading.php" class="aside_level2">载入、等待</a>
        <a href="imgview.php" class="aside_level2">图片</a>
        <a href="tree.php" class="aside_level2">树</a>
        <a href="pop.php" class="aside_level2">弹窗</a>
        <a href="table.php" class="aside_level2">表格</a>
        <a href="console.php" class="aside_level2">页面控制台</a>
    </div>
    <div class="aside_level1">
        <p>封装</p>
        <a href="map.php" class="aside_level2">地图</a>
        <a href="ajax.php" class="aside_level2">Ajax</a>
        <a href="chart.php" class="aside_level2">图表</a>
        <a href="time.php" class="aside_level2">时间选择器</a>
    </div>
    <div class="aside_level1">
        <a href="doc.php" >文档</a>
    </div>
</aside>


<article>


