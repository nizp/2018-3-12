const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const webpack = require('webpack');

const obj = {
    entry:{
        ppa:'./1.js'  //编一个一会打包后的文件名
    },
    output:{
        path:path.resolve('./build'), //出口的文件夹
        filename:"[name].js" //name等于entry的ppa
    },
    plugins:[
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname, './*.html')),
        }),
        // new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css"
          }),
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename: 'index.html',
            title:'呵呵哒',
            chunks:['index'],
            hash:true,//防止缓存
            minify:{
                removeAttributeQuotes:true,//去掉引号 
                collapseWhitespace:true //一行显示
            },
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            // use: [
            //   { loader: "style-loader" },
            //   { loader: "css-loader" }
            // ]
            use:[
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]
          }
        ]
    },
    devServer:{
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 3000,
        // hot:true
    }
}

module.exports = obj;