const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let config = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, './postcss.config.js'),
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, './postcss.config.js'),
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': process.env.NODE_ENV
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: '!!html-loader?interpolate!' + path.resolve(__dirname, '../src/html/index.html')
    }),
  ]
}
if (process.env.NODE_ENV === 'development') {
  config.entry = ['./build/dev-client'].concat(config.entry)
  config = webpackMerge(config, {
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new FriendlyErrorsPlugin()
    ]
  })
}
module.exports = config