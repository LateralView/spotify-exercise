const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    hot: true, 
    inline: true, 
    historyApiFallback: true 
  },
  externals: {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window'
  },
  entry: {
    bundle: [
      'babel-polyfill',
      APP_DIR + '/index.js',
      APP_DIR + '/index.html'
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /sinon\.js$/,
        use: [{ 
          loader: 'imports-loader',
          options: {define: '>false', require: '>false'}
        }]
      },
      {
        test: /index.html/,
        use: [{
          loader: 'file-loader', 
          options: { name: '[name].[ext]' }
        }]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].[ext]' }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              optipng: { optimizationLevel: 7 },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              mozjpeg: { quality: 65 }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader?sourceMap' },
            { loader: 'postcss-loader?sourceMap' },
            { loader: 'sass-loader?sourceMap' }
          ]
        })
      },
      {
        test : /\.jsx?/,
        include : APP_DIR,
        use: [
          { loader: 'react-hot-loader' },
          { loader: 'babel-loader' },
          {
            loader: 'eslint-loader',
            options: { failOnError: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }
    })
  ],
  resolveLoader: { 
    modules: [ path.join(__dirname, 'node_modules') ]
  },
  resolve: {
    alias: {
      '~': path.resolve(APP_DIR),
      sinon: 'sinon/pkg/sinon.js'
    },
    modules: [ path.join(__dirname, 'node_modules') ]
  }
}