const path = require('path');
const webpack = require('webpack');
const WebpackChunkHash = require('webpack-chunk-hash');
const merge = require('webpack-merge');
const JavaScriptObfuscator = require('webpack-obfuscator');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OfflinePlugin = require('offline-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base');
const postcssPlugins = require('./config/postcssPlugins');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const publicPath = '/';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

module.exports = merge(baseConfig, {
  devtool: 'cheap-module-source-map',

  output: {
    publicPath: '/',
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.[name].[chunkhash].js',
    chunkFilename: 'bundle.[name].[chunkhash].js',
    pathinfo: false
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true, // default is false
              sourceMap: false,
              minimize: true,
              importLoaders: 1,
              localIdentName: '[name]--[local]--[hash:base64:8]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              minimize: true,
              quiet: true,
              plugins: postcssPlugins
            }
          }
        ]
      },
      {
        test: require.resolve('../src/index.js'),
        loader: 'imports-loader',
        query: { offlineRuntime: 'offline-plugin/runtime' }
      }
    ]
  },

  /**
   * @see https://stackoverflow.com/a/49429500/561610
   */
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          ie8: false,
          warnings: false,
          output: {
            comments: false
          }
        },
        sourceMap: true,
        exclude: [/bundle\.app/]
      }),

      new JavaScriptObfuscator({
        compact: true,
        controlFlowFlattening: false,
        deadCodeInjection: false,
        debugProtection: false,
        debugProtectionInterval: false,
        disableConsoleOutput: true,
        mangle: true,
        rotateStringArray: true,
        selfDefending: true,
        stringArray: true,
        stringArrayEncoding: false,
        stringArrayThreshold: 0.75,
        unicodeEscapeSequence: false,
        sourceMap: true,
        domainLock: [
          'app.dgmedical.com.br',
          'localhost:9001'
        ]
      }, ['bundle.vendors.**.js', 'bundle.runtime.**.js'])
    ],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          enforce: true,
          chunks: 'all'
        }
      }
    }
  },

  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),

    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle-analyzer.html'
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].css'
    }),

    new OfflinePlugin({
      externals: ['/'],
      publicPath,
      relativePaths: false,
      ServiceWorker: {
        navigateFallbackURL: '/',
        events: true,
        excludes: ['*.hot-update.*']
      },
      AppCache: {
        publicPath: `${publicPath}/appcache`
      }
    })
  ]
});
