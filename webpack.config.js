const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './app.js',

    output: {
        publicPath: '/assets/',
        filename: 'bundle.js'
    },

    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "src/html"),
        port: 8888,
        hot: true,
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = config;
