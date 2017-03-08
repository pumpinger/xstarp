const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// multiple extract instances
var extractCSS = new ExtractTextPlugin('[name].css');
var extractLESS = new ExtractTextPlugin('[name].less');

module.exports = {
	watch: true,
	entry: {
		SMap: path.resolve(__dirname, '../src/zq.js')

	},
	output: {
		path: path.resolve(__dirname,'../dist'),
		publicPath: path.resolve(__dirname,'../dist/'),
		filename: 'SMap.js'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: extractCSS.extract(['css','sass'])
			},
			{
				test: /\.css$/,
				loader: extractCSS.extract(['css'])
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url?limit=40000'
			}
		]
	},
	devtool: 'eval-source-map',
	externals: {
		jquery: 'window.$', // 暴露全局jQuery变量
		$: 'window.$', // 暴露全局jQuery变量
		moment: 'window.moment'
	},

	plugins: [
		extractCSS,
		extractLESS,
		new webpack.ProgressPlugin(function handler(percentage, msg) {
			if (percentage==0) {
				console.log('开始编译');
			}

			if (percentage==1) {
				console.log('结束编译');
			}
		})
	]
};

