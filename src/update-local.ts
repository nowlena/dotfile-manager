const { mkdir, copyFile } = require('fs');
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
  updateLocal();
});

/**
 * update local files with ones in repo
 */
const updateLocal = () => {
  console.log('Updating local with repo dotfiles:');

  // groups.forEach(({ name, files }: Group) => {
  //   const dirName = kebabCase(name);
  //   const dirPath = resolve(__dirname, `../dotfiles/${dirName}`);
  //   // make directory
  //   mkdir(dirPath, { recursive: true }, (err: Error) => {
  //     if (err) return console.error(err);
  //     // copy file from this repo to local
  //     files.forEach(file => {
  //       copyFile(
  //         cleanFilePath(file),
  //         resolve(dirPath, `./${basename(file)}`),
  //         (err: Error) => {
  //           if (err) return console.error(err);
  //           console.log(` --- [${dirName}] updated file: ${basename(file)}`);
  //         }
  //       );
  //     });
  //   });
  // });
};

export {}; // allows us to keep same-named vars in other files
