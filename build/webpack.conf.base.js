const webpack = require('webpack')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["es2015", "stage-2"]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue']
  }
}