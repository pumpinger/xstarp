/**
 * Created by fizz on 2017/1/19.
 */

var demo_css = require('./demo.scss');
// var demo_csss = require('./demo.css');
var $ = require('jquery');
var jquery = require('jquery');

$.fn.demo = function() {
	console.log("I am running");
};

var demo;


window.demo = demo = function() {
	console.log("I am running");
};




module.exports = demo;