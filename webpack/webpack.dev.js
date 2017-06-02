const {resolve} = require('path')
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const srcDir = resolve(__dirname, '../src')
const DashboardPlugin = require('webpack-dashboard/plugin')
require("react-hot-loader/patch")

module.exports = {
  entry: [
    "react-hot-loader/patch",
    `${srcDir}/index.jsx`,
  ],
  output: {
    path: resolve(__dirname, "../dist"),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: "eval",
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },{
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader'
        },{
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:6]'
        },{
          loader: 'sass-loader'
        }],
      },{
        test: /\.css$/,
        include: /node_modules/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:6]'
        }]
      }, {
        test: /\.(jpe?g|png|gif|svg|otf|ttf)$/i,
        loader: 'url-loader'
      }, {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${srcDir}/index.html`
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nb/),
    new DashboardPlugin(),
  ]
}
