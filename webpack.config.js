var webpack = require('webpack');

module.exports = {
    mode: 'development',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader/webpack!babel-loader'
    }]
  },
  resolve: {
    extensions: [ '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    headers:          { 'Access-Control-Allow-Origin': '*' },
    https:            false,
    disableHostCheck: true,
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};