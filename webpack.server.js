const NodemonPlugin = require('nodemon-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/express/index.js',
  plugins: [
    new NodemonPlugin()
  ]
}