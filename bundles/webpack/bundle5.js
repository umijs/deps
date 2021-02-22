/* eslint-disable import/no-extraneous-dependencies */

module.exports = function () {
  return {
    NormalModule: require('webpack5/lib/NormalModule'),
    NodeTargetPlugin: require('webpack5/lib/node/NodeTargetPlugin'),
    sources: require('webpack5').sources,
    webpack: require('webpack5'),
  }
}
