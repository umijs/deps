const fs = require('fs');
const path = require('path');

const SCAN_PATH = path.join(__dirname, '../compiled/babel/bundle.js');

try {
  let fileString = fs.readFileSync(SCAN_PATH, 'utf8');
  const targetStr = `
  // change by scripts/fixBabelBundle.js
  // __nccwpck_require__(7905) = utils;
  utils('is-plain-object', 'isObject');
  utils('shallow-clone', 'clone');
  utils('kind-of', 'typeOf');
  __nccwpck_require__(27281);
  // __nccwpck_require__(7905) = fn;`
  fileString = fileString.replace(/(\r|\n)*?.*?__nccwpck_require__\(7905\) = utils;(.|\r|\n)*?__nccwpck_require__\(7905\) = fn;/, targetStr);
  fs.writeFileSync(SCAN_PATH, fileString);
  console.log('babel build fixed!');
} catch (err) {
  // eslint-disable-next-line no-console
  console.log(err);
}
