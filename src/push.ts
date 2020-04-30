const { copyFileSync } = require('fs');
const { resolve, basename } = require('path');
const kebabCase = require('lodash.kebabcase');
const Confirm = require('prompt-confirm');

const { groups } = require('../dotfiles.json');
const cleanFilePath = require('./utils/cleanFilePath');
const backup = require('./backup');

interface Group {
  name: string;
  files: Array<string>;
}

/**
 * prompt to backup local files
 */
const prompt = new Confirm('Would you like to backup your local files?');
prompt.ask((answer: boolean) => {
  if (answer) {
    backup();
  }
  push();
});

/**
 * update local files with ones in repo
 */
const push = () => {
  console.log('Pushing from this repo to your local dotfiles:');

  groups.forEach(({ name, files }: Group) => {
    const dirName = kebabCase(name);
    const dirPath = resolve(__dirname, `../dotfiles/${dirName}`);
    // copy file from this repo to local
    files.forEach((file, index) => {
      try {
        copyFileSync(resolve(dirPath, `./${basename(file)}`), cleanFilePath(file));
        console.log(` --- [${dirName} - ${index + 1}] pushed file: ${basename(file)}`);
      } catch (err) {
        return console.error(err);
      }
    });
  });
};

export {}; // allows us to keep same-named vars in other files
