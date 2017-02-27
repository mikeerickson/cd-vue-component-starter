/* global require */

// requires chokidar, execa, cd-messenger, sass-lint and chalk

let chokidar = require('chokidar');
let execa    = require('execa');
let msg      = require('cd-messenger');
let chalk    = require('chalk');

let srcFiles    = './src/sass/*.scss';
let sassLintBin = './node_modules/.bin/sass-lint';

msg.log(chalk.bold.cyan('\n==> Watching ' + srcFiles));

chokidar.watch(srcFiles, {ignored: /[\/\\]\./})
  .on('all', (event, path) => {
    execa(sassLintBin, [path, '-v -p'], {stdio: 'inherit'})
      .then(result => {
        console.log('');
        msg.success('Sass Linting Complete... \n');
      })
      .catch(result => {
        if(result.stderr) {
          msg.error(result.stderr);
        }
      });
});
