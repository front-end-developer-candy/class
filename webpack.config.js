const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    resolve(__dirname, './entry.js')
  ],
  resolve: {
    extensions: ['.js', '.ts']
  },
  mode: 'development',
  output: {
    publicPath: '/',
    path: resolve(__dirname, './dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [
          /node_modules/
        ]
      }
    ]
  },
  devServer: {
    contentBase: resolve(__dirname, '../../dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 7070
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: resolve(__dirname, './src/index.html')
    })
  ]
};