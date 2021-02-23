/* eslint-disable import/no-extraneous-dependencies */

module.exports = function () {
  return {
    LibraryTemplatePlugin: require('webpack/lib/LibraryTemplatePlugin'),
    LimitChunkCountPlugin: require('webpack/lib/optimize/LimitChunkCountPlugin'),
    NodeTargetPlugin: require('webpack/lib/node/NodeTargetPlugin'),
    NodeTemplatePlugin: require('webpack/lib/node/NodeTemplatePlugin'),
    NormalModule: require('webpack/lib/NormalModule'),
    SingleEntryPlugin: require('webpack/lib/SingleEntryPlugin'),
    sources: require('webpack-sources'),
    webpack: require('webpack'),
  }
}
