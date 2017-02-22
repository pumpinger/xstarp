/**
 * Created by fizz on 2017/2/22.
 */

var exec = require('child_process').exec;

// run webpack with watch
exec('webpack --config ./build/webpack.docs.config.js', (err, stdout, stderr) => {
  if(err) console.log(err);
  console.log('运行成功--webpack');
  console.log(stdout || stderr);
});

// run docs
exec('docsify serve docs -p 9100', (err, stdout, stderr) => {
  if(err) console.log(err);
  console.log('运行成功--文档服务');
  console.log(stdout || stderr);
});

