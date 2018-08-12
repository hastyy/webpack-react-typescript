const merge = require('webpack-merge')

module.exports = (env) => {
  const commonConfig = require('./webpack/webpack.config.common')
  const envConfig = env === 'production'
    ? require('./webpack/webpack.config.prod')
    : require('./webpack/webpack.config.dev')

  return merge(commonConfig, envConfig)
}
