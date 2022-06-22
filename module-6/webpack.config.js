const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        shared: './src/js/index.js',
        page1: './src/js/page1.js',
        page2: './src/js/page2.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/page1.html',
            filename: `page1.html`,
            chunks: ['page1', 'shared']
        }),
        new HtmlWebpackPlugin({
            template: './src/page2.html',
            filename: `page2.html`,
            chunks: ['page2', 'shared']
        }),
    ],
};
