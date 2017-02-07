module.exports = {

    watch: true,

    target: 'electron',

    entry: {
        // transfer: './app/src/transfer.js',
        fileManager: './app/src/fileManager.js'
    },

    output: {
        path: __dirname + '/app/build',
        publicPath: 'build/',
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.scss$/,
                loader: 'sass-loader'
            }
        ]
    },

    resolve: {
        alias: {vue: 'vue/dist/vue.js'}
    }
}
