var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  context: path.resolve(__dirname, 'src'),
  entry: [
            'babel-polyfill',

            //'react-hot-loader/patch',
            // activate HMR for React

            //'webpack-dev-server/client?http://0.0.0.0:8080',
            // bundle the client for webpack-dev-server
            // and connect to the provided endpoint


            //'webpack/hot/only-dev-server',
            // bundle the client for hot reloading
            // only- means to only hot reload for successful updates


            APP_DIR + '/app.jsx'
            // the entry point of our app
  ],
  devtool: '#inline-source-map',
  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: BUILD_DIR,
    // match the output path

    publicPath: '/'
    // match the output `publicPath`
  },
  output: {
    path: BUILD_DIR,
    publicPath: "/",
    filename: 'bundle.js'
  },
  module : {
    rules : [
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        //include : APP_DIR + '/style',
          use: [
              'style-loader',
              'css-loader',
              'sass-loader',
          ]
      },
      { test: /\.(png|jpg)$/,
        include : APP_DIR,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    //new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ]
};

module.exports = config;