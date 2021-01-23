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

externals['yargs-parser'] = '@umijs/deps/compiled/yargs-parser';
export async function ncc_yargs_parser(task, opts) {
  await task
    .source(
      opts.src || relative(__dirname, require.resolve('yargs-parser'))
    )
    .ncc({ packageName: 'yargs-parser', externals })
    .target('compiled/yargs-parser');
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
      'ncc_crequire',
      'ncc_cross_spawn',
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
      'ncc_pkg_up',
      'ncc_portfinder',
      'ncc_resolve',
      'ncc_rimraf',
      'ncc_semver',
      'ncc_signale',
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
