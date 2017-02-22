
var config = require('./webpack.prod.config');
var path = require('path');

config.watch = true;
config.output = {
  path: path.resolve(__dirname,'../docs/dist'),
    publicPath: path.resolve(__dirname,'../docs/dist/'),
    filename: 'xstarp.js'
};

module.exports = config;
