var path = require('path');
var webpack = require('webpack');

module.exports = {
  // devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    'webpack/hot/only-dev-server',
    './src/index.jsx',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  devtool: 'source-map', // or "inline-source-map"

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      // loaders: ['react-hot', 'babel?jsx=true'],
      loaders: ['babel'],
      // include: path.join(__dirname, 'src')
    },

      // IMPORT JSON FILES (such as config.json)
    {
      test: /\.json$/,
      loader: 'json',
    },

      // IMPORT CSS STYLESHEETS
    {
      test: /\.css$/, // Only .css files
      loader: 'style!css', // Run both loaders
    },
    {
      test: /\.(png|woff|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
      loader: 'url-loader',
    }],
  },
};
