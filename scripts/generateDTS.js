const { join, dirname } = require('path');
const { copyFileSync, existsSync } = require('fs');

const devDeps = require('../package.json').devDependencies;

function generateForPkg({ name }) {
  const compiledPkgPath = join(__dirname, `../compiled/${name}`);
  const compiledPkg = require(join(compiledPkgPath, 'package'));
  const compiledMainFile = compiledPkg.main;
  const compiledTargetFile = join(
    compiledPkgPath,
    compiledMainFile.replace(/\.js$/, '.d.ts'),
  );

  const flattedName = name;
  const typesName = `@types/${flattedName}`;
  const depPkg = require(join(`${name}/package`));
  const depPkgPath = dirname(require.resolve(`${name}/package`));

  function copy(source) {
    copyFileSync(
      source,
      compiledTargetFile,
    );
    console.log(`copy ${source} to ${compiledTargetFile}`);
  }

  function normalizeType(type) {
    if (type.endsWith('.d.ts')) {
      return type;
    } else {
      return `${type}.d.ts`;
    }
  }

  if (devDeps[typesName]) {
    const typesPkg = require(`${typesName}/package`);
    const typeDepPkgPath = dirname(require.resolve(`${typesName}/package`));
    copy(join(
      typeDepPkgPath,
      normalizeType(typesPkg.types),
    ));
  } else if (depPkg.types) {
    copy(join(depPkgPath, normalizeType(depPkg.types)));
  } else if (existsSync(join(depPkgPath, 'index.d.ts'))) {
    copy(
      join(depPkgPath, 'index.d.ts'),
    );
  }
}

// generateForPkg({
//   name: 'chalk',
// });
// generateForPkg({
//   name: 'cross-spawn',
// });
// generateForPkg({
//   name: 'color',
// });
// generateForPkg({
//   name: 'cheerio',
// });
generateForPkg({
  name: 'compression',
});
// generateForPkg({
//   name: 'debug',
// });
