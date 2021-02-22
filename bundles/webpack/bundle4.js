/* eslint-disable import/no-extraneous-dependencies */

module.exports = function () {
  return {
    NormalModule: require('webpack/lib/NormalModule'),
    NodeTargetPlugin: require('webpack/lib/node/NodeTargetPlugin'),
    sources: require('webpack-sources'),
    webpack: require('webpack'),
  }
}
