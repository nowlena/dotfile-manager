"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { mkdir, copyFile } = require('fs');
const { resolve, basename } = require('path');
const kebabCase = require('lodash.kebabcase');
const { groups } = require('../dotfiles.json');
const cleanFilePath = require('./utils/cleanFilePath');
const getDateString = require('./utils/getDateString');
/**
 * update repo with local files
 */
const backup = () => {
    console.log('Backing up local dotfiles:');
    const backupDirPath = resolve(__dirname, `../backups/${getDateString()}`);
    groups.forEach(({ name, files }) => {
        const dirName = kebabCase(name);
        const dirPath = `${backupDirPath}/${dirName}`;
        // make directory
        mkdir(dirPath, { recursive: true }, (err) => {
            if (err)
                return console.error(err);
            // backup local files into this repo as a backup
            files.forEach(file => {
                copyFile(cleanFilePath(file), resolve(dirPath, `./${basename(file)}`), (err) => {
                    if (err)
                        return console.error(err);
                    console.log(` --- [${dirName}] backed up file: ${basename(file)}`);
                });
            });
        });
    });
};
module.exports = backup;
//# sourceMappingURL=backup.js.map