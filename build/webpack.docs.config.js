var config = require('./webpack.prod.config');
var path = require('path');
var opn = require('opn');

config.watch = true;
config.output.path = path.resolve(__dirname,'../docs/dist');
config.output.publicPath = path.resolve(__dirname,'../docs/dist/');

opn('http://localhost:9100');

module.exports = config;
