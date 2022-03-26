const {merge} = require('webpack-merge');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin'); // 清理原来的打包文件
const { 
    baseConfig,
    resolvePath
}=require('./webpack.base.conf');

const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new CssMinimizerWebpackPlugin(),
    ]
})