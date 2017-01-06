const webpack = require('webpack')
const compression = require('compression-webpack-plugin')
const html = require('html-webpack-plugin')

module.exports = (settings) => {
  return [
    new html({
      minify: {removeComments: true, collapseWhitespace: true},
      template: settings.paths.index,
      inject: false
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    }),
    new compression({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.html$|\.css$|\.js$/
    })
  ]
}
