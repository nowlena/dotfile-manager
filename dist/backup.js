"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { mkdirSync, copyFileSync } = require('fs');
const { resolve, basename } = require('path');
const kebabCase = require('lodash.kebabcase');
const { groups } = require('../dotfiles.json');
const cleanFilePath = require('./utils/cleanFilePath');
const getDateString = require('./utils/getDateString');
/**
 * update repo with local files
 */
const backup = () => {
    console.log('Backing up local dotfiles to this repo:');
    const backupDirPath = resolve(__dirname, `../backups/${getDateString()}`);
    groups.forEach(({ name, files }) => {
        const dirName = kebabCase(name);
        const dirPath = `${backupDirPath}/${dirName}`;
        try {
            // make directory
            mkdirSync(dirPath, { recursive: true });
        }
        catch (err) {
            return console.error(err);
        }
        // backup local files into this repo as a backup
        files.forEach((file, index) => {
            try {
                copyFileSync(cleanFilePath(file), resolve(dirPath, `./${basename(file)}`));
                console.log(` --- [${dirName} - ${index + 1}] backed up file: ${basename(file)}`);
            }
            catch (err) {
                return console.error(err);
            }
        });
    });
};
module.exports = backup;
//# sourceMappingURL=backup.js.map