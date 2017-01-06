module.exports = (settings, helpers) => {
  return [
    {
    	enforce: 'pre',
      test: /\.(js|jsx)$/,
      loaders: ['eslint-loader'],
      exclude: settings.paths.ignore
    }
  ]
}
