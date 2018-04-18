const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './index'),

  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, './index.js'),
          path.resolve(__dirname, '../src/index.js')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-1', 'react']
        }
      }
    ]
  }
}
