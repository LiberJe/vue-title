const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BASE_CONFIG = require('./webpack.conf')
const PROJECT_ROOT = require('path').resolve(__dirname)

module.exports = merge(BASE_CONFIG, {
  output: {

  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${PROJECT_ROOT}/demo/index.html`,
      inject: 'head'
    })
  ]
})