"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { mkdir, copyFile } = require('fs');
// const { promises } = require('fs');
// const { mkdir, copyFile } = promises;
const { resolve, basename } = require('path');
const kebabCase = require('lodash.kebabcase');
const { groups } = require('../dotfiles.json');
const cleanFilePath = require('./utils/cleanFilePath');
/**
 * update repo with local files
 */
console.log('Updating repo with local dotfiles:');
groups.forEach(({ name, files }) => {
    const dirName = kebabCase(name);
    const dirPath = resolve(__dirname, `../dotfiles/${dirName}`);
    // make directory
    mkdir(dirPath, { recursive: true }, (err) => {
        if (err)
            return console.error(err);
        // copy file from local to this repo
        files.forEach(file => {
            copyFile(cleanFilePath(file), resolve(dirPath, `./${basename(file)}`), (err) => {
                if (err)
                    return console.error(err);
                console.log(` --- [${dirName}] updated file: ${basename(file)}`);
            });
        });
    });
});
//# sourceMappingURL=update-repo.js.map