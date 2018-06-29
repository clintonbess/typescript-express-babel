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
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      }
    ],
    resolve: {
      root: [path.resolve('./src')],
      extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    }
  }
}

module.exports = merge(devConfig, serverConfig)
