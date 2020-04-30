const { mkdir, copyFile } = require('fs');
const { resolve, basename } = require('path');
const kebabCase = require('lodash.kebabcase');

const { groups } = require('../dotfiles.json');
const cleanFilePath = require('./utils/cleanFilePath');
const getDateString = require('./utils/getDateString');

interface Group {
  name: string;
  files: Array<string>;
}

/**
 * update repo with local files
 */
const backup = () => {
  console.log('Backing up local dotfiles:');
  const backupDirPath = resolve(__dirname, `../backups/${getDateString()}`);

  groups.forEach(({ name, files }: Group) => {
    const dirName = kebabCase(name);
    const dirPath = `${backupDirPath}/${dirName}`;
    // make directory
    mkdir(dirPath, { recursive: true }, (err: Error) => {
      if (err) return console.error(err);
      // backup local files into this repo as a backup
      files.forEach(file => {
        copyFile(
          cleanFilePath(file),
          resolve(dirPath, `./${basename(file)}`),
          (err: Error) => {
            if (err) return console.error(err);
            console.log(` --- [${dirName}] backed up file: ${basename(file)}`);
          }
        );
      });
    });
  });
};

module.exports = backup;
export {};
