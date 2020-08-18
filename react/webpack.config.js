const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    home: path.resolve(__dirname,'src/js/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer:{
    hot: true,
    open: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'react',
      template: path.resolve(__dirname, 'index.html')
    })
  ]
}