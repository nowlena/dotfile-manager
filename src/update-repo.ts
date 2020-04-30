const { mkdir, copyFile } = require('fs');
// const { promises } = require('fs');
// const { mkdir, copyFile } = promises;
const { resolve, basename } = require('path');
const kebabCase = require('lodash.kebabcase');

const { groups } = require('../dotfiles.json');
const cleanFilePath = require('./utils/cleanFilePath');

interface Group {
  name: string;
  files: Array<string>;
}

/**
 * update repo with local files
 */
console.log('Updating repo with local dotfiles:');

groups.forEach(({ name, files }: Group) => {
  const dirName = kebabCase(name);
  const dirPath = resolve(__dirname, `../dotfiles/${dirName}`);
  // make directory
  mkdir(dirPath, { recursive: true }, (err: Error) => {
    if (err) return console.error(err);
    // copy file from local to this repo
    files.forEach(file => {
      copyFile(
        cleanFilePath(file),
        resolve(dirPath, `./${basename(file)}`),
        (err: Error) => {
          if (err) return console.error(err);
          console.log(` --- [${dirName}] updated file: ${basename(file)}`);
        }
      );
    });
  });
});

/**
 * async await
 */
// groups.forEach(async ({ name, files }: Group) => {
//   const dirName = kebabCase(name);
//   const dirPath = resolve(__dirname, `../dotfiles/${dirName}`);
//   // make directory
//   await mkdir(dirPath, { recursive: true })
//     .catch((err: Error) => console.error(err));
//   // copy file from local to this repo in it's proper directory
//   files.forEach(async (file) => {
//     await copyFile(cleanFilePath(file), resolve(dirPath, `./${basename(file)}`))
//       .catch((err: Error) => console.error(err))
//     console.log(` --- [${dirName}] updated file: ${file}`);
//   });
// });

/**
 * using promises
 */
// groups.forEach(async ({ name, files }: Group) => {
//   const dirName = kebabCase(name);
//   const dirPath = resolve(__dirname, `../dotfiles/${dirName}`);
//   // make directory
//   mkdir(dirPath, { recursive: true })
//     .then(() => {
//       console.log(`Created directory: ${dirName}`);
//       // copy file from local to this repo
//       files.forEach((file) => {
//         copyFile(cleanFilePath(file), resolve(dirPath, `./${basename(file)}`))
//           .then(() => {
//             console.log(` --- copied file: ${file}`);
//           })
//           .catch((err: Error) => console.error(err));
//       });
//     })
//     .catch((err: Error) => console.error(err));
// });

export {}; // allows us to keep same-named vars in other files
