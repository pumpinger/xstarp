# xstrap

## 版本



## 安装
```bash
$ npm install 
```

## 使用

- 开发
```bash
$ npm run watch
$ npm run doc
```


- 构建
```bash
$ npm run build
```

- 写文档

在doc里面写相应组件的markdown文件

- 写代码

在src里面写相应组件js/scss

__
### 目录结构 
```bash
|---- root
  |---- dist 是编译后的文件，压缩版
      |---- vendor 第三方大包，直接放在这里，不参与打包
  |---- doc 文档
  |---- file 一些要用到的资源文件
  |---- src 源文件
    |---- common 公用文件
    |---- components 组件
    |---- vendor 参与打包的第三方
    |---- dev.js 开发用的出口，对应//webpack.dev.config.js//中的entry
    |---- app.js 构建用的出口，对应//webpack.prod.config.js//中的entry
  |---- vendor 文档使用的第三方与项目无关

```


## 特性
- 按需打包
- sass写css
- 压缩图片
- autoprefix自动添加前缀解决兼容样式，postcss对css进行后处理
- js、css、图片压缩
- 自刷新 
- 待补充


## 待处理问题
- 打包完成后修改html
- soucemap
- scss避免依赖重复
- 第三方库如何导  如何不和appjs 在一起
- 区分dev

### 构建工具
- 使用webpack 对代码进行编译构建、模块打包
- 开发环境（dev），生成环境（prod）分别打包
- 特殊需求单独打包，写一个数组，把用到的插件、组件、模块名放进去，webpack构建一下就可以生成所需要的bundle
- gulp可能用的上，用来执行简单任务

### 编码规范
airbnb JavaScript 编码规范
js doc 规范。Why js doc？ phpStorm 能够检查传参类型
[Use JSDoc: Getting Started with JSDoc 3](http://usejsdoc.org/about-getting-started.html#getting-started)

### 代码审查
代码质量检查：ESLint

### 单元测试
对于复杂度较高的模块，需要单元测试，进行质量控制
[mochajs](https://mochajs.org/)
[测试框架 Mocha 实例教程](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)


## 思路
- CMD规范 目前
- ES6 规范，将来；with babel

js：
vendor.js [vendor lib]
xstrap.js [module bundle]

写webpack配置文件，打包指定模块的文件

### 自动化思路
### webpack-dev-server
### browser-sync
```bash
$ browser-sync start --server --files "**/*.css, **/*.html, **/*.js"
```
### webpack-dev-middleware && webpack-hot-middleware
为了以后可以支持定制，采用这种方式，而且可以减少开启的服务器数量。

### 其他自动化


- 每一个组件都在自己的目录进行维护，保持结构清晰；
- 如果多个模块都引用了同一个模块，打包的时候webpack会把这个模块提取出来，只用一份；
[地址](http://www.zcfy.cc/article/getting-started-with-webpack-2-thinking-in-code-2110.html)

## 文档规范
[docsify](https://docsify.js.org/)




## 参考文章
- [基于webpack搭建前端工程解决方案探索](https://github.com/chemdemo/chemdemo.github.io/issues/10)
- [webpack自动雪碧图生成 - 推酷](http://www.tuicool.com/articles/YZfeeu7)
- 资源集合[前端构建工具 - SegmentFault](https://segmentfault.com/bookmark/1230000007618309)
- [Scrat - webapp模块化开发体系](http://scrat.io/#!/index)
- [base64图片在各种浏览器的兼容性处理 - 小化·较瘦 - 博客园  ](http://www.cnblogs.com/murphyzhou/p/base64-image-compatible.html)
- [fouber/blog: 没事写写文章，喜欢的话请点star，想订阅点watch，千万别fork！](https://github.com/fouber/blog)
- [webpack多页应用架构系列（四）：老式jQuery插件还不能丢，怎么兼容？ - 实用至上 SegmentFault  ](https://segmentfault.com/a/1190000006887523#articleHeader8)
- [webpack进阶教程（二）——webpack引入jquery多种方法探究](https://segmentfault.com/a/1190000007249293)
- [webpack在多页面中路径输出问题 - SegmentFault](https://segmentfault.com/q/1010000002607794)
- [webpack使用优化 | Web前端 腾讯AlloyTeam Blog | 愿景: 成为地球卓越的Web团队！](http://www.alloyteam.com/2016/01/webpack-use-optimization/)

## 用到的东西
- [webpack css 输出独立文件-插件](https://github.com/webpack/extract-text-webpack-plugin)
- [Webpack-前端资源模块化加载打包工具 - IT笔录](https://itbilu.com/nodejs/npm/Vy6BnJkY-.html)


