/* eslint-disable import/no-extraneous-dependencies */

module.exports = function () {
  return {
    Compilation: require('webpack5/lib/Compilation'),
    LibraryTemplatePlugin: require('webpack5/lib/LibraryTemplatePlugin'),
    LimitChunkCountPlugin: require('webpack5/lib/optimize/LimitChunkCountPlugin'),
    NodeTargetPlugin: require('webpack5/lib/node/NodeTargetPlugin'),
    NodeTemplatePlugin: require('webpack5/lib/node/NodeTemplatePlugin'),
    NormalModule: require('webpack5/lib/NormalModule'),
    RequestShortener: require('webpack5/lib/RequestShortener'),
    SingleEntryPlugin: require('webpack/lib/SingleEntryPlugin'),
    sources: require('webpack5').sources,
    webpack: require('webpack5'),
  }
}
