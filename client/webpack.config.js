const wenpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const mode = process.env.NODE_ENV === 'production' ?'production' :'development'
module.exports = {
    mode: mode,
    entry: {
        index: path.resolve(__dirname, 'src/index.tsx')
    },
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    devtool: 'source-map',
    devServer:{
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback:{ //browerHistory的时候，刷新会报404，自动重定向到index.html
            index: path.resolve(__dirname, 'index.html')
        }
    },
    resolve:{
        alias:{
            "@":path.resolve(__dirname, 'src'),
            "~":path.resolve(__dirname, 'node_modules')
        },
        //导入文件没有后缀时 自动去搜索设置的后缀文件
        extensions:['.ts','.tsx','.js','.json']
    },
    module:{
        rules:[
            {
                test: /\.(j|t)sx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.(j|t)sx?$/,
                loader: 'source-map-loader',
            },
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use:['style-loader', 'css-loader','less-loader']
            },
            {
                test: /\.(jpg|png|gif|svg|jpeg)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}