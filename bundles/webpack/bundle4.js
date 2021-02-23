/* eslint-disable import/no-extraneous-dependencies */

module.exports = function () {
  return {
    // inner imports
    Compilation: require('webpack/lib/Compilation'),
    ConstDependency: require('webpack/lib/dependencies/ConstDependency'),
    JavascriptParserHelpers: require('webpack/lib/javascript/JavascriptParserHelpers'),
    LibraryTemplatePlugin: require('webpack/lib/LibraryTemplatePlugin'),
    NodeTargetPlugin: require('webpack/lib/node/NodeTargetPlugin'),
    NodeTemplatePlugin: require('webpack/lib/node/NodeTemplatePlugin'),
    NormalModule: require('webpack/lib/NormalModule'),
    RequestShortener: require('webpack/lib/RequestShortener'),
    RuntimeGlobals: require('webpack/lib/RuntimeGlobals'),
    RuntimeModule: require('webpack/lib/RuntimeModule'),
    LimitChunkCountPlugin: require('webpack/lib/optimize/LimitChunkCountPlugin'),
    ParserHelpers: require('webpack/lib/ParserHelpers'),
    SingleEntryPlugin: require('webpack/lib/SingleEntryPlugin'),
    Template: require('webpack/lib/Template'),

    sources: require('webpack-sources'),
    webpack: require('webpack'),
  }
}
