const path = require('path')
const merge = require('webpack-merge')
const serverConfig = require('./webpack.server.js')

const devConfig = {
  watch: true,
  target: 'node',
  stats: 'errors-only',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)|(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}

module.exports = merge(devConfig, serverConfig)
