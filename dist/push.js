"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { mkdirSync, copyFileSync } = require('fs');
const { resolve, basename } = require('path');
const kebabCase = require('lodash.kebabcase');
const Confirm = require('prompt-confirm');
const { groups } = require('../dotfiles.json');
const cleanFilePath = require('./utils/cleanFilePath');
const backup = require('./backup');
/**
 * prompt to backup local files
 */
const prompt = new Confirm('Would you like to backup your local files?');
prompt.ask((answer) => {
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
        // copy file from this repo to local
        files.forEach((file, index) => {
            try {
                copyFileSync(resolve(dirPath, `./${basename(file)}`), cleanFilePath(file));
                console.log(` --- [${dirName} - ${index + 1}] pushed file: ${basename(file)}`);
            }
            catch (err) {
                return console.error(err);
            }
        });
    });
};
//# sourceMappingURL=push.js.map