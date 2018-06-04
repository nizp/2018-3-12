const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
const webpack = require('webpack');
const obj = {
    entry:{
        app:'./app.js'
    },
    output:{
        path:path.resolve('./build/js'),
        // filename:'[name].[hash:5].js'
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: [ 'style-loader', 'css-loader' ],
                exclude: /node_modules/
            },
            {
                test:/\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template:'./index.html'
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:3000' })
    ],
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 3000,
        hot:true
    }
}


module.exports = obj;