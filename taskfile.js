const { relative, basename, resolve } = require('path');
const { Module } = require('module');

const m = new Module(resolve(__dirname, 'bundles', '_'));
m.filename = m.id;
m.paths = Module._nodeModulePaths(m.id);
const bundleRequire = m.require;
bundleRequire.resolve = (request, options) => {
  return Module._resolveFilename(request, m, false, options);
};

const externals = {
  chokidar: 'chokidar',
  clipboardy: 'clipboardy',

  // webapck
  'node-libs-browser': 'node-libs-browser',
};

externals['address'] = '@umijs/deps/compiled/address';
export async function ncc_address(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('address'))
    )
    .ncc({ packageName: 'address', externals })
    .target('compiled/address');
}

externals['chalk'] = '@umijs/deps/compiled/chalk';
export async function ncc_chalk(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('chalk'))
    )
    .ncc({ packageName: 'chalk', externals })
    .target('compiled/chalk');
}

externals['cheerio'] = '@umijs/deps/compiled/cheerio';
export async function ncc_cheerio(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('cheerio'))
    )
    .ncc({ packageName: 'cheerio', externals })
    .target('compiled/cheerio');
}

externals['color'] = '@umijs/deps/compiled/color';
export async function ncc_color(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('color'))
    )
    .ncc({ packageName: 'color', externals })
    .target('compiled/color');
}

externals['copy-webpack-plugin'] = '@umijs/deps/compiled/copy-webpack-plugin';
export async function ncc_copy_webpack_plugin(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('copy-webpack-plugin'))
    )
    .ncc({ packageName: 'copy-webpack-plugin', externals })
    .target('compiled/copy-webpack-plugin');
}

externals['crequire'] = '@umijs/deps/compiled/crequire';
export async function ncc_crequire(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('crequire'))
    )
    .ncc({ packageName: 'crequire', externals })
    .target('compiled/crequire');
}

externals['cross-spawn'] = '@umijs/deps/compiled/cross-spawn';
export async function ncc_cross_spawn(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('cross-spawn'))
    )
    .ncc({ packageName: 'cross-spawn', externals })
    .target('compiled/cross-spawn');
}

externals['css-loader'] = '@umijs/deps/compiled/css-loader';
export async function ncc_css_loader(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('css-loader'))
    )
    .ncc({ packageName: 'css-loader', externals })
    .target('compiled/css-loader');
}

externals['css-modules-typescript-loader'] = '@umijs/deps/compiled/css-modules-typescript-loader';
export async function ncc_css_modules_typescript_loader(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('css-modules-typescript-loader'))
    )
    .ncc({ packageName: 'css-modules-typescript-loader', externals })
    .target('compiled/css-modules-typescript-loader');
}

externals['debug'] = '@umijs/deps/compiled/debug';
export async function ncc_debug(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('debug'))
    )
    .ncc({ packageName: 'debug', externals })
    .target('compiled/debug');
}

externals['deepmerge'] = '@umijs/deps/compiled/deepmerge';
export async function ncc_deepmerge(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('deepmerge'))
    )
    .ncc({ packageName: 'deepmerge', externals })
    .target('compiled/deepmerge');
}

externals['execa'] = '@umijs/deps/compiled/execa';
export async function ncc_execa(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('execa'))
    )
    .ncc({ packageName: 'execa', externals })
    .target('compiled/execa');
}

externals['file-loader'] = '@umijs/deps/compiled/file-loader';
export async function ncc_file_loader(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('file-loader'))
    )
    .ncc({ packageName: 'file-loader', externals })
    .target('compiled/file-loader');
}

externals['friendly-errors-webpack-plugin'] = '@umijs/deps/compiled/friendly-errors-webpack-plugin';
export async function ncc_friendly_errors_webpack_plugin(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('friendly-errors-webpack-plugin'))
    )
    .ncc({ packageName: 'friendly-errors-webpack-plugin', externals })
    .target('compiled/friendly-errors-webpack-plugin');
}

externals['glob'] = '@umijs/deps/compiled/glob';
export async function ncc_glob(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('glob'))
    )
    .ncc({ packageName: 'glob', externals })
    .target('compiled/glob');
}

externals['got'] = '@umijs/deps/compiled/got';
export async function ncc_got(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('got'))
    )
    .ncc({ packageName: 'got', externals })
    .target('compiled/got');
}

externals['less'] = '@umijs/deps/compiled/less';
export async function ncc_less(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('less'))
    )
    .ncc({ packageName: 'less', externals })
    .target('compiled/less');
}

externals['less-loader'] = '@umijs/deps/compiled/less-loader';
export async function ncc_less_loader(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('less-loader'))
    )
    .ncc({ packageName: 'less-loader', externals })
    .target('compiled/less-loader');
}

externals['lodash'] = '@umijs/deps/compiled/lodash';
export async function ncc_lodash(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('lodash'))
    )
    .ncc({ packageName: 'lodash', externals })
    .target('compiled/lodash');
}

externals['mkdirp'] = '@umijs/deps/compiled/mkdirp';
export async function ncc_mkdirp(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('mkdirp'))
    )
    .ncc({ packageName: 'mkdirp', externals })
    .target('compiled/mkdirp');
}

externals['mustache'] = '@umijs/deps/compiled/mustache';
export async function ncc_mustache(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('mustache'))
    )
    .ncc({ packageName: 'mustache', externals })
    .target('compiled/mustache');
}

externals['optimize-css-assets-webpack-plugin'] = '@umijs/deps/compiled/optimize-css-assets-webpack-plugin';
export async function ncc_optimize_css_assets_webpack_plugin(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('optimize-css-assets-webpack-plugin'))
    )
    .ncc({ packageName: 'optimize-css-assets-webpack-plugin', externals })
    .target('compiled/optimize-css-assets-webpack-plugin');
}

externals['pkg-up'] = '@umijs/deps/compiled/pkg-up';
export async function ncc_pkg_up(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('pkg-up'))
    )
    .ncc({ packageName: 'pkg-up', externals })
    .target('compiled/pkg-up');
}

externals['portfinder'] = '@umijs/deps/compiled/portfinder';
export async function ncc_portfinder(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('portfinder'))
    )
    .ncc({ packageName: 'portfinder', externals })
    .target('compiled/portfinder');
}

externals['raw-loader'] = '@umijs/deps/compiled/raw-loader';
export async function ncc_raw_loader(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('raw-loader'))
    )
    .ncc({ packageName: 'raw-loader', externals })
    .target('compiled/raw-loader');
}

externals['resolve'] = '@umijs/deps/compiled/resolve';
export async function ncc_resolve(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('resolve'))
    )
    .ncc({ packageName: 'resolve', externals })
    .target('compiled/resolve');
}

externals['rimraf'] = '@umijs/deps/compiled/rimraf';
export async function ncc_rimraf(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('rimraf'))
    )
    .ncc({ packageName: 'rimraf', externals })
    .target('compiled/rimraf');
}

externals['semver'] = '@umijs/deps/compiled/semver';
export async function ncc_semver(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('semver'))
    )
    .ncc({ packageName: 'semver', externals })
    .target('compiled/semver');
}

externals['signale'] = '@umijs/deps/compiled/signale';
export async function ncc_signale(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('signale'))
    )
    .ncc({ packageName: 'signale', externals })
    .target('compiled/signale');
}

externals['speed-measure-webpack-plugin'] = '@umijs/deps/compiled/speed-measure-webpack-plugin';
export async function ncc_speed_measure_webpack_plugin(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('speed-measure-webpack-plugin'))
    )
    .ncc({ packageName: 'speed-measure-webpack-plugin', externals })
    .target('compiled/speed-measure-webpack-plugin');
}

externals['stats-webpack-plugin'] = '@umijs/deps/compiled/stats-webpack-plugin';
export async function ncc_stats_webpack_plugin(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('stats-webpack-plugin'))
    )
    .ncc({ packageName: 'stats-webpack-plugin', externals })
    .target('compiled/stats-webpack-plugin');
}

externals['style-loader'] = '@umijs/deps/compiled/style-loader';
export async function ncc_style_loader(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('style-loader'))
    )
    .ncc({ packageName: 'style-loader', externals })
    .target('compiled/style-loader');
}

externals['yargs-parser'] = '@umijs/deps/compiled/yargs-parser';
export async function ncc_yargs_parser(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('yargs-parser'))
    )
    .ncc({ packageName: 'yargs-parser', externals })
    .target('compiled/yargs-parser');
}

externals['url-loader'] = '@umijs/deps/compiled/url-loader';
export async function ncc_url_loader(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('url-loader'))
    )
    .ncc({ packageName: 'url-loader', externals })
    .target('compiled/url-loader');
}

externals['webpack-chain'] = '@umijs/deps/compiled/webpack-chain';
export async function ncc_webpack_chain(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('webpack-chain'))
    )
    .ncc({ packageName: 'webpack-chain', externals })
    .target('compiled/webpack-chain');
}

externals['webpack-dev-middleware'] = '@umijs/deps/compiled/webpack-dev-middleware';
export async function ncc_webpack_dev_middleware(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('webpack-dev-middleware'))
    )
    .ncc({ packageName: 'webpack-dev-middleware', externals })
    .target('compiled/webpack-dev-middleware');
}

externals['webpack-manifest-plugin'] = '@umijs/deps/compiled/webpack-manifest-plugin';
export async function ncc_webpack_manifest_plugin(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('webpack-manifest-plugin'))
    )
    .ncc({ packageName: 'webpack-manifest-plugin', externals })
    .target('compiled/webpack-manifest-plugin');
}

externals['webpackbar'] = '@umijs/deps/compiled/webpackbar';
export async function ncc_webpackbar(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('webpackbar'))
    )
    .ncc({ packageName: 'webpackbar', externals })
    .target('compiled/webpackbar');
}

externals['yargs'] = '@umijs/deps/compiled/yargs';
export async function ncc_yargs(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('yargs'))
    )
    .ncc({ packageName: 'yargs', externals })
    .target('compiled/yargs');
}

externals['webpack-sources'] = '@umijs/deps/compiled/webpack-sources';
export async function ncc_webpack_sources(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('webpack-sources'))
    )
    .ncc({ packageName: 'webpack-sources', externals })
    .target('compiled/webpack-sources');
}

externals['webpack-sources2'] = '@umijs/deps/compiled/webpack-sources2'
export async function ncc_webpack_sources2(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, bundleRequire.resolve('webpack-sources2'))
    )
    .ncc({ packageName: 'webpack-sources2', externals, target: 'es5' })
    .target('compiled/webpack-sources2')
}

export async function ncc_webpack_bundle4(task, opts) {
  await task
    .source(opts.src || 'bundles/webpack/bundle4.js')
    .ncc({
      packageName: 'webpack',
      bundleName: 'webpack',
      externals,
      minify: false,
      target: 'es5',
    })
    .target('compiled/webpack')
}

export async function ncc_webpack_bundle5(task, opts) {
  await task
    .source(opts.src || 'bundles/webpack/bundle5.js')
    .ncc({
      packageName: 'webpack5',
      bundleName: 'webpack',
      customEmit(path) {
        if (path.endsWith('.runtime.js')) return `'./${basename(path)}'`;
      },
      externals: {
        ...externals,
        'webpack-sources': '@umijs/deps/compiled/webpack-sources2',
      },
      minify: false,
      target: 'es5',
    })
    .target('compiled/webpack');
}

export async function ncc(task) {
  await task
    .clear('compiled')
    .parallel([
      'ncc_address',
      'ncc_chalk',
      'ncc_cheerio',
      'ncc_color',
      'ncc_copy_webpack_plugin',
      'ncc_crequire',
      'ncc_cross_spawn',
      'ncc_css_loader',
      'ncc_css_modules_typescript_loader',
      'ncc_debug',
      'ncc_deepmerge',
      'ncc_execa',
      'ncc_glob',
      'ncc_got',
      'ncc_lodash',
      'ncc_less',
      'ncc_less_loader',
      'ncc_mkdirp',
      'ncc_mustache',
      'ncc_optimize_css_assets_webpack_plugin',
      'ncc_pkg_up',
      'ncc_portfinder',
      'ncc_raw_loader',
      'ncc_resolve',
      'ncc_rimraf',
      'ncc_semver',
      'ncc_signale',
      'ncc_speed_measure_webpack_plugin',
      'ncc_stats_webpack_plugin',
      'ncc_style_loader',
      'ncc_url_loader',
      'ncc_webpack_chain',
      'ncc_webpack_dev_middleware', // webpack-dev-middleware
      'ncc_webpack_manifest_plugin', // webpack-manifest-plugin
      'ncc_webpackbar',
      'ncc_yargs_parser',
      'ncc_yargs',
      'ncc_webpack_sources',
      'ncc_webpack_sources2',
      'ncc_webpack_bundle4',
      'ncc_webpack_bundle5',
      'ncc_webpack_bundle_packages',
    ]);
}

export async function ncc_webpack_bundle_packages(task, opts) {
  await task
    .source(opts.src || 'bundles/webpack/packages/*')
    .target('compiled/webpack/')
}

export default async function (task) {
  await task.clear('dist')
}
