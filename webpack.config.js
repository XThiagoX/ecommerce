const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/_admin/index.html',
      filename: 'admin/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/_cart/index.html',
      filename: 'cart/index.html'

    }),
    new HtmlWebpackPlugin({
      template: './src/_login/index.html',
      filename: 'login/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/_product/index.html',
      filename: 'products/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/_cart/_status/index.html',
      filename: 'cart/status/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles.css'
    }),
    new CleanWebpackPlugin,
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader' ]
      }
    ],
  }
}
