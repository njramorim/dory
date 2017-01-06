const webpack = require('webpack')
const copy = require('copy-webpack-plugin')
const extract = require('extract-text-webpack-plugin')
const environment = require('./../environment')
const environments = {
  development: require('./plugins/development'),
  production: require('./plugins/production')
}

const plugins = environments[environment]

module.exports = (settings, helpers) => {
  return [
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify(environment)}
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new copy(settings.paths.static.map(helpers.static)),
    new extract({filename: '[name]', allChunks: true}),
    new webpack.NoErrorsPlugin()
  ].concat(plugins(settings, helpers))
}
