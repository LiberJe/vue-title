const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.conf.base')

module.exports = merge(baseWebpackConfig, {
  entry: {
    index: './example/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../example'),
    filename: '[name].js',
    publicPath: '/'
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './example/index.html',
      inject: true
    })
  ]
})