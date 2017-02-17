/**
 * Created by fizz on 2017/1/22.
 * @author fizzstack@gmail.com
 * @module develop server
 */

var express = require('express');
var config = require('./build/server.config.js');
var webpackConfig = require('./build/webpack.dev.config');
var path = require('path');
var opn  = require('opn');
var webpack = require('webpack');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");

var app = express();
var compiler = webpack(webpackConfig);

var devMiddleware = webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath,
	// noInfo:,
	stats: {
		colors: true
	}
});
var hotMiddleware = webpackHotMiddleware(compiler, {
	log: function(){}
});

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
	compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
		hotMiddleware.publish({ action: 'reload' });
		cb()
	})
});

app.use(devMiddleware); // server webpack bundle output
app.use(hotMiddleware); // enable hot-reload

var baseUrl = 'http://localhost:' + config.port;

app.get('/', function(req, res){
	res.redirect('./test/examples/index.html');
});

app.get('/custom', function(req, res){
	res.redirect('./server/custom.html');
});

// var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(express.static('./'));

// 在bundle可用的情况下 console.log出正在监听的url;
devMiddleware.waitUntilValid(function () {
	console.log('正在监听：' + baseUrl + '\n');
	opn(baseUrl)
});

app.listen(config.port, function (err) {
	if(err) {
		console.log(err);
		return
	}
	console.log('==========服务器开启成功=========');
});































