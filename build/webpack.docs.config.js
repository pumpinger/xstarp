var config = require('./webpack.prod.config');
var path = require('path');
var opn = require('opn');
var copyDir = require('copy-dir');
var from = path.resolve(__dirname, '../dist');
var to   = path.resolve(__dirname, '../docs/dist');

config.watch = true;
config.output.path = path.resolve(__dirname,'../docs/dist');
config.output.publicPath = path.resolve(__dirname,'../docs/dist/');



copyDir.sync(from, to);

opn('http://localhost:9100');

module.exports = config;
