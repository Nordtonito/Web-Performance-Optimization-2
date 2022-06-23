const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: {
      import:'./src/task2.js',
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: './index.html' // Don't forget to replace file name for each task
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: path.resolve(__dirname, "node_modules/package"),
        sideEffects: false,
      }
    ]
  },
  mode: 'production',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  }
};