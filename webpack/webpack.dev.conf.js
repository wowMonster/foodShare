const {merge} = require('webpack-merge');

const { 
    baseConfig,
    resolvePath
}=require('./webpack.base.conf');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        host: '192.168.199.210',
        port: 9000,
        hot: true,
        open: true
      },
})