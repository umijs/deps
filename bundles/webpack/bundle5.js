/* eslint-disable import/no-extraneous-dependencies */

module.exports = function () {
  return {
    LibraryTemplatePlugin: require('webpack/lib/LibraryTemplatePlugin'),
    LimitChunkCountPlugin: require('webpack/lib/optimize/LimitChunkCountPlugin'),
    NodeTargetPlugin: require('webpack5/lib/node/NodeTargetPlugin'),
    NodeTemplatePlugin: require('webpack/lib/node/NodeTemplatePlugin'),
    NormalModule: require('webpack5/lib/NormalModule'),
    SingleEntryPlugin: require('webpack/lib/SingleEntryPlugin'),
    sources: require('webpack5').sources,
    webpack: require('webpack5'),
  }
}
