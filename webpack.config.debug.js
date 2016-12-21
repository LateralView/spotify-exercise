var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');
const APP_TITLE = 'Spotifyzer';
const STYLE_LOADERS = [
  'style',
  'css?importLoaders=1',
  'font-loader?format[]=truetype&format[]=woff&format[]=embedded-opentype'
];

module.exports = {
  devtool: 'inline-source-map',
  entry: ['babel-polyfill', APP_DIR + '/index.js'],
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test : /\.js?/,
        exclude: /(node_modules|bower_components)/,
        loader: 'ng-annotate',
        include : APP_DIR
      },
      {
        test : /\.js?/,
        exclude: /(node_modules|bower_components)/,
        include : APP_DIR,
        loader : 'babel-loader',
        query: {
          retainLines: true
        }
      },
      {
        test: /\.scss$/,
        loaders: [...STYLE_LOADERS, 'sass?sourceMap']
      },
      {
        test: /\.css$/,
        loaders: STYLE_LOADERS
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]'
      },
      //font-awesome
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: APP_TITLE,
      template: path.join(APP_DIR, "/index.debug.html"), // Load a custom template
      inject: true, // Inject all scripts into the body
      favicon: path.join(APP_DIR, "/favicon.ico")
    })
  ]
};
