



const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractCSS = new ExtractTextPlugin('[name].css');
// const extractSCSS = new ExtractTextPlugin('[name].scss.css');


module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: ['./dev.js'],
        // vendor: ['jquery']
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
                test: /\.(png|jpg|gif|svg|eot|woff|ttf)$/,
                use: 'file?name=./static/fonts/[name].[ext]',
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
                test: require.resolve('jquery'),  // 此loader配置项的目标是NPM中的jquery    //变成了全局变量
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
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     filename: 'vendor.js',
        //     minChunks: 2,
        // }),
        extractCSS,

        new webpack.ProvidePlugin({    //变成了编译过程中的全局变量
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        }),
        // new CleanWebpackPlugin(
        //     ['dist/app.*'],　 //匹配删除的文件
        //     {
        //         root: __dirname,       　　　　　　　　　　//根目录
        //         verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
        //         dry:      false        　　　　　　　　　　//启用删除文件
        //     }
        // )
        // extractSCSS,
    ],
};