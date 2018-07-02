const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
  entry: './src/express/index.ts',
  plugins: [
    new NodemonPlugin()
  ]
}
