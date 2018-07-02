const NodemonPlugin = require('nodemon-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/express/index.ts',
  plugins: [
    new NodemonPlugin()
  ]
}
