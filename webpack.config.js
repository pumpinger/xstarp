



const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


var HtmlWebpackPlugin = require('html-webpack-plugin');

const extractCSS = new ExtractTextPlugin('[name].css');
// const extractSCSS = new ExtractTextPlugin('[name].scss.css');


module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: ['./dev.js'],

        vendor: ['jquery','./components/upload/webuploader.js','./components/validate/jquery.validate.js'],
        // jquery: []
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // filename: '[name].[chunkHash:8].js',
        filename: '[name].js',
        publicPath: '/'  //todo  这里为什么 不能用 ./
    },
    module: {
        rules: [
            /*            {
                            test: /\.css$/,
                            // use: ['style-loader', 'css-loader'],
                            // use:  ExtractTextPlugin.extract({
                            //     loader: 'css-loader?importLoaders=1',
                            // }),
                            use:  extractCSS.extract([
                                'css-loader',
                                'sass-loader',

                            ])
                        },*/
            {
                test: /\.(svg|eot|woff|ttf)$/,
                loader: 'file-loader?name=[name].[ext]&publicPath=./&outputPath=./vendor/fonts/',
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader?name=[name].[ext]&publicPath=./&outputPath=./img/',
            },
            {
                // test: /\.(sass|scss)$/,
                test: /\.(sass|scss|css$)$/,
                use:  extractCSS.extract([
                    // 'style-loader',
                    'css-loader',
                    'sass-loader',
                ]),
            },
            {
                test: require.resolve('jquery'),  // 此loader配置项的目标是NPM中的jquery    //变成了全局变量（非CMD插件）
                loader: 'expose-loader?$!expose-loader?jQuery', // 先把jQuery对象声明成为全局变量`jQuery`，再通过管道进一步又声明成为全局变量`$`
            },
        ],
    },
    devServer: {
        port:9200,
        contentBase: path.resolve(__dirname, './')  // 这里渲染根目录不重要因为要用docsify的服务器根目录,这里只是提供一个热更新js,css
    },
    // externals:{
    //     'jquery':'jQuery'   //伪装jquery ,把全局的jQuery 给他(就不会打包jQuery了)
    // },
    // devtool:'source-map',
    plugins: [     //分开打包
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: './vendor/js/[name].js',
            // chunks:['app','vendor']
        }),


        extractCSS,


        // new webpack.ProvidePlugin({    //变成了编译过程中的全局变量  不用在自己文件require('jquery')
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery',
        //     'window.$': 'jquery',
        // }),
        // new CleanWebpackPlugin(
        //     ['dist/app.*'],　 //匹配删除的文件
        //     {
        //         root: __dirname,       　　　　　　　　　　//根目录
        //         verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
        //         dry:      false        　　　　　　　　　　//启用删除文件
        //     }
        // )
        // extractSCSS,

        // new HtmlWebpackPlugin({
        //     title: 'demo',
        //     template: 'index.html' // 模板路径
        // }),

    ],
};

//场景1 ： 用户自己用自己的jq  ： 要1.externals；2.new webpack.ProvidePlugin     不要1.CommonsChunkPlugin；2.test: require.resolve('jquery')


//场景2 ： 用户用我们的vendor ： 要1.CommonsChunkPlugin；2.test: require.resolve('jquery')    不要1.externals；2.new webpack.ProvidePlugin


//现在  new webpack.ProvidePlugin 未发现明显作用了，可能是我错了
