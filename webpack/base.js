/**
 * Base webpack config used across other specific configs
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const root = '..';

module.exports = {
  context: path.resolve(__dirname, `${root}/src`),

  entry: {
    app: 'index.js'
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
      }
    ]
  },

  // https://webpack.github.io/docs/configuration.html#resolve
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: [
      path.resolve(__dirname, `${root}/src`),
      path.resolve(__dirname, `${root}/src/app`),
      path.resolve(__dirname, `${root}/src/theme`),
      path.resolve(__dirname, `${root}/node_modules`)
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

    new HtmlWebpackPlugin({
      title: 'DG Medical',
      filename: 'index.html',
      template: 'index.html',
      favicon: 'favicon.ico',
      inject: 'body'
    }),

    new WebpackPwaManifest({
      name: 'DG Medical',
      short_name: 'DG Medical',
      description: 'Obtenha um prontuário simples, acessível, personalizável e com preço justo',
      theme_color: '#004788',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]
    })
  ]
};
