const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'
const path = require('path');
const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: [APP_DIR + '/index.jsx'],

  output: {
    path: BUILD_DIR,
    filename: 'app.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /(\.js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader',`css-loader?${cssModules}`]
      }
    ]
  },

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/assets/index.html' }),
    new ExtractTextPlugin({ filename: 'style.css',  allChunks: true } )
  ]
}
