const webpack = require('webpack')
const html = require('html-webpack-plugin')

module.exports = (settings) => {
  return [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    new html({template: settings.paths.index, inject: false}),
    new webpack.HotModuleReplacementPlugin()
  ]
}
