const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        index: [ 'babel-polyfill', './src/index' ],
        vendor: ['react', 'react-dom']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
             // vendor是包括公共的第三方代码，称为initial chunk
            name: ['vendor']
        })
    ],
    devServer: {
        contentBase: './dist'
    },
    module: {
        loaders: [{
            test: /\.js$/, loader: 'babel-loader'
        }]
    }
}