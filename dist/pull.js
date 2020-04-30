"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { mkdirSync, copyFileSync } = require('fs');
const { resolve, basename } = require('path');
const kebabCase = require('lodash.kebabcase');
const { groups } = require('../dotfiles.json');
const cleanFilePath = require('./utils/cleanFilePath');
/**
 * update repo with local files
 */
console.log('Pulling local dotfiles to this repo:');
groups.forEach(({ name, files }) => {
    const dirName = kebabCase(name);
    const dirPath = resolve(__dirname, `../dotfiles/${dirName}`);
    // make directory
    try {
        mkdirSync(dirPath, { recursive: true });
    }
    catch (err) {
        return console.error(err);
    }
    // copy file from local to this repo
    files.forEach((file, index) => {
        try {
            copyFileSync(cleanFilePath(file), resolve(dirPath, `./${basename(file)}`));
            console.log(` --- [${dirName} - ${index + 1}] pulled file: ${basename(file)}`);
        }
        catch (err) {
            return console.error(err);
        }
    });
});
//# sourceMappingURL=pull.js.map