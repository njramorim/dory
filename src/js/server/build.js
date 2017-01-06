process.env.NODE_ENV = 'production'

const webpack = require('webpack')
const config = require('../../../webpack.config')

const message = 'webpack build done!'
const success = () => console.log(message)

module.exports = webpack(config.general).run(success)
