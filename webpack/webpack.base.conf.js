const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {
//     CleanWebpackPlugin
// } = require("clean-webpack-plugin");
//相对路径转绝对路径
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//css单独文件
const resolvePath = _path => path.resolve(__dirname, _path);

const baseConfig = {
    entry: resolvePath('../src/index.jsx'),
    output: {
        path: resolvePath('../dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
        }, {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
        }, {
            test: /\.jsx$/,
            use: 'babel-loader'
        }, {
            test: /\.svg$/,
            use: 'asset/resource'
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: resolvePath('../public/index.html'),
        filename: 'index.html',
        title: 'react app',
    }), new MiniCssExtractPlugin({
        filename: '[name].[hash:8].css'
    })],
}
module.exports = { 
    baseConfig,
    resolvePath
}