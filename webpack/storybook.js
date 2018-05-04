/* eslint-disable max-len */
/**
 * Build config for development process that uses Hot-Module-Replacement
 * https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
 */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const postcssPlugins = require('./config/postcssPlugins');

module.exports = merge({}, {
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: [
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../src/app'),
      path.resolve(__dirname, '../src/theme'),
      path.resolve(__dirname, '../node_modules')
    ]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: 'assets/media/[name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true, // default is false
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]--[local]--[hash:base64:8]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: postcssPlugins
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new LodashModuleReplacementPlugin({
      shorthands: true,
      flattening: true,
      currying: true,
      deburring: true,
      chaining: true,
      paths: true,
      caching: true
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
});
